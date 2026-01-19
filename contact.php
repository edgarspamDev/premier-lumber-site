<?php
$pageTitle = "Contact & Quotes | Premier Lumber Co - Gary, IN";
$metaDescription = "Call or request a free quote for pallets, firewood, sawdust, custom lumber, or free log pickup. Fast response for Gary and Northwest Indiana.";
$extraScripts = '<script src="js/forms.js"></script>';
include 'header.php';
?>

<div class="page-header">
    <div class="container">
        <h1>Contact & Quotes</h1>
        <p class="lead">Talk to a real person in minutes. We serve Gary, IN and all of Northwest Indiana.</p>
    </div>
</div>

<section class="container section">
    <div class="contact-wrap">
        <div class="info-card">
            <span class="info-label">Call</span>
            <a class="info-value" href="tel:(219)938-6275">(219) 938-6275</a>
            <p>Fastest for rush jobs and same/next-day delivery.</p>
        </div>
        <div class="info-card">
            <span class="info-label">Email</span>
            <a class="info-value" href="mailto:contact@premierlumber.com">contact@premierlumber.com</a>
            <p>Send drawings, specs, or pallet counts.</p>
        </div>
        <div class="info-card">
            <span class="info-label">Visit / Yard</span>
            <div class="info-value">6717 Atcheson Drive<br>Gary, IN 46403</div>
            <p>Pickup available by appointment.</p>
        </div>
        <div class="info-card">
            <span class="info-label">Hours</span>
            <div class="info-value">Mon–Fri: 7:00 AM – 5:00 PM<br>Sat: 8:00 AM – 12:00 PM</div>
            <p>Call for off-hour accommodations.</p>
        </div>
    </div>

    <div class="contact-form" style="margin-top:1.8rem;">
        <form id="contact-form" action="php/contact.php" method="POST" novalidate>
            <div class="form-row">
                <div class="form-group">
                    <label for="form-name">Name *</label>
                    <input type="text" id="form-name" name="name" class="form-input" required>
                    <small class="error" id="error-name"></small>
                </div>
                <div class="form-group">
                    <label for="form-phone">Phone *</label>
                    <input type="tel" id="form-phone" name="phone" class="form-input" required>
                    <small class="error" id="error-phone"></small>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="form-email">Email *</label>
                    <input type="email" id="form-email" name="email" class="form-input" required>
                    <small class="error" id="error-email"></small>
                </div>
                <div class="form-group">
                    <label for="form-service">Service *</label>
                    <select id="form-service" name="service" class="form-input" required>
                        <option value="">Select a service...</option>
                        <option value="Pallets">Pallets (Buy or Sell)</option>
                        <option value="Firewood">Firewood Delivery</option>
                        <option value="Sawdust">Sawdust & Custom Lumber</option>
                        <option value="Free Log Pickup">Free Log Pickup</option>
                        <option value="Other">Other</option>
                    </select>
                    <small class="error" id="error-service"></small>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="form-city">City / Area</label>
                    <input type="text" id="form-city" name="city" class="form-input" placeholder="Gary, Hammond, Valpo, etc.">
                </div>
                <div class="form-group">
                    <label>Preferred Contact</label>
                    <div class="radio-group">
                        <label><input type="radio" name="preferred_contact" value="Phone" checked> Phone</label>
                        <label><input type="radio" name="preferred_contact" value="Email"> Email</label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="form-message">Message / Details *</label>
                <textarea id="form-message" name="message" class="form-input" rows="4" placeholder="Quantities, timelines, delivery location" required></textarea>
                <small class="error" id="error-message"></small>
            </div>

            <div class="form-group" style="margin-top:0.5rem;">
                <label class="checkbox">
                    <input type="checkbox" name="agree" value="yes" required>
                    <span>I agree to the <a href="privacy.php">Privacy Policy</a>.</span>
                </label>
            </div>

            <button type="submit" id="form-submit" class="btn btn-primary" style="width:100%; margin-top:1rem;">Send My Request</button>
            <div id="form-status" class="form-status" role="status" aria-live="polite" style="display:none;">
                <span id="form-message-text"></span>
            </div>
        </form>
    </div>

    <div class="visual-box" style="margin-top:2rem;">
        <h3 style="margin-bottom:0.5rem;">Service Area</h3>
        <p style="margin-bottom:1rem;">Gary, Hammond, East Chicago, Merrillville, Valparaiso, Crown Point, Hobart, Portage, and nearby Northwest Indiana.</p>
        <div style="border-radius:12px; overflow:hidden; border:1px solid var(--border);">
            <iframe title="Premier Lumber Co Map" src="https://www.google.com/maps?q=6717+Atcheson+Drive+Gary+IN+46403&output=embed" width="100%" height="260" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>
