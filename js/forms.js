/**
 * Premier Lumber Co - Form Handling
 * Enhanced with rate limiting, input validation, and API error handling
 */

// Client-side rate limiting
const RATE_LIMIT = {
    maxAttempts: 3,
    windowMs: 5 * 60 * 1000, // 5 minutes
    key: 'plc_form_attempts'
};

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check client-side rate limit
            if (!checkClientRateLimit()) {
                showRateLimitError();
                return;
            }
            
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
        
        // Real-time validation on input
        attachRealtimeValidation();
    }
});

/**
 * Client-side rate limiting
 */
function checkClientRateLimit() {
    const attempts = JSON.parse(localStorage.getItem(RATE_LIMIT.key) || '[]');
    const now = Date.now();
    
    // Filter out old attempts
    const recentAttempts = attempts.filter(time => now - time < RATE_LIMIT.windowMs);
    
    if (recentAttempts.length >= RATE_LIMIT.maxAttempts) {
        return false;
    }
    
    return true;
}

function recordSubmitAttempt() {
    const attempts = JSON.parse(localStorage.getItem(RATE_LIMIT.key) || '[]');
    const now = Date.now();
    
    attempts.push(now);
    localStorage.setItem(RATE_LIMIT.key, JSON.stringify(attempts));
}

function showRateLimitError() {
    const statusEl = document.getElementById('form-status');
    const statusText = document.getElementById('form-message-text');
    
    statusEl.style.display = 'block';
    statusEl.className = 'form-status form-status--error';
    statusText.textContent = 'Too many submission attempts. Please wait 5 minutes or call us at (219) 938-6275.';
}

/**
 * Real-time validation as user types
 */
function attachRealtimeValidation() {
    const nameInput = document.getElementById('form-name');
    const phoneInput = document.getElementById('form-phone');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');
    
    if (nameInput) {
        nameInput.addEventListener('blur', () => validateField('name'));
    }
    if (phoneInput) {
        phoneInput.addEventListener('blur', () => validateField('phone'));
    }
    if (emailInput) {
        emailInput.addEventListener('blur', () => validateField('email'));
    }
    if (messageInput) {
        messageInput.addEventListener('blur', () => validateField('message'));
    }
}

function validateField(fieldName) {
    const input = document.getElementById(`form-${fieldName}`);
    const errorEl = document.getElementById(`error-${fieldName}`);
    
    if (!input || !errorEl) return;
    
    let error = '';
    const value = input.value.trim();
    
    switch(fieldName) {
        case 'name':
            if (!value) error = 'Name is required.';
            else if (value.length < 2) error = 'Name must be at least 2 characters.';
            else if (value.length > 100) error = 'Name is too long.';
            else if (!/^[a-zA-Z\s\-\.\']+$/.test(value)) error = 'Name contains invalid characters.';
            break;
            
        case 'phone':
            const cleaned = value.replace(/[^\d]/g, '');
            if (!value) error = 'Phone number is required.';
            else if (cleaned.length < 10) error = 'Phone number must be at least 10 digits.';
            else if (cleaned.length > 15) error = 'Phone number is too long.';
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!value) error = 'Email is required.';
            else if (!emailRegex.test(value)) error = 'Please enter a valid email address.';
            else if (value.length > 254) error = 'Email is too long.';
            break;
            
        case 'message':
            if (!value) error = 'Message is required.';
            else if (value.length < 10) error = 'Message must be at least 10 characters.';
            else if (value.length > 2000) error = 'Message is too long (max 2000 characters).';
            break;
    }
    
    if (error) {
        errorEl.textContent = error;
        input.style.borderColor = '#ef4444';
    } else {
        errorEl.textContent = '';
        input.style.borderColor = '#10b981'; // Green for valid
    }
}

function validateForm() {
    const errors = {};
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const service = document.getElementById('form-service').value;
    const message = document.getElementById('form-message').value.trim();
    
    // Name validation - enhanced
    if (!name) {
        errors['name'] = "Please enter your name.";
    } else if (name.length < 2) {
        errors['name'] = "Name must be at least 2 characters.";
    } else if (name.length > 100) {
        errors['name'] = "Name is too long (max 100 characters).";
    } else if (!/^[a-zA-Z\s\-\.\']+$/.test(name)) {
        errors['name'] = "Name contains invalid characters.";
    }
    
    // Phone validation - enhanced
    const phoneClean = phone.replace(/[^\d]/g, '');
    if (!phone) {
        errors['phone'] = "Please enter your phone number.";
    } else if (phoneClean.length < 10) {
        errors['phone'] = "Phone number must be at least 10 digits.";
    } else if (phoneClean.length > 15) {
        errors['phone'] = "Phone number is too long.";
    }
    
    // Email validation - enhanced
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email) {
        errors['email'] = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
        errors['email'] = "Please enter a valid email address.";
    } else if (email.length > 254) {
        errors['email'] = "Email address is too long.";
    }
    
    // Service validation
    if (!service) {
        errors['service'] = "Please select a service.";
    }
    
    // Message validation - enhanced
    if (!message) {
        errors['message'] = "Please describe what you need.";
    } else if (message.length < 10) {
        errors['message'] = "Message must be at least 10 characters.";
    } else if (message.length > 2000) {
        errors['message'] = "Message is too long (max 2000 characters).";
    }
    
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
    
    // Record attempt for rate limiting
    recordSubmitAttempt();
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = '0.7';
    statusEl.style.display = 'none';
    
    const formData = new FormData(form);
    
    // Set timeout for the request (30 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    fetch('php/contact.php', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
        clearTimeout(timeoutId);
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}: ${response.statusText}`);
        }
        
        // Check content type
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response');
        }
        
        return response.json();
    })
    .then(data => {
        statusEl.style.display = 'block';
        
        if (data.success) {
            statusEl.className = 'form-status form-status--success';
            statusText.textContent = data.message || 'Thank you! We will contact you soon.';
            form.reset();
            clearErrors();
            
            // Clear rate limit on successful submission
            localStorage.removeItem(RATE_LIMIT.key);
            
        } else {
            statusEl.className = 'form-status form-status--error';
            statusText.textContent = data.message || "Something went wrong. Please call us directly.";
        }
    })
    .catch(error => {
        clearTimeout(timeoutId);
        console.error('Form submission error:', error);
        
        statusEl.style.display = 'block';
        statusEl.className = 'form-status form-status--error';
        
        // Provide specific error messages
        if (error.name === 'AbortError') {
            statusText.textContent = "Request timeout. Please check your connection and try again or call (219) 938-6275.";
        } else if (!navigator.onLine) {
            statusText.textContent = "No internet connection. Please check your connection and try again.";
        } else {
            statusText.textContent = `Error: ${error.message}. Please call us at (219) 938-6275.`;
        }
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';
    });
}
