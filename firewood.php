<?php
$pageTitle = "Seasoned Firewood Delivery | Premier Lumber Co - Gary, IN";
$metaDescription = "Quality seasoned firewood sold by the cord or half-cord. Perfect for heating or recreational use. Delivery to Gary, Hammond, Valparaiso, and more.";
$extraScripts = '<script src="js/calculator.js"></script>';
include 'header.php';
?>

<div class="page-header">
    <div class="container">
        <h1>Seasoned Firewood</h1>
        <p class="lead">Premium hardwood mix, ready to burn. Delivered to your driveway.</p>
    </div>
</div>

<section class="container section">
    <div class="two-col">
        <div>
            <h2>Stay Warm This Winter</h2>
            <p>Don't settle for wet, green wood that smokes and struggles to light. Premier Lumber Co supplies fully seasoned hardwood firewood suitable for residential heating, restaurants, and outdoor fire pits.</p>
            
            <h3 class="mt-4">Our Wood</h3>
            <ul class="checklist">
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Hardwood Mix:</strong> Oak, Hickory, Maple, and Ash.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Seasoned:</strong> Dried for optimal burning efficiency.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Standard Cuts:</strong> 16-inch logs (custom lengths available).</li>
            </ul>

            <h3 class="mt-4">Pricing & Delivery</h3>
            <p>We sell by the face cord or full cord. Delivery fees depend on your distance from our Gary yard.</p>
            <ul class="checklist">
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Face Cord (4'x8'x16"):</strong> Great for occasional fires.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Full Cord (4'x4'x8'):</strong> Best value for heating.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Crater Stacking:</strong> Available for an extra fee.</li>
            </ul>
            
            <div class="mt-4">
                <a href="contact.php?service=firewood" class="btn btn-primary">Order Firewood</a>
            </div>

            <div class="calculator-widget">
                <div class="calculator-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a1 1 0 0 1 1.9.8z"></path></svg>
                    <h3 class="calculator-heading">Cord Calculator</h3>
                </div>
                <!-- 4x4x8 = 128 cu ft -->
                <div class="calculator-inputs">
                    <div class="calc-field">
                        <label>Stack Length (ft)</label>
                        <input type="number" id="fw-len" class="calc-input" placeholder="8" min="1">
                    </div>
                    <div class="calc-field">
                        <label>Stack Height (ft)</label>
                        <input type="number" id="fw-height" class="calc-input" placeholder="4" min="1">
                    </div>
                    <div class="calc-field">
                        <label>Log Length (ft)</label>
                        <input type="number" id="fw-depth" class="calc-input" placeholder="1.33" value="1.33" step="0.1">
                        <small style="font-size:0.65rem; color:#94a3b8;">(16in = 1.33ft)</small>
                    </div>
                </div>
                <div id="fw-result" class="calc-result">0.00 Cords</div>
            </div>
        </div>
        <div class="visual-box">
             <img src="images/gallery/firewood_seasoned.jpg" alt="Seasoned Firewood Stack" class="img-fluid rounded shadow" style="width:100%; height:auto;">
             <p class="caption mt-2">Ready-to-burn hardwood mix.</p>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>

