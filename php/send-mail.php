<?php
// php/send-mail.php
// Secure Mail Handler with Protection Against Injection Attacks

session_start();

// ============================================
// SECURITY FUNCTIONS
// ============================================

/**
 * Rate Limiting - Max 5 submissions per 10 minutes per IP
 */
function checkRateLimit() {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $rate_file = sys_get_temp_dir() . '/premier_mail_rate_' . md5($ip) . '.txt';
    $max_requests = 5;
    $time_window = 600; // 10 minutes
    
    $requests = [];
    if (file_exists($rate_file)) {
        $requests = json_decode(file_get_contents($rate_file), true) ?: [];
    }
    
    $now = time();
    $requests = array_filter($requests, function($t) use ($now, $time_window) {
        return ($now - $t) < $time_window;
    });
    
    if (count($requests) >= $max_requests) {
        return false;
    }
    
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
    $input = substr($input, 0, $maxLength);
    $input = strip_tags($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

/**
 * Sanitize email header - prevent header injection
 */
function sanitizeEmailHeader($input) {
    return preg_replace('/[\r\n]+/', '', $input);
}

/**
 * Validate phone number
 */
function validatePhone($phone) {
    $cleaned = preg_replace('/[^\d]/', '', $phone);
    return strlen($cleaned) >= 10 && strlen($cleaned) <= 15;
}

// ============================================
// MAIN HANDLER
// ============================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(403);
    echo "Invalid request method.";
    exit;
}

// Rate limit check
if (!checkRateLimit()) {
    http_response_code(429);
    echo "Too many requests. Please wait a few minutes.";
    exit;
}

// Honeypot check (bot trap)
$honeypot = $_POST["website"] ?? $_POST["url"] ?? $_POST["fax"] ?? '';
if (!empty($honeypot)) {
    http_response_code(200);
    echo "Thank you! Your message has been sent.";
    exit;
}

// 1. Sanitize & Validate
$name = sanitizeInput($_POST["name"] ?? '', 100);
$phone = sanitizeInput($_POST["phone"] ?? '', 20);
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$service = sanitizeInput($_POST["service"] ?? '', 100);
$message = sanitizeInput($_POST["message"] ?? '', 2000);

// Check required fields
if (empty($name) || strlen($name) < 2) {
    http_response_code(400);
    echo "Please enter a valid name.";
    exit;
}

if (empty($phone) || !validatePhone($phone)) {
    http_response_code(400);
    echo "Please enter a valid phone number.";
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please enter a valid email address.";
    exit;
}

if (empty($message) || strlen($message) < 10) {
    http_response_code(400);
    echo "Please enter a message (at least 10 characters).";
    exit;
}

// 2. Prepare Email
$to = "hunti@premierlumber.com";
$subject = sanitizeEmailHeader("New Inquiry from Website: $service");

$email_content = "New Inquiry from Premier Lumber Site\n";
$email_content .= "=====================================\n\n";
$email_content .= "Name: $name\n";
$email_content .= "Phone: $phone\n";
$email_content .= "Email: $email\n";
$email_content .= "Service Interest: $service\n\n";
$email_content .= "Message:\n$message\n\n";
$email_content .= "=====================================\n";
$email_content .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$email_content .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

// 3. Headers (sanitized)
$safe_email = sanitizeEmailHeader($email);
$headers = "From: Website Notification <noreply@premierlumber.com>\r\n";
if (!empty($safe_email)) {
    $headers .= "Reply-To: $safe_email\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

// 4. Send
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo "Thank you! Your message has been sent.";
} else {
    error_log("Mail failed for: $email - $name");
    http_response_code(500);
    echo "Server error. Please call (219) 938-6275.";
}
?>
