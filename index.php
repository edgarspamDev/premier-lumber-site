<?php
$pageTitle = "Pallets, Firewood, Sawdust & Free Log Pickup | Premier Lumber - Gary, IN";
$metaDescription = "Buy & sell pallets, seasoned firewood, sawdust, and custom lumber in Gary & Northwest Indiana. FREE log pickup. Same-day delivery. Family-owned 30+ years.";
include 'header.php';
?>

    <section class="hero" id="home">
        <div class="container hero-grid">
            <div class="hero-content">
                <div class="eyebrow">
                    <span class="pulse-dot"></span>
                    Family-Owned Since 1994 • 30+ Years in Gary, IN
                </div>
                <h1>Pallets. Firewood. Sawdust.<br><span class="text-accent">Picked Up FREE or Delivered Fast.</span></h1>
                <p class="hero-subtitle">We <strong>buy & sell pallets</strong>, deliver <strong>seasoned firewood</strong>, supply <strong>sawdust</strong>, and offer <strong>FREE log pickup</strong>. Same-day delivery throughout Northwest Indiana.</p>

                <!-- UX FIX: Buttons removed to prioritize the Quick Quote Form on the right (Rule #7) -->
                <!-- The phone number is already prominent in the Header and Floating Button -->
                
                <p class="hero-urgency">
                    <svg class="icon-svg" style="width:16px; height:16px;"><use href="#icon-clock"></use></svg> 
                    Order by 10 AM for same-day delivery • We reply in under 2 hours
                </p>

                <div class="hero-trust">
                    <div class="trust-item"><span class="trust-icon" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> Same/Next-Day Delivery</div>
                    <div class="trust-item"><span class="trust-icon" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> We BUY Your Pallets</div>
                    <div class="trust-item"><span class="trust-icon" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> FREE Log Removal</div>
                </div>
            </div>

            <!-- HERO QUICK FACTION -->
            <div class="hero-card">
                <div class="hero-card-header">
                    <span class="hero-card-badge">Quick Quote</span>
                    <h3>Get a Callback</h3>
                </div>
                <!-- UX FIX: Added data-tracking and reassurance -->
                <form class="hero-quick-form" id="quickQuoteForm" action="contact.php" method="GET" data-tracking="hero-callback-form">
                    <div class="form-group">
                        <label for="quickService">What do you need?</label>
                        <select id="quickService" name="service" required>
                            <option value="">Select a service...</option>
                            <option value="buy-pallets">I need to BUY pallets</option>
                            <option value="sell-pallets">I have pallets TO SELL</option>
                            <option value="firewood">Firewood delivery</option>
                            <option value="sawdust">Sawdust</option>
                            <option value="logs">FREE log pickup</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="quickPhone">Your phone number</label>
                        <input type="tel" id="quickPhone" name="phone" placeholder="(219) 555-1234" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-form-submit" data-tracking="form-submit-cta">
                        Get Callback in 15 Min
                    </button>
                    <p class="form-reassurance">
                        <svg class="icon-svg" style="width:14px; height:14px;"><use href="#icon-lock"></use></svg> 
                        No spam. We'll call within 2 hours during business hours.
                    </p>
                    <p class="hero-card-note">Or call directly: <a href="tel:(219)938-6275" data-tracking="form-call-link">(219) 938-6275</a></p>
                </form>
            </div>
        </div>

        <div class="container">
            <div class="metrics">
                <div class="metric-card">
                    <div class="metric-value" data-count="30">30+</div>
                    <div class="metric-title">Years Serving NW Indiana</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value" data-count="500">500+</div>
                    <div class="metric-title">Local Businesses Trust Us</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value">2 Hr</div>
                    <div class="metric-title">Average Response Time</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value">Same-Day</div>
                    <div class="metric-title">Delivery Available</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CORE OFFERINGS -->
    <section class="what-we-sell" id="offerings">
        <div class="container">
            <div class="section-header">
                <div class="section-kicker">What We Sell</div>
                <h2 class="section-title">Your One-Stop Lumber Yard</h2>
            </div>
            <div class="offerings-grid">
                <!-- Pallets -->
                <div class="offering-card">
                    <div class="offering-image-bg" style="background-image: url('images/gallery/pallets_stack.jpg');"></div>
                    <div class="offering-content">
                        <div class="offering-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <h3>Pallets</h3>
                        <p class="offering-subtitle">Buy & Sell</p>
                        <p>We stock thousands of new and used pallets in all standard sizes (48x40, etc.). We also buy your repairable pallets for cash.</p>
                        <ul class="card-features">
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Global 48x40 & Custom sizes</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Heat-treated ISPM-15 available</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> High-volume buyback program</li>
                        </ul>
                        <a href="pallets.php" class="offering-link">View Details <svg class="icon-svg"><use href="#icon-arrow"></use></svg></a>
                    </div>
                </div>

                <!-- Firewood -->
                <div class="offering-card">
                    <div class="offering-image-bg" style="background-image: url('images/gallery/firewood_seasoned.jpg');"></div>
                    <div class="offering-content">
                        <div class="offering-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a1 1 0 0 1 1.9.8z"></path></svg>
                        </div>
                        <h3>Firewood</h3>
                        <p class="offering-subtitle">Seasoned & Ready</p>
                        <p>Locally sourced mixed hardwoods (Oak, Cherry, Walnut), seasoned and ready to burn. Available by the face cord or full cord.</p>
                        <ul class="card-features">
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Premium hardwoods only</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Seasoned 12+ months</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Delivery & stacking available</li>
                        </ul>
                        <a href="firewood.php" class="offering-link">Order Now <svg class="icon-svg"><use href="#icon-arrow"></use></svg></a>
                    </div>
                </div>

                <!-- Sawdust & Lumber -->
                <div class="offering-card">
                    <div class="offering-image-bg" style="background-image: url('images/gallery/plywood_stock.jpg');"></div>
                    <div class="offering-content">
                        <div class="offering-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3>Sawdust & Custom</h3>
                        <p class="offering-subtitle">Custom Cuts Available</p>
                        <p>Clean hardwood sawdust for livestock bedding or landscaping. Plus custom rough-sawn lumber cut to your exact specs.</p>
                        <ul class="card-features">
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Bulk sawdust delivery</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Live-edge slabs available</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Custom beams & blocking</li>
                        </ul>
                        <a href="sawdust.php" class="offering-link">Check Availability <svg class="icon-svg"><use href="#icon-arrow"></use></svg></a>
                    </div>
                </div>

                <!-- Free Log Pickup -->
                <div class="offering-card highlight-card">
                    <div class="offering-image-bg" style="background-image: url('images/gallery/delivery_truck.jpg');"></div>
                    <div class="badge-free">100% FREE</div>
                    <div class="offering-content">
                        <div class="offering-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h3>Free Log Pickup</h3>
                        <p class="offering-subtitle">We Come To You</p>
                        <p>Don't pay a tree service to haul your wood. If you have 8ft+ hardwood logs, we will pick them up for free.</p>
                        <ul class="card-features">
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Walnut / Oak / Maple preferred</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Must be 8ft+ length</li>
                            <li><svg class="icon-svg"><use href="#icon-check"></use></svg> Easy truck access required</li>
                        </ul>
                        <a href="log-pickup.php" class="offering-link">Schedule Pickup <svg class="icon-svg"><use href="#icon-arrow"></use></svg></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PHOTO GALLERY SECTION -->
    <section class="container" id="gallery">
        <div class="section-header">
            <div class="section-kicker">Our Work</div>
            <h2 class="section-title">Yard & Project Photos</h2>
            <p class="section-sub">See our lumber yard, delivery trucks, and customer projects.</p>
        </div>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="images/gallery/lumber_yard_hero.jpg" alt="Stacked lumber at Premier Lumber yard" loading="lazy">
                <div class="gallery-overlay">
                    <span>Lumber Yard</span>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/gallery/delivery_truck.jpg" alt="Delivery truck loaded with lumber" loading="lazy">
                <div class="gallery-overlay">
                    <span>Delivery Fleet</span>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/gallery/framing_project.jpg" alt="Construction framing project" loading="lazy">
                <div class="gallery-overlay">
                    <span>Framing Project</span>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/gallery/pallets_stack.jpg" alt="Stacked wooden pallets" loading="lazy">
                <div class="gallery-overlay">
                    <span>Pallets</span>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/gallery/firewood_seasoned.jpg" alt="Firewood stacked and ready" loading="lazy">
                <div class="gallery-overlay">
                    <span>Firewood</span>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/gallery/plywood_stock.jpg" alt="Plywood sheets stacked" loading="lazy">
                <div class="gallery-overlay">
                    <span>Plywood Stock</span>
                </div>
            </div>
        </div>
        <p class="gallery-note">Want to see more? <a href="contact.php">Contact us</a> for a yard tour!</p>
    </section>

    <section class="container" id="cta">
        <div class="cta-banner">
            <h2>Ready to build? Get pricing and delivery times today.</h2>
            <p style="color:#e2e8f0;">Talk to a real person in minutes. We'll confirm stock, routing, and arrival windows.</p>
            <div class="cta-actions">
                <a class="btn btn-primary" href="contact.php" data-track="cta-banner-quote">Get My Quote</a>
                <a class="btn btn-ghost" href="tel:(219)938-6275" data-track="cta-banner-call">Call (219) 938-6275</a>
            </div>
        </div>
    </section>

<?php include 'footer.php'; ?>
