/**
 * Analytics utility for Premier Lumber Co
 * Wraps GA4 gtag events for type-safe, centralized tracking
 */

export type PageName = 'home' | 'pallets' | 'firewood' | 'sawdust' | 'log-pickup' | 'contact' | 'tree-service-partners' | 'about' | 'other';
export type LinkLocation = 'header' | 'footer' | 'contact-page' | 'mobile-menu' | 'hero' | 'cta-strip';

/**
 * Send a GA4 event
 * Safely no-ops if gtag is not loaded (e.g. dev environment or ad-blocker)
 */
export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', name, params ?? {});
  }
}

/**
 * Track a click on the English phone number
 * @param location Where on the page the click happened
 */
export function trackEnglishCall(location: LinkLocation) {
  trackEvent('phone_click_english', { location, number: '(219) 354-0720' });
}

/**
 * Track a click on the Spanish phone number
 * @param location Where on the page the click happened
 */
export function trackSpanishCall(location: LinkLocation) {
  trackEvent('phone_click_spanish', { location, number: '(219) 516-4867' });
}

/**
 * Track when a user clicks a directions/maps link
 */
export function trackDirectionsClick(location: LinkLocation) {
  trackEvent('get_directions_click', { location });
}

/**
 * Track when the RFQ quote form is submitted successfully
 */
export function trackQuoteSubmit(service?: string) {
  trackEvent('quote_form_submit', service ? { service_selected: service } : {});
}

/**
 * Track when a user clicks the Log Pickup CTA
 */
export function trackLogPickupInquiry() {
  trackEvent('log_pickup_inquiry', {});
}
