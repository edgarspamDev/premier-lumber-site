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
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* iOS-style glass bar */}
      <div
        className="border-t border-stone-200/80 px-3 pt-2 pb-2"
        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="flex gap-2">

          {/* Call */}
          <a
            href="tel:+12193540720"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-2xl bg-charcoal text-white active:scale-95 transition-transform duration-100 min-h-[56px]"
            aria-label="Call Premier Lumber"
          >
            <Icon name="phone" size={22} />
            <span className="text-[11px] font-bold tracking-wide">Call</span>
          </a>

          {/* Directions — opens Apple Maps on iOS, Google Maps elsewhere */}
          <a
            href="https://maps.apple.com/?q=Premier+Lumber+Co&address=6717+Atcheson+Dr,Gary,IN+46403"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-2xl bg-stone-100 text-charcoal active:scale-95 transition-transform duration-100 min-h-[56px]"
            aria-label="Get directions to Premier Lumber"
          >
            <Icon name="location" size={22} />
            <span className="text-[11px] font-bold tracking-wide text-stone-700">Directions</span>
          </a>

          {/* Get Quote — primary action */}
          {isContactPage ? (
            <button
              type="button"
              onClick={scrollToContactForm}
              className="flex-[1.4] flex flex-col items-center justify-center gap-1 py-2.5 bg-primary text-white rounded-2xl active:scale-95 transition-transform duration-100 min-h-[56px] shadow-lg shadow-orange-300/40"
              aria-label="Get a price quote"
            >
              <Icon name="quote" size={22} />
              <span className="text-[11px] font-bold tracking-wide">Get Quote</span>
            </button>
          ) : (
            <Link
              to="/contact"
              className="flex-[1.4] flex flex-col items-center justify-center gap-1 py-2.5 bg-primary text-white rounded-2xl active:scale-95 transition-transform duration-100 min-h-[56px] shadow-lg shadow-orange-300/40"
              aria-label="Get a price quote"
            >
              <Icon name="quote" size={22} />
              <span className="text-[11px] font-bold tracking-wide">Get Quote</span>
            </Link>
          )}

        </div>
      </div>
    </div>
  );
}
