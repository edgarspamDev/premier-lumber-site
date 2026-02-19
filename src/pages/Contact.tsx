import { PageHeader } from "../components/PageHeader";
import { RFQForm } from "../components/RFQForm";
import { Icon } from "../components/Icons";
import { SEO } from "../components/SEO";

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
      />
      
      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Tap to Call</p>
                <p className="text-sm text-white/80">(219) 354-0720</p>
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
                    <p className="text-stone-600 text-sm">
                      <a 
                        href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors"
                      >
                        6717 Atcheson Dr<br/>Gary, IN 46403
                      </a>
                    </p>
                    <a href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm mt-1 inline-block hover:underline">Get Directions &rarr;</a>
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
                      <p className="text-stone-500 text-sm">Mon-Fri: 7AM - 4PM<br/>Sat: 7AM - 12PM</p>
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
