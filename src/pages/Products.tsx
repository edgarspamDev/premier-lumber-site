import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import sawdustImage from '../assets/images/lumbrr/sawdust-shovel.webp';
import customLumberImage from '../assets/images/lumbrr/20260119_103036.opt.webp';

export function Sawdust() {
  return (
    <div>
      <SEO 
        title="Bulk Sawdust & Wood Shavings | Premier Lumber Co"
        description="Fresh, clean sawdust and wood shavings available in bulk. Perfect for animal bedding, spill cleanup, and landscaping. Loaded while you wait in Gary, IN."
        path="/sawdust"
      />
      <PageHeader 
        title="Sawdust & Shavings" 
        subtitle="Clean bulk sawdust. Loaded fast, priced right."
        bgImage={sawdustImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Call For Bulk Pricing</p>
                <p className="text-sm text-white/80">(219) 354-0720</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={sawdustImage} 
                  alt="Bulk sawdust at Premier Lumber" 
                  className="w-full h-full object-cover"
                  width={4032}
                  height={3024}
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="font-extrabold mb-6">Bulk Sawdust & Shavings</h2>
              <p className="text-stone-600 text-base md:text-lg mb-6">
                Fresh, clean sawdust available in bulk. Perfect for multiple applications.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { title: 'Animal Bedding', desc: 'Horses, poultry, livestock' },
                  { title: 'Spill Cleanup', desc: 'Industrial & workshop floors' },
                  { title: 'Composting', desc: 'Carbon-rich garden amendment' },
                  { title: 'Landscaping', desc: 'Pathways & erosion control' },
                ].map((use) => (
                  <div key={use.title} className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                    <Icon name="check" className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-charcoal text-sm">{use.title}</span>
                      <span className="text-xs text-stone-500 block">{use.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary">Get Sawdust Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CustomLumber() {
  return (
    <div>
      <SEO 
        title="Custom Lumber & Milling | Premier Lumber Co"
        description="Need specific wood dimensions? We cut custom lumber from local hardwood. Rough-sawn, trailer decking, and live edge slabs available. Gary, IN."
        path="/custom-lumber"
      />
      <PageHeader 
        title="Custom Lumber" 
        subtitle="Tell us the size. We cut it from local hardwood."
        bgImage={customLumberImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Discuss Your Project</p>
                <p className="text-sm text-white/80">(219) 354-0720</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={customLumberImage} 
                  alt="Custom lumber milling at Premier Lumber" 
                  className="w-full h-full object-cover"
                  width={4032}
                  height={3024}
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="font-extrabold mb-6">Your Specs, Our Saw. Done.</h2>
              <p className="text-stone-600 text-base md:text-lg mb-6">
                Need a non-standard size or species? We can cut it for you from local hardwood stock.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="font-bold text-charcoal text-sm">Trailer Decking (Oak)</span>
                    <span className="text-xs text-stone-500 block">Cut to your trailer specs</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="font-bold text-charcoal text-sm">Rough-Sawn Lumber</span>
                    <span className="text-xs text-stone-500 block">Various species available</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="font-bold text-charcoal text-sm">Live Edge Slabs</span>
                    <span className="text-xs text-stone-500 block">When available from inventory</span>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 mb-6 border border-stone-200">
                <div className="flex items-start gap-3">
                  <Icon name="saw" size={22} className="text-brand-brown shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-1">Dimensions Note</p>
                    <p className="text-xs text-stone-500">Custom dimensions depend on available log stock. Call to check current inventory before ordering.</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">Request Custom Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
