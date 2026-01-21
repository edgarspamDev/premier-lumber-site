/**
 * Form submission handler
 * Safely submits form data to backend
 */

export interface FormSubmissionOptions {
  endpoint: string;
  method?: 'POST' | 'GET';
  timeout?: number;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Submit form data with error handling
 * No form provider integration - just basic endpoint submission
 */
export async function submitForm(
  formData: Record<string, string>,
  options: FormSubmissionOptions
): Promise<FormSubmissionResponse> {
  const { endpoint, method = 'POST', timeout = 10000 } = options;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        success: false,
        message: 'Failed to submit form. Please try again or call us.',
        error: 'Server responded with error',
      };
    }

    return {
      success: true,
      message: 'Thank you! We received your request and will contact you shortly.',
    };
  } catch (err) {
    // Generic error message - don't expose technical details
    const errorMessage = err instanceof Error ? err.message : 'unknown error';
    
    if (errorMessage.includes('abort')) {
      return {
        success: false,
        message: 'Request timed out. Please try again or call us directly.',
        error: 'timeout',
      };
    }

    return {
      success: false,
      message: 'Unable to submit form. Please try again or call us.',
      error: 'network',
    };
  }
}
