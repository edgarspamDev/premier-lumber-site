import { PageHeader } from "../components/PageHeader";
import { RFQForm } from "../components/RFQForm";
import { Icon } from "../components/Icons";
import { SEO } from "../components/SEO";


import contactBg from '../assets/images/lumbrr/IMG-20260209-WA0016.jpg';

export function Contact() {
  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get a free quote from Premier Lumber Co. Call (219) 354-0720. 6717 Atcheson Dr, Gary, IN. Open Mon-Sat."
        path="/contact"
      />
      <PageHeader 
        title="Contact Us" 
        subtitle="Tell us what you need. We'll get back to you today."
        bgImage={contactBg}
      />
      
      {/* FIND OUR YARD — top of page, mobile-first */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Icon name="location" size={22} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="font-extrabold text-charcoal text-base leading-tight">6717 Atcheson Dr, Gary, IN 46403</p>
                <p className="text-stone-500 text-sm">Mon–Thu 6AM–3PM · Fri–Sat 6AM–2PM</p>
              </div>
            </div>
            <a
              href="https://maps.apple.com/?q=Premier+Lumber+Co&address=6717+Atcheson+Dr,Gary,IN+46403"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-xl text-sm hover:bg-primary-dark transition-colors shrink-0 min-h-[48px]"
            >
              <Icon name="location" size={18} /> Get Directions
            </a>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Tap to Call</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-sm text-white/80">(219) 354-0720</p>
                  <span className="text-[10px] text-white/60 notranslate" translate="no">Hablamos Español</span>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <h2 className="font-bold mb-6 md:mb-8">Get In Touch</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Icon name="location" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <div className="space-y-4 mt-2">
                      <div>
                        <p className="font-bold text-charcoal text-sm">Lumber Yard (Main)</p>
                        <a 
                          href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-stone-600 text-sm hover:text-primary transition-colors block"
                        >
                          6717 Atcheson Dr, Gary, IN 46403
                        </a>
                        <p className="text-xs text-stone-500 mt-0.5">M-Th 6am-3pm, F-Sat 6am-2pm</p>
                      </div>
                      
                      <div>
                        <p className="font-bold text-charcoal text-sm">Office</p>
                        <p className="text-stone-600 text-sm">724 Chicago Ave, East Chicago, IN 46312</p>
                        <p className="text-xs text-stone-500 mt-0.5">M-F 8am-4pm, Sat Closed</p>
                      </div>
                    </div>
                    <a href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm mt-3 inline-block hover:underline">Get Directions to Yard &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Icon name="phone" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    
                    {/* Main Phone */}
                    <div>
                      <p className="text-stone-900 font-bold text-sm mb-0.5">Premier Lumber Co</p>
                      <a href="tel:+12193540720" className="text-lg font-bold text-primary hover:text-primary-dark transition-colors block mb-1">(219) 354-0720</a>
                      
                      <a href="tel:+12195164867" className="inline-block mt-2 mb-1 group">
                        <span className="text-[11px] font-bold uppercase tracking-wide text-stone-400 block mb-0.5">Para Español</span>
                        <span className="text-base font-bold text-stone-600 group-hover:text-primary transition-colors">(219) 516-4867</span>
                      </a>
                      <p className="text-stone-500 text-sm">Call M-F 8am-4pm</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Icon name="mail" size={22} />
                   </div>
                   <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-stone-600 text-sm">Use the form to send us a message.</p>
                   </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-8 h-48 md:h-64 bg-stone-100 rounded-2xl overflow-hidden shadow-inner border border-stone-200">
                <iframe 
                  title="Premier Lumber Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2!2d-87.2592886!3d41.6006386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811c05177fe3f73%3A0x3e514e35aa3d585!2sPremier%20Lumber%20Co!5e0!3m2!1sen!2sus" 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form - appears first on mobile */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 p-6 md:p-8">
              <h3 className="font-bold mb-1">Get Your Price in Minutes</h3>
              <RFQForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
