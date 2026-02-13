<?php
// mail.php - Secure Contact Form Handler
// POST-only, JSON-only, Honeypot-protected

// 1. Security Headers
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");

// 2. method Check
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// 3. Parse JSON Input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON data"]);
    exit;
}

// 4. Honeypot Check
if (!empty($data['website_url'])) {
    // Silent failure for bots
    echo json_encode(["success" => true, "message" => "Message sent successfully."]);
    exit;
}

// 5. Validation & Sanitization
function clean_header($text) {
    // Strip newlines to prevent header injection
    return str_replace(["\r", "\n"], '', strip_tags(trim($text)));
}

function clean_body($text) {
    return htmlspecialchars(strip_tags(trim($text)));
}

// Required fields
$required = ['name', 'phone', 'email'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize inputs
$name = clean_header($data['name']);
$company = clean_header($data['company'] ?? 'N/A');
$phone = clean_header($data['phone']);
// Validate email strictly
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address"]);
    exit;
}

$location = clean_body($data['location'] ?? 'N/A');
$timeline = clean_body($data['timeline'] ?? 'N/A');
$productNeeds = clean_body($data['productNeeds'] ?? 'N/A');
$comments = clean_body($data['comments'] ?? '');


// 6. Email Construction
// TODO: Replace these with the client's actual email and/or SMS gateway
// Example SMS Gateways: 
// Verizon: number@vtext.com
// AT&T: number@txt.att.net
// T-Mobile: number@tmomail.net
$to_emails = [
    'contact@premierlumber.com', // Primary Business Email (if exists)
    // 'owner_personal@gmail.com', // Backup Personal Email
    // '2199386275@vtext.com'      // SMS Notification (Verizon Example)
];

$to = implode(',', $to_emails);
$subject = "New Website Quote Request: $name";

// Strict Header Construction
$headers = "From: no-reply@premierlumber.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$messageBody = "New Quote Request from Website\n\n";
$messageBody .= "Name: $name\n";
$messageBody .= "Company: $company\n";
$messageBody .= "Phone: $phone\n";
$messageBody .= "Email: $email\n";
$messageBody .= "Location: $location\n";
$messageBody .= "Timeline: $timeline\n";
$messageBody .= "-----------------------------------\n";
$messageBody .= "Product Needs:\n$productNeeds\n\n";
$messageBody .= "Additional Comments:\n$comments\n";

// 7. Send Email
if (mail($to, $subject, $messageBody, $headers)) {
    echo json_encode(["success" => true, "message" => "Thank you! Your quote request has been sent."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server error: Unable to send email."]);
}
?>
