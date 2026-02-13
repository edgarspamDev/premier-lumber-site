import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import heroImage from '../assets/images/lumbrr/20260119_102704.jpg'; // Sawmill with log on machine
import palletImage from '../assets/images/lumbrr/IMG-20260209-WA0016.jpg'; // Stack of Pallets
import firewoodImage from '../assets/images/lumbrr/IMG-20260210-WA0002.jpg'; // Seasoned firewood ready for delivery
import sawdustImage from '../assets/images/lumbrr/20260119_103650.jpg'; // Scrap bin - recognizable at card size
import customLumberImage from '../assets/images/lumbrr/20260119_103036.jpg'; // Large Log on Saw (reused for better quality)
import logImage from '../assets/images/lumbrr/20260119_103036.jpg'; // Large Log on Saw

export function Home() {
  return (
    <>
      <SEO
        title="Premier Lumber Co | Pallets, Firewood & Custom Lumber | Gary, IN"
        description="Need wood pallets, firewood, or custom lumber in NW Indiana? Premier Lumber delivers same-week. We also pick up your hardwood logs FREE. Call (219) 938-6275."
        path="/"
      />

      {/* HERO SECTION - Full background image, clean overlay */}
      <section className="relative min-h-[72dvh] sm:min-h-[78dvh] md:min-h-[90vh] flex items-center text-white overflow-hidden">
        {/* Background Image - visible and impactful */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Premier Lumber sawmill with log on cutting machine"
            className="w-full h-full object-cover"
            width={5120}
            height={3840}
          />
          {/* Gradient overlay - left side darker for text, right shows image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="container-custom relative z-10 py-10 sm:py-14 md:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-in-up">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5 sm:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Serving NW Indiana Since 1985
            </div>

            {/* H1 - Clean, powerful */}
            <h1 className="text-white text-[2.35rem] sm:text-5xl md:text-6xl lg:text-display-sm xl:text-display mb-4 sm:mb-6 leading-[1.05]">
              Get Wood Products<br />
              <span className="text-primary">Delivered This Week.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/85 mb-7 sm:mb-10 max-w-xl leading-relaxed">
              Pallets. Firewood. Custom lumber.<br className="hidden sm:block" />
              Straight from our sawmill to your site.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link to="/contact" className="btn btn-primary w-full sm:w-auto text-base sm:text-lg">
                Get Your Free Quote →
              </Link>
              <a href="tel:+12199386275" className="btn btn-white w-full sm:w-auto text-base sm:text-lg">
                <Icon name="phone" size={20} className="mr-2" /> (219) 938-6275
              </a>
            </div>

            {/* Trust points - stacked on phone, horizontal on larger screens */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-x-8 sm:gap-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <Icon name="check" className="text-primary" size={18} />
                <span><strong className="text-white">Same-week</strong> delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <Icon name="check" className="text-primary" size={18} />
                <span><strong className="text-white">FREE</strong> log pickup</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <Icon name="check" className="text-primary" size={18} />
                <span><strong className="text-white">40+ years</strong> experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile where sticky CTA covers it */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* STATS BAR - Clean, organized */}
      <section className="bg-white border-b border-stone-200 py-8 md:py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {/* Years in Business */}
            <div className="flex flex-col items-center justify-center px-2 md:px-4">
              <div className="text-3xl md:text-5xl font-extrabold text-charcoal leading-none">40<span className="text-primary">+</span></div>
              <div className="text-stone-500 text-xs md:text-sm font-bold uppercase tracking-tight mt-2">Years in<br className="md:hidden" /> Business</div>
            </div>
            
            {/* Pallets in Stock */}
            <div className="flex flex-col items-center justify-center px-2 md:px-4">
              <div className="text-3xl md:text-5xl font-extrabold text-primary leading-none">1000<span className="text-charcoal">s</span></div>
              <div className="text-stone-500 text-xs md:text-sm font-bold uppercase tracking-tight mt-2">Pallets in<br className="md:hidden" /> Stock</div>
            </div>
            
            {/* Free Log Pickup */}
            <div className="flex flex-col items-center justify-center px-2 md:px-4">
              <div className="text-2xl md:text-5xl font-extrabold text-white bg-primary rounded-lg px-3 md:px-4 py-1 md:py-2 leading-none">FREE</div>
              <div className="text-stone-500 text-xs md:text-sm font-bold uppercase tracking-tight mt-2">Log Pickup<br className="md:hidden" /> Service</div>
            </div>
            
            {/* Quote Response */}
            <div className="flex flex-col items-center justify-center px-2 md:px-4">
              <div className="text-3xl md:text-5xl font-extrabold text-charcoal leading-none">24<span className="text-primary">hr</span></div>
              <div className="text-stone-500 text-xs md:text-sm font-bold uppercase tracking-tight mt-2">Quote<br className="md:hidden" /> Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Clean, direct */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Section header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="mb-4">What We Sell</h2>
            <p className="text-lg md:text-xl text-stone-600">
              Everything wood. No minimum orders. Pickup or delivery.
            </p>
          </div>

          {/* Mobile CTA */}
          <a href="tel:+12199386275" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Talk to a Human</p>
                <p className="text-sm text-white/80">(219) 938-6275</p>
              </div>
            </div>
            <span className="text-sm font-bold">Call →</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {/* Pallets */}
            <div className="card group">
              <div className="h-48 md:h-56 overflow-hidden bg-stone-100 relative">
                <img
                  src={palletImage}
                  alt="Stack of wooden pallets"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  width={800} height={600}
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-success text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide">
                  In Stock
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="pallets" className="text-primary" size={22} /> Pallets
                </h3>
                <p className="text-stone-600 mb-4">New, used & heat-treated. GMA standard. <strong>We buy cores too.</strong></p>
                <Link to="/pallets" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  See Options <span>→</span>
                </Link>
              </div>
            </div>

            {/* Firewood */}
            <div className="card group">
              <div className="h-48 md:h-56 overflow-hidden bg-stone-100 relative">
                <img
                  src={firewoodImage}
                  alt="Seasoned firewood for sale"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  width={800} height={600}
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Seasoned
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="firewood" className="text-primary" size={22} /> Firewood
                </h3>
                <p className="text-stone-600 mb-4">Hardwood mix. <strong>Dry, ready to burn.</strong> Pickup or delivery.</p>
                <Link to="/firewood" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Get Pricing <span>→</span>
                </Link>
              </div>
            </div>

            {/* Sawdust */}
            <div className="card group">
              <div className="h-48 md:h-56 overflow-hidden bg-stone-100">
                <img
                  src={sawdustImage}
                  alt="Bulk sawdust"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  width={800} height={600}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="sawdust" className="text-primary" size={22} /> Sawdust
                </h3>
                <p className="text-stone-600 mb-4">Bulk sawdust & shavings. <strong>Great for bedding & composting.</strong></p>
                <Link to="/sawdust" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Bulk Pricing <span>→</span>
                </Link>
              </div>
            </div>

            {/* Custom Lumber */}
            <div className="card group">
              <div className="h-48 md:h-56 overflow-hidden bg-stone-100 relative">
                <img
                  src={customLumberImage}
                  alt="Custom lumber milling and cuts"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  width={800} height={600}
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-accent text-charcoal px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Custom
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="saw" className="text-primary" size={22} /> Custom Lumber
                </h3>
                <p className="text-stone-600 mb-4">Cut to your specs. <strong>Hardwood slabs, beams & boards.</strong></p>
                <Link to="/custom-lumber" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Get Details <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOG PICKUP FEATURE - The differentiator */}
      <section className="section bg-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border-4 border-dark-muted">
                <img
                  src={logImage}
                  alt="Large log being processed at sawmill"
                  className="w-full h-full object-cover"
                  width={4032}
                  height={3024}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6 border border-success/30">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                Free Service
              </div>
              <h2 className="text-white mb-6">
                Got Logs?<br />
                <span className="text-primary">We Pick Them Up Free.</span>
              </h2>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                Stop paying to haul away hardwood logs. If they qualify, we'll send our truck —
                <strong className="text-white"> you pay nothing.</strong>
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-dark-muted/50 rounded-xl p-4 border border-dark-muted">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check" className="text-success" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Hardwood Only</div>
                    <div className="text-stone-400 text-sm">Oak, Walnut, Cherry, Maple</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-dark-muted/50 rounded-xl p-4 border border-dark-muted">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check" className="text-success" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">14"+ Diameter, 8'+ Length</div>
                    <div className="text-stone-400 text-sm">Big logs only — we need mill-worthy timber</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-dark-muted/50 rounded-xl p-4 border border-dark-muted">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check" className="text-success" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Truck Accessible</div>
                    <div className="text-stone-400 text-sm">Our log truck needs to reach the site</div>
                  </div>
                </div>
              </div>
              <Link to="/log-pickup" className="btn btn-accent text-lg">
                Check If Your Logs Qualify →
              </Link>
              <p className="mt-4 text-sm text-stone-300">
                Need tree removal first? We can refer independent licensed crews.
                <Link to="/tree-service-partners" className="ml-2 font-bold text-primary hover:text-primary-light">
                  Learn more
                </Link>
              </p>
            </div>

          </div>

          {/* Phone-only section CTA */}
          <div className="mt-6 md:hidden">
            <Link to="/contact" className="btn btn-primary w-full">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Strong close */}
      <section className="section bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">
            Ready to Talk Wood?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a quote in 24 hours. No pushy sales, just straight answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-white text-lg">
              Get Your Free Quote →
            </Link>
            <a href="tel:+12199386275" className="btn bg-primary-darker text-white border-2 border-primary-dark text-lg" style={{ boxShadow: '0 4px 0 0 #9a3412' }}>
              <Icon name="phone" size={20} className="mr-2" /> (219) 938-6275
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
