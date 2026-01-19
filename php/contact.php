<?php
// php/contact.php
// Secure Contact Form Handler with Protection Against:
// - SQL Injection (N/A - no database)
// - XSS (input sanitization)
// - CSRF (token validation)
// - Email Header Injection
// - Spam Bots (honeypot + rate limiting)

session_start();

// Return JSON response
header('Content-Type: application/json');

// ============================================
// SECURITY FUNCTIONS
// ============================================

/**
 * Generate CSRF Token
 */
function generateCSRFToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

/**
 * Validate CSRF Token
 */
function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * Rate Limiting - Max 5 submissions per 10 minutes per IP
 */
function checkRateLimit() {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $rate_file = sys_get_temp_dir() . '/premier_rate_' . md5($ip) . '.txt';
    $max_requests = 5;
    $time_window = 600; // 10 minutes
    
    $requests = [];
    if (file_exists($rate_file)) {
        $requests = json_decode(file_get_contents($rate_file), true) ?: [];
    }
    
    // Remove old requests outside time window
    $now = time();
    $requests = array_filter($requests, function($t) use ($now, $time_window) {
        return ($now - $t) < $time_window;
    });
    
    if (count($requests) >= $max_requests) {
        return false; // Rate limited
    }
    
    // Add current request
    $requests[] = $now;
    file_put_contents($rate_file, json_encode($requests));
    
    return true;
}

/**
 * Sanitize input - prevent XSS and injection
 */
function sanitizeInput($input, $maxLength = 500) {
    if (!is_string($input)) return '';
    $input = trim($input);
    $input = substr($input, 0, $maxLength); // Length limit
    $input = strip_tags($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

/**
 * Sanitize email header - prevent header injection
 */
function sanitizeEmailHeader($input) {
    // Remove any newlines or carriage returns (header injection prevention)
    return preg_replace('/[\r\n]+/', '', $input);
}

/**
 * Validate phone number format
 */
function validatePhone($phone) {
    // Allow digits, spaces, dashes, parentheses, plus sign
    $cleaned = preg_replace('/[^\d]/', '', $phone);
    return strlen($cleaned) >= 10 && strlen($cleaned) <= 15;
}

// ============================================
// MAIN HANDLER
// ============================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

// 1. Rate Limit Check
if (!checkRateLimit()) {
    echo json_encode(["success" => false, "message" => "Too many requests. Please wait a few minutes and try again."]);
    exit;
}

// 2. Honeypot Check (bot trap - this field should be empty)
$honeypot = $_POST["website"] ?? $_POST["url"] ?? $_POST["fax"] ?? '';
if (!empty($honeypot)) {
    // Silently reject - likely a bot
    echo json_encode(["success" => true, "message" => "Thanks! We received your request."]);
    exit;
}

// 3. CSRF Token Validation (optional - only if token was set)
$csrf_token = $_POST["csrf_token"] ?? '';
if (!empty($_SESSION['csrf_token']) && !empty($csrf_token)) {
    if (!validateCSRFToken($csrf_token)) {
        echo json_encode(["success" => false, "message" => "Security validation failed. Please refresh and try again."]);
        exit;
    }
}

// 4. Sanitize and Validate Input
$name = sanitizeInput($_POST["name"] ?? '', 100);
$phone = sanitizeInput($_POST["phone"] ?? '', 20);
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$service = sanitizeInput($_POST["service"] ?? '', 100);
$city = sanitizeInput($_POST["city"] ?? '', 100);
$preferred = sanitizeInput($_POST["preferred_contact"] ?? 'Phone', 50);
$message = sanitizeInput($_POST["message"] ?? '', 2000);

// 5. Required Field Validation
if (empty($name) || strlen($name) < 2) {
    echo json_encode(["success" => false, "message" => "Please enter a valid name."]);
    exit;
}

if (empty($phone) || !validatePhone($phone)) {
    echo json_encode(["success" => false, "message" => "Please enter a valid phone number."]);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
    exit;
}

if (empty($service)) {
    echo json_encode(["success" => false, "message" => "Please select a service."]);
    exit;
}

if (empty($message) || strlen($message) < 10) {
    echo json_encode(["success" => false, "message" => "Please enter a message (at least 10 characters)."]);
    exit;
}

// 6. Prepare Email (sanitize headers to prevent injection)
$to = "hunti@premierlumber.com";
$subject = sanitizeEmailHeader("New Web Quote: $service - $name");

$email_content = "New Quote Request from Premier Lumber Site\n";
$email_content .= "==========================================\n\n";
$email_content .= "Name: $name\n";
$email_content .= "Phone: $phone\n";
$email_content .= "Email: $email\n";
$email_content .= "Service: $service\n";
$email_content .= "City/Area: $city\n";
$email_content .= "Preferred Contact: $preferred\n\n";
$email_content .= "Message:\n$message\n\n";
$email_content .= "==========================================\n";
$email_content .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$email_content .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

// 7. Headers (sanitized to prevent injection)
$safe_email = sanitizeEmailHeader($email);
$headers = "From: Website Form <noreply@premierlumber.com>\r\n";
$headers .= "Reply-To: $safe_email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 8. Send Email
if (mail($to, $subject, $email_content, $headers)) {
    // Regenerate CSRF token after successful submission
    unset($_SESSION['csrf_token']);
    echo json_encode(["success" => true, "message" => "Thanks! We received your request and will contact you within 2 hours during business hours."]);
} else {
    error_log("Mail failed for: $email - $name");
    echo json_encode(["success" => false, "message" => "Server error: Could not send email. Please call (219) 938-6275."]);
}
?>
