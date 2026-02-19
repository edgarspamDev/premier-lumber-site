import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icons';

export function StickyCTA() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const scrollToContactForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const y = form.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

    const firstInput = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      'input:not([type="hidden"]), textarea, select'
    );
    if (firstInput) {
      window.setTimeout(() => {
        firstInput.focus({ preventScroll: true });
      }, 350);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="bg-white border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-3">
        <div className="flex gap-3">
          {/* Call Now */}
          <a
            href="tel:+12193540720"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-charcoal text-white font-bold text-lg rounded-xl active:scale-95 transition-all duration-200 shadow-sm"
          >
            <Icon name="phone" size={20} />
            <span>Call Now</span>
          </a>

          {/* Get My Price */}
          {isContactPage ? (
            <button
              type="button"
              onClick={scrollToContactForm}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold text-lg rounded-xl active:scale-95 transition-all duration-200 shadow-lg shadow-orange-200"
            >
              <Icon name="quote" size={20} />
              <span>Get My Price</span>
            </button>
          ) : (
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold text-lg rounded-xl active:scale-95 transition-all duration-200 shadow-lg shadow-orange-200"
            >
              <Icon name="quote" size={20} />
              <span>Get My Price</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
