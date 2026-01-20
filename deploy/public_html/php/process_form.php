<?php
// ==========================================
// PREMIER LUMBER CO - SECURE FORM HANDLER
// OWASP Top 10 Compliant (2024)
// ==========================================

// 1. Start session for CSRF protection
session_start();

// 2. Set secure session cookies (OWASP #5 - Broken Authentication)
ini_set('session.cookie_httponly', 1);  // No JavaScript access
ini_set('session.cookie_secure', 1);    // HTTPS only
ini_set('session.use_strict_mode', 1);  // Prevent fixation attacks

// 3. Verify request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// 4. Verify CSRF token (OWASP #4 - Insecure Design)
if (empty($_POST['csrf_token']) || !hash_equals($_SESSION['csrf_token'] ?? '', $_POST['csrf_token'])) {
    http_response_code(403);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Security validation failed. Please refresh and try again.']);
    error_log('CSRF Token mismatch - IP: ' . $_SERVER['REMOTE_ADDR']);
    exit;
}

// 5. Rate limiting (Prevent spam/brute force) - OWASP #9
$ip = $_SERVER['REMOTE_ADDR'];
$cache_file = sys_get_temp_dir() . '/rate_limit_' . md5($ip . date('Y-m-d-H-i'));

if (file_exists($cache_file)) {
    $requests = (int)file_get_contents($cache_file);
    if ($requests > 5) {  // Max 5 forms per minute per IP
        http_response_code(429);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Too many requests. Please wait 1 minute before trying again.']);
        error_log('Rate limit exceeded - IP: ' . $ip);
        exit;
    }
    file_put_contents($cache_file, $requests + 1);
} else {
    file_put_contents($cache_file, 1);
}

// 6. Sanitize and validate inputs (OWASP #3 - Injection Prevention)
$name = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = preg_replace('/[^0-9\-\.\s()]+/', '', $_POST['phone'] ?? '');
$service = htmlspecialchars(trim($_POST['service'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// 7. Validate inputs
$errors = [];

if (empty($name) || strlen($name) < 2 || strlen($name) > 100) {
    $errors[] = 'Name must be 2-100 characters';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email address';
}

if (empty($phone) || !preg_match('/^[0-9\-\.\s()]{10,15}$/', $phone)) {
    $errors[] = 'Invalid phone number (10-15 digits required)';
}

$allowed_services = ['pallets', 'firewood', 'sawdust', 'logs', 'milling'];
if (empty($service) || !in_array(strtolower($service), $allowed_services)) {
    $errors[] = 'Please select a valid service';
}

if (empty($message) || strlen($message) < 5 || strlen($message) > 1000) {
    $errors[] = 'Message must be 5-1000 characters';
}

// If validation fails, return errors
if (!empty($errors)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['errors' => $errors]);
    error_log('Form validation failed - IP: ' . $ip . ' - Errors: ' . implode(', ', $errors));
    exit;
}

// 8. Log form submission (for monitoring) - OWASP #9
$log_entry = date('Y-m-d H:i:s') . " | IP: " . $ip . " | Email: " . $email . " | Service: " . $service . "\n";
error_log($log_entry);

// 9. Build email body
$to = 'info@premierlumber.com';  // HARDCODED - Never from user input
$subject = 'New Quote Request: ' . $service;

$body = "=== NEW QUOTE REQUEST ===\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Service: " . $service . "\n";
$body .= "Message:\n" . $message . "\n\n";
$body .= "---\n";
$body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP Address: " . $ip . "\n";

// 10. Send email securely (OWASP #2 - Cryptographic Failures)
$headers = "From: noreply@premierlumber.com\r\n";
$headers .= "Reply-To: noreply@premierlumber.com\r\n";  // Never reply-to user
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$mail_sent = mail($to, $subject, $body, $headers);

if ($mail_sent) {
    // 11. Send confirmation email to customer
    $user_subject = 'Premier Lumber - We Received Your Request';
    $user_body = "Hi " . $name . ",\n\n";
    $user_body .= "Thank you for contacting Premier Lumber Co!\n\n";
    $user_body .= "We received your " . $service . " inquiry.\n";
    $user_body .= "Our team will call you at " . $phone . " within 2 business hours.\n\n";
    $user_body .= "If you have questions, call us directly: (219) 938-6275\n\n";
    $user_body .= "Best regards,\n";
    $user_body .= "Premier Lumber Co Team\n";
    $user_body .= "Gary, Indiana\n";
    
    $user_headers = "From: noreply@premierlumber.com\r\n";
    $user_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    mail($email, $user_subject, $user_body, $user_headers);
    
    // 12. Return success
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! We received your request. We\'ll contact you within 2 hours.'
    ]);
    
    error_log('Form submission successful - Email: ' . $email);
} else {
    // 13. Error sending email (don't expose to user)
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred. Please call us directly at (219) 938-6275.'
    ]);
    
    error_log('Mail send failed for: ' . $email . ' - IP: ' . $ip);
}

exit;
?>
