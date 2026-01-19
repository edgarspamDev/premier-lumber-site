/**
 * Premier Lumber Co - Form Handling
 * Handles validation and AJAX submission for the main contact form.
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Validate inputs
            const errors = validateForm();
            
            if (Object.keys(errors).length > 0) {
                showErrors(errors);
                return;
            }
            
            // If valid, submit via AJAX
            submitForm(this);
        });
    }
});

function validateForm() {
    const errors = {};
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const service = document.getElementById('form-service').value;
    const message = document.getElementById('form-message').value.trim();
    
    if (!name) errors['name'] = "Please enter your name.";
    
    // Basic phone validation (digits, dashes, parens, spaces)
    const phoneRegex = /^[\d\(\)\-\s]{10,}$/;
    if (!phone) {
        errors['phone'] = "Please enter your phone number.";
    } else if (!phoneRegex.test(phone)) {
        errors['phone'] = "Please enter a valid phone number.";
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors['email'] = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
        errors['email'] = "Please enter a valid email address.";
    }
    
    if (!service) errors['service'] = "Please select a service.";
    if (!message) errors['message'] = "Please describe what you need.";
    
    return errors;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-input').forEach(el => el.style.borderColor = '');
}

function showErrors(errors) {
    for (const [field, msg] of Object.entries(errors)) {
        const errorEl = document.getElementById(`error-${field}`);
        const inputEl = document.getElementById(`form-${field}`);
        
        if (errorEl) errorEl.textContent = msg;
        if (inputEl) inputEl.style.borderColor = '#ef4444'; // Red border
    }
}

function submitForm(form) {
    const submitBtn = document.getElementById('form-submit');
    const originalBtnText = submitBtn.textContent;
    const statusEl = document.getElementById('form-status');
    const statusText = document.getElementById('form-message-text');
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusEl.style.display = 'none';
    
    const formData = new FormData(form);
    
    fetch('php/contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        statusEl.style.display = 'block';
        if (data.success) {
            statusEl.className = 'form-status form-status--success';
            statusText.textContent = data.message;
            form.reset();
        } else {
            statusEl.className = 'form-status form-status--error';
            statusText.textContent = data.message || "Something went wrong. Please call us directly.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        statusEl.style.display = 'block';
        statusEl.className = 'form-status form-status--error';
        statusText.textContent = "Network error. Please try again or call (219) 938-6275.";
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    });
}
