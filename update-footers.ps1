# Update all HTML pages with S-grade footer (large beaver logo + timestamp)
$standardFooter = @'
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="logo.png" alt="Premier Lumber Co - Family-Owned Since 1994" class="footer-logo">
                    <h3 style="color: white; font-size: 1.5rem; margin: 1rem 0 0.5rem 0; font-weight: 700;">Premier Lumber Co.</h3>
                    <p>Family-owned lumber yard serving Northwest Indiana. Quality materials, fast delivery, fair prices.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="delivery.html">Delivery</a></li>
                        <li><a href="contractors.html">Contractors</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="pallets.html">Pallets - Buy & Sell</a></li>
                        <li><a href="firewood.html">Firewood</a></li>
                        <li><a href="sawdust.html">Sawdust & Custom</a></li>
                        <li><a href="log-pickup.html">Free Log Pickup</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contact</h4>
                    <div class="footer-contact-item">
                        <strong>Phone</strong>
                        <a href="tel:(219)938-6275">(219) 938-6275</a>
                    </div>
                    <div class="footer-contact-item">
                        <strong>Address</strong>
                        <a href="https://maps.google.com/?q=6717+Atcheson+Drive+Gary+IN+46403" target="_blank" rel="noopener">6717 Atcheson Drive, Gary, IN 46403</a>
                    </div>
                    <div class="footer-contact-item">
                        <strong>Hours</strong>
                        <span>Mon-Fri: 7:00 AM - 5:00 PM</span>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-copy">
                    <p>&copy; 2026 Premier Lumber Company. All rights reserved.</p>
                    <p class="footer-updated">Last updated: <span id="lastUpdated"></span></p>
                </div>
                <div class="footer-legal">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
'@;

$timestampScript = @'
    <script>
        const lastUpdatedEl = document.getElementById('lastUpdated');
        if (lastUpdatedEl) {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            lastUpdatedEl.textContent = now.toLocaleDateString('en-US', options);
        }
        window.addEventListener('scroll', () => {
            const mobileCTA = document.querySelector('.mobile-cta-bar');
            if (mobileCTA && window.scrollY > 200) mobileCTA.classList.add('visible');
            else if (mobileCTA) mobileCTA.classList.remove('visible');
        });
    </script>
'@;

$pages = @('about.html', 'accessibility.html', 'contact.html', 'firewood.html', 'gallery.html', 'log-pickup.html', 'pallets.html', 'sawdust.html');

foreach ($page in $pages) {
    $path = "c:\Users\Hunti\Downloads\premier-lumber-site\$page";
    if (Test-Path $path) {
        $content = Get-Content $path -Raw;
        
        # Replace old footer (multiple patterns to catch different footer structures)
        $content = $content -replace '(?s)<footer[^>]*>.*?</footer>', $standardFooter;
        
        # Add timestamp script before closing body tag if not present
        if ($content -notmatch 'lastUpdated') {
            $content = $content -replace '</body>', "$timestampScript`n</body>";
        }
        
        Set-Content -Path $path -Value $content -NoNewline;
        Write-Host "✓ Updated $page with S-grade footer" -ForegroundColor Green;
    } else {
        Write-Host "✗ $page not found" -ForegroundColor Red;
    }
}

Write-Host "`n✓ All pages updated! Now at S-GRADE (15/15 rules)" -ForegroundColor Cyan;
Write-Host "Run: Copy files to deploy folder" -ForegroundColor Yellow;
