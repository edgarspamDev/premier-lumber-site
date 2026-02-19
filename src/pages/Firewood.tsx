import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import firewoodImage from '../assets/images/lumbrr/IMG-20260202-WA0004.jpg'; // Bin of firewood blocks

export function Firewood() {
  return (
    <div>
      <SEO 
        title="Seasoned Firewood"
        description="Buy seasoned hardwood firewood in Gary & NW Indiana. Oak, cherry, ash, elm mix. Bulk discounts and delivery available. Call (219) 354-0720."
        path="/firewood"
        product={{
          name: "Seasoned Hardwood Firewood",
          description: "Air-dried mixed hardwood firewood (Oak, Cherry, Ash, Elm). Ready to burn. Available for delivery or pickup in Gary, IN.",
          image: firewoodImage,
          price: "0.00",
          availability: "InStock"
        }}
        breadcrumb={[
          { name: "Home", item: "/" },
          { name: "Firewood", item: "/firewood" }
        ]}
        faq={[
          {
            question: "What kind of firewood do you sell?",
            answer: "We sell a seasoned hardwood mix that typically includes Oak, Cherry, Ash, and Elm. It burns longer and cleaner than softwoods."
          },
          {
            question: "Do you offer firewood delivery?",
            answer: "Yes, we deliver firewood throughout Gary and the Northwest Indiana area. Bulk discounts are available."
          },
          {
            question: "Is your firewood ready to burn?",
            answer: "Yes, our firewood is air-dried and seasoned, making it ready to light immediately."
          }
        ]}
      />
      <PageHeader 
        title="Firewood" 
        subtitle="Dry, ready-to-burn hardwood. No guessing, no green wood, no wasted trips."
        bgImage={firewoodImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Call For Pricing</p>
                <p className="text-sm text-white/80">(219) 354-0720</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image */}
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={firewoodImage} 
                  alt="Seasoned firewood stacked at Premier Lumber" 
                  className="w-full h-full object-cover"
                  width={4032}
                  height={3024}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 border border-success/20">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                Available Year-Round
              </div>
              <h2 className="font-extrabold mb-6">Light It Tonight. Seasoned and Ready.</h2>
              <p className="text-stone-600 text-base md:text-lg mb-6">
                Our firewood is air-dried for optimal burn. Hardwood mix burns longer and cleaner than softwood.
              </p>

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="firewood" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Aged & Seasoned</span>
                    <span className="text-xs text-stone-500">Ready to burn</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="lumber" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Hardwood Mix</span>
                    <span className="text-xs text-stone-500">Oak, cherry, ash, elm</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="truck" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Delivery Available</span>
                    <span className="text-xs text-stone-500">NW Indiana area</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-green-600 shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Bulk Discounts</span>
                    <span className="text-xs text-stone-500">Ask about volume pricing</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary">Order Firewood Today</Link>
                <a href="tel:+12193540720" className="btn btn-secondary">
                  <Icon name="phone" size={18} className="mr-2" /> Call for Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
