import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import { NoTranslate } from './NoTranslate';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-12 md:pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="/logo.svg"
                alt="Premier Lumber Co"
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <NoTranslate as="span" className="font-extrabold text-lg leading-none">Premier <span className="text-primary">Lumber</span></NoTranslate>
                <span className="text-xs text-primary/70 font-semibold">Quality Wood Products</span>
              </div>
            </Link>
            <p className="text-stone-400 mb-6 text-sm leading-relaxed">
              Serving Gary & Northwest Indiana Since 2000. Pallets, firewood, custom lumber.
              <span className="text-white font-medium"> Family-owned.</span>
            </p>
            <a href="tel:+12193540720" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors">
              <Icon name="phone" size={16} />
              (219) 354-0720
            </a>
            <a href="tel:+12195164867" className="inline-flex items-center gap-2 text-stone-400 font-bold hover:text-primary transition-colors mt-1 text-sm block">
              <span className="text-xs uppercase font-normal text-stone-500 mr-1">Para Español:</span> (219) 516-4867
            </a>
            <div className="mt-4">
              <a 
                href="https://www.google.com/search?q=Premier+Lumber+Co+Gary+IN&lrd=0x8811c05177fe3f73:0x3e514e35aa3d585,3,,,," 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg font-bold text-xs uppercase tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Icon name="star" size={16} fill="currentColor" />
                Rate Us on Google
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wide">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/pallets" className="text-stone-400 hover:text-white transition-colors block py-1">Pallets (New & Used)</Link></li>
              <li><Link to="/firewood" className="text-stone-400 hover:text-white transition-colors block py-1">Seasoned Firewood</Link></li>
              <li><Link to="/sawdust" className="text-stone-400 hover:text-white transition-colors block py-1">Bulk Sawdust</Link></li>
              <li><Link to="/custom-lumber" className="text-stone-400 hover:text-white transition-colors block py-1">Custom Lumber</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/log-pickup" className="text-stone-400 hover:text-white transition-colors block py-1">Free Log Pickup</Link></li>
              <li><Link to="/tree-service-partners" className="text-stone-400 hover:text-white transition-colors block py-1">Tree Service Partners</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors block py-1">Pallet Recycling</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors block py-1">Local Delivery</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors block py-1">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wide">Visit Us</h3>
            <div className="space-y-4 text-stone-400">
              {/* Yard Info */}
              <div>
                <span className="font-bold text-white block text-sm mb-1">Premier Lumber Yard</span>
                <a 
                  href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-2 hover:text-white transition-colors group mb-1 text-sm"
                >
                  <Icon name="location" className="text-primary mt-0.5 shrink-0 group-hover:text-primary-light" size={16} />
                  <span>6717 Atcheson Dr<br />Gary, IN 46403</span>
                </a>
                <div className="flex items-start gap-2 text-xs ml-6">
                  <Icon name="clock" className="text-stone-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    M-Th: 6AM–3PM<br />
                    F-Sat: 6AM–2PM
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div>
                <span className="font-bold text-white block text-sm mb-1">Premier Office</span>
                <div className="flex items-start gap-2 text-sm mb-1">
                  <Icon name="location" className="text-stone-500 mt-0.5 shrink-0" size={16} />
                  <span>724 Chicago Ave<br />East Chicago, IN 46312</span>
                </div>
                <div className="flex items-start gap-2 text-xs ml-6">
                  <Icon name="clock" className="text-stone-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    M-F: 8AM–4PM<br />
                    Sat: Closed
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/30 transition-colors border border-primary/30">
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-muted pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 gap-4">
          <p>© {currentYear} Premier Lumber Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
