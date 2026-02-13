/**
 * Validation and sanitization utilities
 * Security-focused input handling to prevent XSS and injection attacks
 */

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function isValidPhone(phone: string): boolean {
  // Accept 7+ digits with common separators
  const digitsOnly = phone.replace(/[\s\-+()]/g, '');
  return /^\d{7,15}$/.test(digitsOnly);
}

export function sanitizeText(text: string, maxLength: number = 500): string {
  let sanitized = text.trim().substring(0, maxLength);
  sanitized = Array.from(sanitized)
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code >= 0x20 && code !== 0x7f;
    })
    .join('');
  return sanitized;
}

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

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidName(name: string): boolean {
  // Allow letters, spaces, hyphens, apostrophes, accented chars
  return name.trim().length >= 2 && name.trim().length <= 100;
}

export interface FormErrors {
  [key: string]: string;
}

/**
 * Low-friction validation: Only Name + Phone required.
 * Email and message are optional to reduce form abandonment.
 */
export function validateRFQForm(data: Record<string, string>): FormErrors {
  const errors: FormErrors = {};

  if (!isNotEmpty(data.name)) {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!isNotEmpty(data.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Enter a valid phone number';
  }

  // Email: only validate format if provided
  if (isNotEmpty(data.email || '') && !isValidEmail(data.email)) {
    errors.email = 'Enter a valid email address';
  }

  return errors;
}
