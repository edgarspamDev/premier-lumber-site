import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';

function useCountUp(end: number, duration: number, decimals: number, trigger: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(parseFloat((eased * end).toFixed(decimals)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [trigger, end, duration, decimals]);
  return val;
}
import heroImage from '../assets/images/lumbrr/20260119_102704.opt.webp'; // Optimized Sawmill Hero
import palletsImage from '../assets/images/lumbrr/Pallets.opt.webp'; // Optimized Pallet Stacks
import firewoodImage from '../assets/images/lumbrr/IMG-20260202-WA0004.jpg'; // Bin of firewood blocks
import sawdustImage from '../assets/images/lumbrr/sawdust-shovel.webp'; // Optimized Sawdust
import customLumberImage from '../assets/images/lumbrr/20260119_103036.jpg'; // Large Log on Saw (reused for better quality)
import logImage from '../assets/images/lumbrr/logpick.webp'; // Correct Log Pickup WebP

export function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const years = useCountUp(26, 1200, 0, statsVisible);
  const rating = useCountUp(5.0, 1000, 1, statsVisible);
  const pct = useCountUp(100, 1400, 0, statsVisible);

  return (
    <>
      <SEO
        title="Premier Lumber Co | Pallets, Firewood & Sawdust | Gary, IN"
        description="Need wood pallets, firewood, or custom lumber in NW Indiana? Premier Lumber delivers same-week. We also pick up your hardwood logs FREE. Call (219) 354-0720."
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
            loading="eager"
            fetchPriority="high"
          />
          {/* Gradient overlay - left side darker for text, right shows image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="container-custom relative z-10 py-10 sm:py-14 md:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-in-up">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5 sm:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Serving NW Indiana Since 2000
            </div>

            {/* Google Review Badge - Hormozi Social Proof */}
            <div className="flex items-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex gap-0.5 text-[#FBBF24]">
                <Icon name="star" size={18} fill="currentColor" />
                <Icon name="star" size={18} fill="currentColor" />
                <Icon name="star" size={18} fill="currentColor" />
                <Icon name="star" size={18} fill="currentColor" />
                <Icon name="star" size={18} fill="currentColor" />
              </div>
              <div className="text-white font-bold text-sm">
                <span className="text-white">5.0 Stars</span> on <span className="font-bold">Google</span>
              </div>
            </div>

            {/* H1 - Hormozi Value Equation: Dream Outcome + Low Effort */}
            <h1 className="text-white text-[2.35rem] sm:text-5xl md:text-6xl lg:text-display-sm xl:text-display mb-4 sm:mb-6 leading-[1.05]">
              Get Quality Wood Products<br />
              <span className="text-primary">Without the Runaround.</span>
            </h1>

            {/* Subtitle — outcome-first, friction-free */}
            <p className="text-base sm:text-lg md:text-xl text-white mb-7 sm:mb-10 max-w-2xl leading-relaxed font-medium">
              Pallets, firewood, sawdust, and custom lumber, <strong className="text-white">in stock year-round</strong>. Tell us what you need and we handle the rest. No middlemen, no back-and-forth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link to="/contact" className="btn btn-primary w-full sm:w-auto text-base sm:text-lg">
                Get Your Free Quote →
              </Link>
              <a href="tel:+12193540720" className="btn btn-white w-full sm:w-auto text-base sm:text-lg">
                <Icon name="phone" size={20} className="mr-2" /> (219) 354-0720
              </a>
            </div>

            {/* Trust points — Hormozi: Certainty + Speed + Low Effort */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-x-8 sm:gap-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <Icon name="check" className="text-primary" size={18} />
                <span><strong className="text-white">Same-day</strong> pricing</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <Icon name="check" className="text-primary" size={18} />
                <span><strong className="text-white">In stock</strong> year-round</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <Icon name="check" className="text-primary" size={18} />
                <span><strong className="text-white">26 years,</strong> one location</span>
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

      {/* STATS BAR - Animated Social Proof */}
      <section ref={statsRef} className="bg-charcoal text-white border-t-2 border-primary border-b border-b-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4">

            {/* Stat 1 — Years */}
            <div
              className="flex flex-col items-center text-center py-7 px-4 border-b border-r border-white/10 md:border-b-0 hover:bg-white/5 transition-colors"
              style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.5s ease 0s, transform 0.5s ease 0s' }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">Est. 2000</span>
              <span className="text-5xl md:text-6xl font-extrabold text-white leading-none tabular-nums">{years}</span>
              <span className="text-[11px] text-white/50 font-semibold mt-2 uppercase tracking-widest">Years in Business</span>
            </div>

            {/* Stat 2 — Rating */}
            <div
              className="flex flex-col items-center text-center py-7 px-4 border-b border-white/10 md:border-b-0 md:border-r hover:bg-white/5 transition-colors"
              style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s' }}
            >
              <div className="flex gap-0.5 text-primary mb-1.5">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={11} fill="currentColor" />)}
              </div>
              <span className="text-5xl md:text-6xl font-extrabold text-white leading-none tabular-nums">{rating.toFixed(1)}</span>
              <span className="text-[11px] text-white/50 font-semibold mt-2 uppercase tracking-widest">Google Rating</span>
            </div>

            {/* Stat 3 — Service Radius */}
            <div
              className="flex flex-col items-center text-center py-7 px-4 border-r border-white/10 hover:bg-white/5 transition-colors"
              style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s' }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">We Deliver</span>
              <span className="text-5xl md:text-6xl font-extrabold text-white leading-none tabular-nums">{pct}<span className="text-2xl md:text-3xl font-bold"> Miles</span></span>
              <span className="text-[11px] text-white/50 font-semibold mt-2 uppercase tracking-widest">From Gary (Ask Us)</span>
            </div>

            {/* Stat 4 — Coverage */}
            <div
              className="flex flex-col items-center text-center py-7 px-4 hover:bg-white/5 transition-colors"
              style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s' }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">We Come to You</span>
              <span className="text-5xl md:text-6xl font-extrabold text-white leading-none">NW</span>
              <span className="text-[11px] text-white/50 font-semibold mt-2 uppercase tracking-widest">Indiana Delivery</span>
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
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Talk to a Human</p>
                <p className="text-sm text-white/80">(219) 354-0720</p>
              </div>
            </div>
            <span className="text-sm font-bold">Call →</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {/* Pallets */}
            <div className="card group">
              <div className="h-48 md:h-56 overflow-hidden bg-stone-100 relative">
                <img
                  src={palletsImage}
                  alt="Stack of wooden pallets"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  width={800} height={600}
                  loading="lazy"
                />

              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="pallets" className="text-primary" size={22} /> Pallets
                </h3>
                <p className="text-stone-600 mb-4">Stop scrambling for pallets. New, used & heat-treated, always in stock. <strong>We buy your cores too.</strong></p>
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
                <div className="absolute top-4 right-4 bg-success text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide">
                  In Stock Year-Round
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="firewood" className="text-primary" size={22} /> Firewood
                </h3>
                <p className="text-stone-600 mb-4">Burn clean all season. Seasoned hardwood, ready to light. <strong>Pickup or delivered to your door.</strong></p>
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
                <p className="text-stone-600 mb-4">Bulk sawdust on demand. Bedding, landscaping, spill cleanup. <strong>Loaded while you wait.</strong></p>
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
                <p className="text-stone-600 mb-4">Can't find the right size? Tell us what you need. <strong>We'll cut it from local hardwood.</strong></p>
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
                Got Logs Sitting Around?<br />
                <span className="text-primary">We'll Come Get Them. For Free.</span>
              </h2>
              <p className="text-xl text-stone-200 mb-8 leading-relaxed">
                No hauling, no dump fees, no hassle. If your hardwood logs qualify, our truck shows up and takes them.
                <strong className="text-white"> You don't lift a finger or spend a dime.</strong>
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-dark-muted/50 rounded-xl p-4 border border-dark-muted">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check" className="text-success" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Hardwood Only</div>
                    <div className="text-stone-300 text-sm">Oak, Walnut, Cherry, Maple</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-dark-muted/50 rounded-xl p-4 border border-dark-muted">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check" className="text-success" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">14"+ Diameter, 8'+ Length</div>
                    <div className="text-stone-300 text-sm">Big logs only. We need mill-worthy timber</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-dark-muted/50 rounded-xl p-4 border border-dark-muted">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name="check" className="text-success" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Truck Accessible</div>
                    <div className="text-stone-300 text-sm">Our log truck needs to reach the site</div>
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

      {/* SOCIAL PROOF - Real Google Reviews */}
      <section className="section bg-stone-50 border-t border-stone-200">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="flex justify-center gap-1 text-[#FBBF24] mb-3">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size={28} fill="currentColor" />
              ))}
            </div>
            <h2 className="mb-2">What Customers Say</h2>
            <p className="text-stone-500 text-lg">Every review is 5 stars. See what customers say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {/* Real review — anonymous */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex gap-1 text-[#FBBF24] mb-3">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                "Good prices for your pallets. Great people work there."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">★</div>
                <div>
                  <p className="font-bold text-charcoal text-sm">Verified Google Review</p>
                  <p className="text-xs text-stone-400">Local Guide · Gary, IN</p>
                </div>
              </div>
            </div>

            {/* Real reviewer — anonymous */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex gap-1 text-[#FBBF24] mb-3">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                "Verified 5-star review."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">★</div>
                <div>
                  <p className="font-bold text-charcoal text-sm">Verified Google Review</p>
                  <p className="text-xs text-stone-400">Local Guide · 6 months ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              aria-label="Read all Premier Lumber Co reviews on Google Maps"
            >
              Read Our Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Strong close */}
      <section className="section bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">
            Get Your Price in 24 Hours
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Call or fill out the form. No sales pitch, no obligation. Just a straight answer on what it costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-white text-lg">
              Get Your Free Quote →
            </Link>
            <a href="tel:+12193540720" className="btn bg-primary-darker text-white border-2 border-primary-dark text-lg" style={{ boxShadow: '0 4px 0 0 #9a3412' }}>
              <Icon name="phone" size={20} className="mr-2" /> (219) 354-0720
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
