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
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="bg-white/90 backdrop-blur-md border-t border-stone-200/60 shadow-[0_-4px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
        <div className="grid grid-cols-3 gap-0">
          {/* Call Now */}
          <a
            href="tel:+12199386275"
            className="flex flex-col items-center justify-center py-2 bg-charcoal text-white font-bold text-xs active:scale-95 transition-all duration-200 min-h-[60px] border-r border-stone-700"
          >
            <Icon name="phone" size={20} className="mb-1" />
            <span>Call</span>
          </a>

          {/* Directions */}
          <a
            href="https://www.google.com/maps/dir//6717+Atcheson+Dr,+Gary,+IN+46403"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 bg-charcoal text-white font-bold text-xs active:scale-95 transition-all duration-200 min-h-[60px] border-r border-stone-700"
          >
            <Icon name="location" size={20} className="mb-1" />
            <span>Directions</span>
          </a>

          {/* Get Quote */}
          {isContactPage ? (
            <button
              type="button"
              onClick={scrollToContactForm}
              className="flex flex-col items-center justify-center py-2 bg-gradient-to-br from-primary to-orange-600 text-white font-bold text-xs active:scale-95 transition-all duration-300 min-h-[60px] shadow-[0_-4px_20px_rgba(234,88,12,0.3)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Icon name="quote" size={20} className="mb-1 relative z-10" />
              <span className="relative z-10">Quote</span>
            </button>
          ) : (
            <Link
              to="/contact#contact-form"
              className="flex flex-col items-center justify-center py-2 bg-gradient-to-br from-primary to-orange-600 text-white font-bold text-xs active:scale-95 transition-all duration-300 min-h-[60px] shadow-[0_-4px_20px_rgba(234,88,12,0.3)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Icon name="quote" size={20} className="mb-1 relative z-10" />
              <span className="relative z-10">Quote</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
