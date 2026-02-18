import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import palletHeroImage from '../assets/images/lumbrr/Pallets.opt.webp'; // Optimized Hero Logic - Updated per user request

export function Pallets() {
  return (
    <div>
      <SEO 
        title="Wood Pallets: Buy, Sell & Recycle"
        description="Buy new & used GMA standard pallets or sell your pallet cores. Heat-treated (ISPM-15). Custom sizes available. Volume discounts. Gary, IN. Call (219) 398-2010."
        path="/pallets"
      />
      <PageHeader 
        title="Pallets" 
        subtitle="New, used, or custom. Always in stock, always the right size."
        bgImage={palletHeroImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193982010" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Call For Pricing</p>
                <p className="text-sm text-white/80">(219) 398-2010</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          {/* Buy & Sell Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-8">
            {/* Buy Section */}
            <div className="card p-6 md:p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                <Icon name="pallets" size={32} />
              </div>
              <h3 className="font-bold mb-4">Need Pallets? We've Got Them. Always.</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-primary shrink-0" /> 48×40 GMA Standard Grade A & B
                </li>
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-primary shrink-0" /> Heat-treated (ISPM-15 compliant)
                </li>
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-primary shrink-0" /> Custom sizes available
                </li>
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-primary shrink-0" /> Volume discounts for regulars
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full sm:w-auto">Get Pallet Quote</Link>
            </div>

            {/* Sell Section */}
            <div className="card p-6 md:p-8 bg-stone-50">
              <div className="w-14 h-14 bg-brand-brown/10 rounded-2xl flex items-center justify-center text-brand-brown mb-4">
                <Icon name="truck" size={32} />
              </div>
              <h3 className="font-bold mb-4">Got Extra Pallets? Turn Them Into Cash</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-green-600 shrink-0" /> We buy repairable cores
                </li>
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-green-600 shrink-0" /> Pickup available for large lots
                </li>
                <li className="flex items-center gap-2 text-stone-700 text-sm">
                  <Icon name="check" size={18} className="text-green-600 shrink-0" /> Fair, consistent pricing
                </li>
              </ul>
              <a href="tel:+12193982010" className="btn btn-secondary w-full sm:w-auto">
                <Icon name="phone" size={18} className="mr-2" /> Call About Selling
              </a>
            </div>
          </div>

          {/* Pallet Lifecycle */}
          <div className="bg-brand-cream rounded-2xl p-6 md:p-10 border border-orange-100">
            <h3 className="font-bold text-center mb-8">The Pallet Lifecycle</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: 'pallets' as const, label: 'New Pallets', desc: 'Built to order' },
                { icon: 'truck' as const, label: 'Deliver & Use', desc: 'Ship your products' },
                { icon: 'wrench' as const, label: 'Repair', desc: 'We fix broken pallets', emphasize: true },
                { icon: 'check' as const, label: 'Resell', desc: 'Back into service' },
              ].map((step) => (
                <div
                  key={step.label}
                  className={`text-center rounded-xl p-4 border ${
                    step.emphasize
                      ? 'bg-white border-primary/20 shadow-[0_6px_18px_rgba(249,115,22,0.12)]'
                      : 'bg-white/90 border-stone-200/80 shadow-sm'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 border ${
                      step.emphasize
                        ? 'bg-primary/10 border-primary/20 shadow-[0_4px_12px_rgba(249,115,22,0.18)]'
                        : 'bg-white border-stone-200 shadow-sm'
                    }`}
                  >
                    <Icon name={step.icon} size={28} />
                  </div>
                  <p className="font-semibold text-sm text-charcoal mb-1.5">{step.label}</p>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-stone-600 mb-4">Need a custom size or bulk order?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">Get Pallet Pricing</Link>
              <a href="tel:+12193982010" className="btn btn-secondary">
                <Icon name="phone" size={18} className="mr-2" /> (219) 398-2010
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
