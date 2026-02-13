import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icons';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const serviceLinks = [
    { name: 'Pallets', path: '/pallets' },
    { name: 'Firewood', path: '/firewood' },
    { name: 'Sawdust', path: '/sawdust' },
    { name: 'Custom Lumber', path: '/custom-lumber' },
    { name: 'Log Pickup', path: '/log-pickup' },
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    ...serviceLinks,
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/80 shadow-sm transition-all duration-300">
        {/* Top Bar - Desktop only (dark, bold) */}
        <div className="hidden md:block bg-dark text-white text-sm py-2.5">
          <div className="container-custom flex justify-between items-center">
            <div className="flex items-center gap-2 text-stone-300">
              <Icon name="location" size={16} className="text-primary" />
              <span>6717 Atcheson Dr, Gary, IN 46403</span>
            </div>
            <a href="tel:+12199386275" className="flex items-center gap-2 font-bold text-white hover:text-primary transition-colors">
              <Icon name="phone" size={16} className="text-primary" />
              (219) 938-6275
            </a>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="container-custom py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Always shows name */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Premier Lumber Co - Beaver mascot with log truck"
                className="h-14 md:h-16 lg:h-[4.5rem] w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg md:text-xl lg:text-2xl leading-none tracking-tight"><span className="text-charcoal">Premier </span><span className="text-primary">Lumber</span></span>
                <span className="text-[11px] md:text-xs lg:text-sm text-stone-500 font-semibold tracking-wide uppercase mt-0.5">Quality Wood Products</span>
              </div>
            </Link>

            {/* Desktop Nav - Cleaner */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-stone-600 hover:text-charcoal hover:bg-stone-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="ml-4 px-6 py-3 rounded-lg font-bold text-sm text-white bg-gradient-to-r from-primary to-orange-600 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 flex items-center gap-2">
                Get Free Quote →
              </Link>
            </nav>

            {/* Mobile Right Side: Phone + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+12199386275"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-white active:bg-primary-dark transition-colors"
                aria-label="Call Premier Lumber"
              >
                <Icon name="phone" size={20} />
              </a>
              <button
                className="w-11 h-11 flex items-center justify-center rounded-xl text-charcoal bg-stone-100 active:bg-stone-200 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <Icon name={isOpen ? 'close' : 'menu'} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col animate-slide-in">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-100">
              <span className="font-extrabold text-lg text-charcoal">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-xl text-stone-500 bg-stone-100 active:bg-stone-200"
                aria-label="Close menu"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto py-4 px-4">
              {/* Services Group */}
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest px-4 mb-2">Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold text-lg mb-1 min-h-[48px] ${
                    isActive(link.path)
                      ? 'text-primary bg-orange-50'
                      : 'text-stone-700 active:bg-stone-50'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && <Icon name="check" size={18} className="text-primary" />}
                </Link>
              ))}

              <div className="border-t border-stone-100 my-4" />

              {/* Other Links */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold text-lg mb-1 min-h-[48px] ${
                  isActive('/') ? 'text-primary bg-orange-50' : 'text-stone-700 active:bg-stone-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold text-lg mb-1 min-h-[48px] ${
                  isActive('/contact') ? 'text-primary bg-orange-50' : 'text-stone-700 active:bg-stone-50'
                }`}
              >
                Contact
              </Link>

              <div className="border-t border-stone-100 my-4" />

              {/* Legal (smaller) */}
              <div className="flex gap-4 px-4">
                <Link to="/privacy" onClick={() => setIsOpen(false)} className="text-sm text-stone-400 hover:text-stone-600">Privacy</Link>
                <Link to="/terms" onClick={() => setIsOpen(false)} className="text-sm text-stone-400 hover:text-stone-600">Terms</Link>
              </div>
            </nav>

            {/* Drawer Footer CTAs */}
            <div className="p-4 border-t border-stone-100 bg-stone-50">
              <div className="grid grid-cols-2 gap-3">
                <a href="tel:+12199386275" className="btn btn-secondary justify-center text-sm min-h-[48px]">
                  <Icon name="phone" size={18} className="mr-2" /> Call Now
                </a>
                <Link to="/contact" className="btn btn-primary justify-center text-sm min-h-[48px]" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
