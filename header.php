<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo isset($metaDescription) ? $metaDescription : 'Buy & sell pallets, seasoned firewood, sawdust, and custom lumber in Gary & Northwest Indiana. FREE log pickup. Same-day delivery. Family-owned 30+ years. Call (219) 938-6275.'; ?>">
    <meta property="og:title" content="<?php echo isset($pageTitle) ? $pageTitle : 'Pallets, Firewood, Sawdust & Free Log Pickup | Premier Lumber Co - Gary, IN'; ?>">
    <meta property="og:description" content="<?php echo isset($metaDescription) ? $metaDescription : 'We buy & sell pallets, deliver firewood, supply sawdust, and pick up logs FREE. Same-day delivery in NW Indiana. Call (219) 938-6275.'; ?>">
    <meta property="og:image" content="og-image.png">
    <meta property="og:type" content="website">
    <link rel="canonical" href="https://premierlumber.com/<?php echo basename($_SERVER['PHP_SELF']); ?>">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Pallets, Firewood, Sawdust & Free Log Pickup | Premier Lumber - Gary, IN'; ?></title>



    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ICONS SVG SPRITE -->
    <svg aria-hidden="true" style="position:absolute; width:0; height:0; overflow:hidden;">
        <symbol id="icon-phone" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="icon-check" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
        </symbol>
        <symbol id="icon-arrow" viewBox="0 0 24 24">
            <path d="M5 12h14"></path>
            <path d="M13 5l7 7-7 7"></path>
        </symbol>
        <symbol id="icon-truck" viewBox="0 0 24 24">
            <rect x="1.5" y="5" width="13" height="9" rx="2"></rect>
            <path d="M14.5 8h3l3 3v5.5h-6"></path>
            <circle cx="6" cy="17.5" r="1.5"></circle>
            <circle cx="18" cy="17.5" r="1.5"></circle>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 3"></path>
        </symbol>
        <symbol id="icon-shield" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </symbol>
        <symbol id="icon-map" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </symbol>
        <symbol id="icon-question" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </symbol>
        <symbol id="icon-credit-card" viewBox="0 0 24 24">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
        </symbol>
        <symbol id="icon-calendar" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </symbol>
        <symbol id="icon-image" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
        </symbol>
        <symbol id="icon-chevron-down" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"></polyline>
        </symbol>
        <symbol id="icon-fire" viewBox="0 0 24 24">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a1 1 0 0 1 1.9.8z"></path>
        </symbol>
        <symbol id="icon-star" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </symbol>
        <symbol id="icon-lock" viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </symbol>
        <symbol id="icon-map-pin" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </symbol>
        <!-- Add more symbols as needed -->
    </svg>

    <!-- TOP ANNOUNCEMENT BAR -->
    <div class="announcement-bar">
        <div class="container announcement-content">
            <span class="announcement-text">
                <svg class="icon-svg text-accent" style="width:16px; height:16px; margin-right:4px;"><use href="#icon-fire"></use></svg>
                <strong>Limited firewood inventory</strong> - order now for winter delivery
            </span>
            <a href="tel:(219)938-6275" class="announcement-cta" data-tracking="announcement-call">
                <svg class="icon-svg" aria-hidden="true"><use href="#icon-phone"></use></svg>
                <span>(219) 938-6275</span>
            </a>
        </div>
    </div>

    <header>
        <div class="container nav">
            <a class="brand" href="index.php">
                <img src="images/logo.png" alt="Premier Lumber Co - Gary Indiana Lumber Yard">
                <div class="brand-text">
                    <span class="brand-name">Premier Lumber Co</span>
                    <span class="brand-tagline">
                        <svg class="icon-svg" style="width:12px; height:12px; color:#16a34a;"><use href="#icon-map-pin"></use></svg> 
                        Gary, Indiana
                    </span>
                </div>
            </a>
            
            <a class="mobile-phone-btn" href="tel:(219)938-6275" data-tracking="mobile-header-call">
                <span class="phone-icon" aria-hidden="true">
                    <svg class="icon-svg"><use href="#icon-phone"></use></svg>
                </span>
                <span class="phone-text">Call Now</span>
            </a>

            <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
                <span class="hamburger" aria-hidden="true"></span>
            </button>

            <ul class="nav-links" id="navLinks">
                <li><a href="index.php">Home</a></li>
                <li><a href="pallets.php">Pallets</a></li>
                <li><a href="firewood.php">Firewood</a></li>
                <li><a href="sawdust.php">Sawdust & Lumber</a></li>
                <li><a href="log-pickup.php">Free Log Pickup</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>

            <div class="nav-cta">
                <span class="pill">
                    <svg class="icon-svg" style="width:14px; height:14px;"><use href="#icon-check"></use></svg>
                    Same-Day Delivery
                </span>
                <a class="btn btn-primary" href="tel:(219)938-6275" style="background:var(--teal); color:white;" data-tracking="header-call-cta">
                    <svg class="icon-svg" aria-hidden="true"><use href="#icon-phone"></use></svg>
                    (219) 938-6275
                </a>
            </div>
        </div>
    </header>
