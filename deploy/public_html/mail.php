<?php
/**
 * Premier Lumber — Secure Contact Form Handler
 *
 * Requirements: PHP 7+, Hostinger shared hosting.
 * Receives JSON POST from rfq-form, validates, sends email.
 */

// ─── Config ───
$TO_EMAIL  = 'info@premierlumber.com';   // Change to actual inbox
$SUBJECT   = 'New Quote Request — premierlumber.com';
$MAX_LEN   = 5000;

// ─── Only accept POST ───
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ─── CORS (same-origin) ───
header('Content-Type: application/json; charset=UTF-8');

// ─── Parse JSON body ───
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

// ─── Honeypot check ───
if (!empty($data['website_url'])) {
    // Bot detected — respond 200 but do nothing
    echo json_encode(['ok' => true]);
    exit;
}

// ─── Sanitize & validate ───
$name    = trim(strip_tags($data['name'] ?? ''));
$phone   = trim(strip_tags($data['phone'] ?? ''));
$email   = trim(strip_tags($data['email'] ?? ''));
$service = trim(strip_tags($data['service'] ?? ''));
$message = trim(strip_tags($data['message'] ?? ''));

$errors = [];

if (strlen($name) < 2) {
    $errors[] = 'Name is required';
}
if (strlen($phone) < 7) {
    $errors[] = 'Valid phone number is required';
}
if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}
if (strlen($message) < 5) {
    $errors[] = 'Message is required';
}
if (strlen($message) > $MAX_LEN) {
    $errors[] = 'Message too long';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

// ─── Build email ───
$body  = "New Quote Request from premierlumber.com\n";
$body .= "========================================\n\n";
$body .= "Name:    $name\n";
$body .= "Phone:   $phone\n";
$body .= "Email:   " . ($email ?: '(not provided)') . "\n";
$body .= "Service: " . ($service ?: '(not specified)') . "\n\n";
$body .= "Message:\n$message\n\n";
$body .= "────────────\n";
$body .= "Sent: " . date('Y-m-d H:i:s T') . "\n";
$body .= "IP:   " . $_SERVER['REMOTE_ADDR'] . "\n";

$headers  = "From: noreply@premierlumber.com\r\n";
if ($email) {
    $headers .= "Reply-To: $email\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ─── Send ───
$sent = mail($TO_EMAIL, $SUBJECT, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send email. Please call (219) 938-6275.']);
}
