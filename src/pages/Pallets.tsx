import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import palletHeroImage from '../assets/images/lumbrr/IMG-20260209-WA0016.jpg';

export function Pallets() {
  return (
    <div>
      <SEO 
        title="Wood Pallets — Buy, Sell & Recycle"
        description="Buy new & used GMA standard pallets or sell your pallet cores. Heat-treated (ISPM-15). Custom sizes available. Volume discounts. Gary, IN. Call (219) 938-6275."
        path="/pallets"
      />
      <PageHeader 
        title="Pallets" 
        subtitle="Buy, sell, or recycle. GMA standard sizes in stock."
        bgImage={palletHeroImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12199386275" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Call For Pricing</p>
                <p className="text-sm text-white/80">(219) 938-6275</p>
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
              <h3 className="font-bold mb-4">Buy Pallets</h3>
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
              <h3 className="font-bold mb-4">Sell Your Pallets</h3>
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
              <a href="tel:+12199386275" className="btn btn-secondary w-full sm:w-auto">
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
        </div>
      </section>
    </div>
  );
}
