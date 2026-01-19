/* ==================== COUNTERS.JS ==================== */
/* Premier Lumber Co - Animated Number Counters */

document.addEventListener('DOMContentLoaded', function() {
  
  const counters = document.querySelectorAll('.stat__number[data-count]');
  
  if (counters.length === 0) return;
  
  // Animation configuration
  const animationDuration = 2000; // 2 seconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(animationDuration / frameDuration);
  
  // Easing function (ease-out-quad)
  function easeOutQuad(t) {
    return t * (2 - t);
  }
  
  // Animate a single counter
  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'), 10);
    let frame = 0;
    
    const animate = function() {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentValue = Math.round(target * progress);
      
      // Format number with commas
      counter.textContent = currentValue.toLocaleString();
      
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final value is exact
        counter.textContent = target.toLocaleString();
        
        // Add "+" suffix for certain stats if needed
        if (target === 500 || target === 2500) {
          counter.textContent += '+';
        }
        if (target === 100) {
          counter.textContent += '%';
        }
      }
    };
    
    requestAnimationFrame(animate);
  }
  
  // Intersection Observer to trigger animation when visible
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const counter = entry.target;
        
        // Only animate once
        if (!counter.classList.contains('animated')) {
          counter.classList.add('animated');
          animateCounter(counter);
        }
        
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  // Observe all counters
  counters.forEach(function(counter) {
    observer.observe(counter);
  });
  
});
