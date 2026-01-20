<?php
// ==================================================
// PREMIER LUMBER CO - SECURITY CONFIGURATION
// Include this at the top of any page with forms
// Hostinger & Linux Compatible
// ==================================================

// 1. START SECURE SESSION
if (session_status() === PHP_SESSION_NONE) {
    // Set secure session parameters before starting
    ini_set('session.cookie_httponly', 1);
    ini_set('session.cookie_secure', 1);
    ini_set('session.use_strict_mode', 1);
    ini_set('session.cookie_samesite', 'Strict');

    session_start();
}

// 2. GENERATE CSRF TOKEN (for forms)
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// 3. REGENERATE TOKEN PERIODICALLY (every 30 mins)
if (!isset($_SESSION['csrf_created']) || (time() - $_SESSION['csrf_created']) > 1800) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    $_SESSION['csrf_created'] = time();
}

// 4. SET SECURITY HEADERS (PHP-level backup)
if (!headers_sent()) {
    header('X-Frame-Options: SAMEORIGIN');
    header('X-Content-Type-Options: nosniff');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');

    // Only set HSTS if HTTPS
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
        header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
    }
}

// 5. BUSINESS CONSTANTS
define('BUSINESS_NAME', 'Premier Lumber Co');
define('BUSINESS_EMAIL', 'hunti@premierlumber.com');
define('BUSINESS_PHONE', '(219) 938-6275');
define('BUSINESS_CITY', 'Gary, Indiana');
define('BUSINESS_ADDRESS', '3100 E 5th Ave, Gary, IN 46402');

// 6. FORM SETTINGS
define('FORM_ACTION', '/php/contact.php');
define('MAX_MESSAGE_LENGTH', 2000);
define('RATE_LIMIT_REQUESTS', 3);
define('RATE_LIMIT_WINDOW', 300); // 5 minutes

// 7. HELPER FUNCTION: Get CSRF Token for forms
function getCSRFToken() {
    return $_SESSION['csrf_token'] ?? '';
}

// 8. HELPER FUNCTION: Get CSRF input field HTML
function csrfField() {
    return '<input type="hidden" name="csrf_token" value="' . htmlspecialchars(getCSRFToken(), ENT_QUOTES, 'UTF-8') . '">';
}

// 9. HELPER FUNCTION: Validate CSRF Token
function validateCSRF($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// 10. HELPER FUNCTION: Sanitize output for display
function e($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

// 11. HELPER FUNCTION: Check if request is HTTPS
function isSecure() {
    return (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || $_SERVER['SERVER_PORT'] == 443
        || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
}

// 12. FORCE HTTPS (PHP-level backup)
if (!isSecure() && !empty($_SERVER['HTTP_HOST'])) {
    // Only redirect in production (not localhost)
    if (strpos($_SERVER['HTTP_HOST'], 'localhost') === false && strpos($_SERVER['HTTP_HOST'], '127.0.0.1') === false) {
        header('Location: https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'], true, 301);
        exit;
    }
}
?>
