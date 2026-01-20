/* ==================== ACCORDION.JS ==================== */
/* Premier Lumber Co - FAQ Accordions */

document.addEventListener('DOMContentLoaded', function() {
  
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(function(accordion) {
    const headers = accordion.querySelectorAll('.accordion__trigger');
    
    headers.forEach(function(header) {
      header.addEventListener('click', function() {
        const item = this.closest('.accordion__item');
        const content = item.querySelector('.accordion__content');
        const icon = this.querySelector('.accordion__icon');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Close all other items in this accordion (optional - for single open)
        const allItems = accordion.querySelectorAll('.accordion__item');
        allItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            const otherHeader = otherItem.querySelector('.accordion__trigger');
            const otherContent = otherItem.querySelector('.accordion__content');
            
            otherHeader.setAttribute('aria-expanded', 'false');
            otherContent.hidden = true;
            otherContent.style.maxHeight = null;
          }
        });
        
        // Toggle current item
        if (isExpanded) {
          this.setAttribute('aria-expanded', 'false');
          content.hidden = true;
          content.style.maxHeight = null;
        } else {
          this.setAttribute('aria-expanded', 'true');
          content.hidden = false;
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
      
      // Keyboard support
      header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  });
  
  // Smooth height animation
  const style = document.createElement('style');
  style.textContent = `
    .accordion__content {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease-out;
    }
    .accordion__content:not([hidden]) {
      max-height: none;
    }
  `;
  document.head.appendChild(style);
  
});
