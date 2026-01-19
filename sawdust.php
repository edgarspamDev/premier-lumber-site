<?php
$pageTitle = "Sawdust, Shavings & Custom Lumber | Premier Lumber Co";
$metaDescription = "Buying bulk sawdust and custom lumber in Northwest Indiana. Clean hardwood sawdust for bedding. Custom resaw services available.";
$extraScripts = '<script src="js/calculator.js"></script>';
include 'header.php';
?>

<div class="page-header">
    <div class="container">
        <h1>Sawdust & Custom Lumber</h1>
        <p class="lead">Bulk materials for farms, landscaping, and construction.</p>
    </div>
</div>

<section class="container section">
    <div class="two-col">
        <div>
            <h2>Bulk Sawdust & Shavings</h2>
            <p>We produce high volumes of clean sawdust and shavings from our milling operations. Ideal for:</p>
            <ul class="checklist">
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Animal Bedding:</strong> Horses, livestock, and poultry.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Landscaping:</strong> Moisture retention and mulch.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Industrial:</strong> Spill cleanup and manufacturing.</li>
            </ul>
            <p class="mt-2">Available by the truckload or semi-load.</p>

            <h2 class="mt-4">Rough-Sawn Lumber</h2>
            <p>Need specific dimensions you can't find at the big box store? We mill custom beams, boards, and timbers.</p>
            <ul class="checklist">
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Trailer Decking:</strong> Oak rough-cut decking.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Blocking & Dunnage:</strong> For shipping and logistics.</li>
                <li><span class="checkmark" aria-hidden="true"><svg class="icon-svg"><use href="#icon-check"></use></svg></span> <strong>Fencing:</strong> Durable, locally sourced timber.</li>
            </ul>
            
            <div class="mt-4">
                <a href="contact.php?service=sawdust" class="btn btn-primary">Request bulk Quote</a>
            </div>
            <div class="calculator-widget">
                <div class="calculator-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line></svg>
                    <h3 class="calculator-heading">Board Foot Calculator</h3>
                </div>
                <div class="calculator-inputs">
                    <div class="calc-field">
                        <label>Pieces</label>
                        <input type="number" id="calc-pcs" class="calc-input" placeholder="1" min="1">
                    </div>
                    <div class="calc-field">
                        <label>Thick (in)</label>
                        <input type="number" id="calc-thick" class="calc-input" placeholder="2" min="0.1" step="0.1">
                    </div>
                    <div class="calc-field">
                        <label>Width (in)</label>
                        <input type="number" id="calc-width" class="calc-input" placeholder="6" min="0.1" step="0.1">
                    </div>
                    <div class="calc-field">
                        <label>Length (ft)</label>
                        <input type="number" id="calc-len" class="calc-input" placeholder="10" min="1" step="0.5">
                    </div>
                </div>
                <div id="bf-result" class="calc-result">0.00 Board Feet</div>
            </div>
        </div>
        <div class="visual-box">
             <img src="images/gallery/plywood_stock.jpg" alt="Lumber Material" class="img-fluid rounded shadow" style="width:100%; height:auto;">
             <p class="caption mt-2">Bulk materials available for pickup or delivery.</p>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>

