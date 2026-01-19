/* ==================== CAROUSEL.JS ==================== */
/* Premier Lumber Co - Hero & Testimonial Carousels */

document.addEventListener('DOMContentLoaded', function() {
  
  // ==================== HERO CAROUSEL ====================
  const heroCarousel = document.getElementById('main-carousel');
  
  if (heroCarousel) {
    const slides = heroCarousel.querySelectorAll('.carousel__slide');
    const dots = document.querySelectorAll('.carousel__dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    let currentSlide = 0;
    let autoplayInterval;
    const autoplayDelay = 6000; // 6 seconds
    
    function showSlide(index) {
      // Handle wrap-around
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;
      
      // Update slides
      slides.forEach(function(slide, i) {
        slide.classList.remove('carousel__slide--active');
        if (i === index) {
          slide.classList.add('carousel__slide--active');
        }
      });
      
      // Update dots
      dots.forEach(function(dot, i) {
        dot.classList.remove('carousel__dot--active');
        dot.setAttribute('aria-selected', 'false');
        if (i === index) {
          dot.classList.add('carousel__dot--active');
          dot.setAttribute('aria-selected', 'true');
        }
      });
      
      currentSlide = index;
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
    
    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    }
    
    // Event Listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        startAutoplay(); // Reset autoplay on manual navigation
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        startAutoplay();
      });
    }
    
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        showSlide(index);
        startAutoplay();
      });
    });
    
    // Pause on hover
    heroCarousel.addEventListener('mouseenter', stopAutoplay);
    heroCarousel.addEventListener('mouseleave', startAutoplay);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    heroCarousel.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    heroCarousel.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide(); // Swipe left = next
        } else {
          prevSlide(); // Swipe right = prev
        }
        startAutoplay();
      }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (document.activeElement.closest('.carousel')) {
        if (e.key === 'ArrowRight') {
          nextSlide();
          startAutoplay();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
          startAutoplay();
        }
      }
    });
    
    // Start autoplay
    startAutoplay();
    
    // Pause when page is not visible
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });
  }
  
  // ==================== TESTIMONIALS CAROUSEL ====================
  const testimonialsCarousel = document.getElementById('testimonials-carousel');
  
  if (testimonialsCarousel) {
    const testimonials = testimonialsCarousel.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    
    let currentTestimonial = 0;
    let autoplayInterval;
    const autoplayDelay = 8000; // 8 seconds
    
    function showTestimonial(index) {
      if (index >= testimonials.length) index = 0;
      if (index < 0) index = testimonials.length - 1;
      
      testimonials.forEach(function(testimonial, i) {
        testimonial.style.display = i === index ? 'block' : 'none';
      });
      
      currentTestimonial = index;
    }
    
    function nextTestimonial() {
      showTestimonial(currentTestimonial + 1);
    }
    
    function prevTestimonial() {
      showTestimonial(currentTestimonial - 1);
    }
    
    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextTestimonial, autoplayDelay);
    }
    
    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextTestimonial();
        startAutoplay();
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevTestimonial();
        startAutoplay();
      });
    }
    
    testimonialsCarousel.addEventListener('mouseenter', stopAutoplay);
    testimonialsCarousel.addEventListener('mouseleave', startAutoplay);
    
    // Initialize
    showTestimonial(0);
    startAutoplay();
  }
  
});
