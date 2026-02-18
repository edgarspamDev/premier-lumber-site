import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-12 md:pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/logo.svg"
                alt="Premier Lumber Co"
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg leading-none">Premier <span className="text-primary">Lumber</span></span>
                <span className="text-xs text-primary/70 font-semibold">Quality Wood Products</span>
              </div>
            </Link>
            <p className="text-stone-400 mb-6 text-sm leading-relaxed">
              Serving Gary & Northwest Indiana Since 2000. Pallets, firewood, custom lumber.
              <span className="text-white font-medium"> Family-owned.</span>
            </p>
            <a href="tel:+12193982010" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors">
              <Icon name="phone" size={16} />
              (219) 398-2010
            </a>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wide">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/pallets" className="text-stone-400 hover:text-white transition-colors">Pallets (New & Used)</Link></li>
              <li><Link to="/firewood" className="text-stone-400 hover:text-white transition-colors">Seasoned Firewood</Link></li>
              <li><Link to="/sawdust" className="text-stone-400 hover:text-white transition-colors">Bulk Sawdust</Link></li>
              <li><Link to="/custom-lumber" className="text-stone-400 hover:text-white transition-colors">Custom Lumber</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/log-pickup" className="text-stone-400 hover:text-white transition-colors">Free Log Pickup</Link></li>
              <li><Link to="/tree-service-partners" className="text-stone-400 hover:text-white transition-colors">Tree Service Partners</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Pallet Recycling</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Local Delivery</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wide">Visit Us</h3>
            <div className="space-y-3 text-stone-400">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=724+Chicago+Ave,+East+Chicago,+IN+46312" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <Icon name="location" className="text-primary mt-0.5 shrink-0 group-hover:text-primary-light" size={18} />
                <span>724 Chicago Ave<br />East Chicago, IN 46312</span>
              </a>
              <div className="flex items-center gap-3">
                <Icon name="clock" className="text-primary shrink-0" size={18} />
                <span>Mon-Thu: 6AM-3PM<br />Fri & Sat: 6AM-2PM<br />Sun: Closed</span>
              </div>
            </div>
            <div className="mt-6">
              <a href="https://www.google.com/maps/dir//724+Chicago+Ave,+East+Chicago,+IN+46312" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/30 transition-colors border border-primary/30">
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
