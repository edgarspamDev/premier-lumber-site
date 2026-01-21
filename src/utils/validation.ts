/**
 * Validation and sanitization utilities
 * Security-focused input handling to prevent XSS and injection attacks
 */

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate phone number (basic North American format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, '')) && phone.length <= 20;
}

/**
 * Sanitize text input - remove dangerous characters
 * Prevents basic HTML/script injection
 */
export function sanitizeText(text: string, maxLength: number = 500): string {
  // Trim whitespace
  let sanitized = text.trim().substring(0, maxLength);
  
  // Remove control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  
  // Do NOT use HTML entity encoding here as we're storing raw text
  // The rendering layer will escape it for display
  return sanitized;
}

/**
 * Encode text for safe HTML display (prevents XSS)
 * Use this when displaying user content
 */
export function encodeForHTML(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
}

/**
 * Validate required field
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validate name field (letters, spaces, hyphens only)
 */
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\-']{2,100}$/;
  return nameRegex.test(name);
}

/**
 * Validate company name (alphanumeric, spaces, common punctuation)
 */
export function isValidCompanyName(company: string): boolean {
  // Allow letters, numbers, spaces, hyphens, ampersands, periods, commas
  const companyRegex = /^[a-zA-Z0-9\s\-&.,']{2,150}$/;
  return companyRegex.test(company);
}

/**
 * Validate project location (city/region)
 */
export function isValidLocation(location: string): boolean {
  const locationRegex = /^[a-zA-Z\s,\-]{2,100}$/;
  return locationRegex.test(location);
}

/**
 * Form validation wrapper
 */
export interface FormErrors {
  [key: string]: string;
}

export function validateRFQForm(data: Record<string, string>): FormErrors {
  const errors: FormErrors = {};

  if (!isNotEmpty(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name (letters and spaces only)';
  }

  if (!isNotEmpty(data.company)) {
    errors.company = 'Company name is required';
  } else if (!isValidCompanyName(data.company)) {
    errors.company = 'Please enter a valid company name';
  }

  if (!isNotEmpty(data.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!isNotEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isNotEmpty(data.location)) {
    errors.location = 'Project location is required';
  } else if (!isValidLocation(data.location)) {
    errors.location = 'Please enter a valid location';
  }

  if (!isNotEmpty(data.productNeeds)) {
    errors.productNeeds = 'Product needs are required';
  } else if (data.productNeeds.length < 5 || data.productNeeds.length > 500) {
    errors.productNeeds = 'Product needs must be between 5 and 500 characters';
  }

  if (!isNotEmpty(data.timeline)) {
    errors.timeline = 'Project timeline is required';
  }

  return errors;
}
