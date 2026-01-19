document.addEventListener('DOMContentLoaded', function() {
    const calcInputs = document.querySelectorAll('.calc-input');
    const resultDisplay = document.getElementById('bf-result');
    
    if(calcInputs.length > 0 && resultDisplay) {
        calcInputs.forEach(input => {
            input.addEventListener('input', calculateBoardFeet);
        });
    }

    function calculateBoardFeet() {
        const pcs = parseFloat(document.getElementById('calc-pcs').value) || 0;
        const thick = parseFloat(document.getElementById('calc-thick').value) || 0;
        const width = parseFloat(document.getElementById('calc-width').value) || 0;
        const len = parseFloat(document.getElementById('calc-len').value) || 0;

        // Formula: (Thickness x Width x Length) / 144 * Pcs 
        // Note: Length is usually in FEET for this formula, but often input in inches. 
        // Standard formula: (T_in * W_in * L_ft) / 12  OR (T_in * W_in * L_in) / 144
        
        // Let's assume user enters Length in Feet as that's standard for lumber buying
        
        if (pcs > 0 && thick > 0 && width > 0 && len > 0) {
            const bf = (pcs * thick * width * len) / 12; 
            resultDisplay.textContent = bf.toFixed(2) + " Board Feet";
        } else {
            resultDisplay.textContent = "0.00 Board Feet";
        }
    }

    // Firewood Calculator Logic
    const fwInputs = ['fw-len', 'fw-height', 'fw-depth'];
    const fwResult = document.getElementById('fw-result');
    
    if (document.getElementById('fw-len')) {
        fwInputs.forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('input', calculateFirewood);
        });
    }

    function calculateFirewood() {
        const l = parseFloat(document.getElementById('fw-len').value) || 0;
        const h = parseFloat(document.getElementById('fw-height').value) || 0;
        const d = parseFloat(document.getElementById('fw-depth').value) || 0;
        
        // Full Cord = 128 cubic feet (4x4x8)
        // Formula: (L x H x D) / 128
        
        if (l > 0 && h > 0 && d > 0) {
            const cuFt = l * h * d;
            const cords = cuFt / 128;
            fwResult.textContent = cords.toFixed(2) + " Cords";
        } else {
            fwResult.textContent = "0.00 Cords";
        }
    }
});
