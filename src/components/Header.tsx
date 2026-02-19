import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const serviceLinks = [
    { name: "Pallets", path: "/pallets" },
    { name: "Firewood", path: "/firewood" },
    { name: "Sawdust", path: "/sawdust" },
    { name: "Custom Lumber", path: "/custom-lumber" },
    { name: "Log Pickup", path: "/log-pickup" },
  ];

  const mainLinks = [
    { name: "Home", path: "/" },
    ...serviceLinks,
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b-2 border-stone-200">
        {/* Top Bar - Desktop only (dark, bold) */}
        <div className="hidden md:block bg-dark text-white text-sm py-2.5">
          <div className="container-custom flex justify-between items-center">
            <a
              href="https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
            >
              <Icon name="location" size={16} className="text-primary" />
              <span>6717 Atcheson Dr, Gary, IN 46403</span>
            </a>
            <a
              href="tel:+12193540720"
              className="flex items-center gap-2 font-bold text-white hover:text-primary transition-colors"
            >
              <Icon name="phone" size={16} className="text-primary" />
              (219) 354-0720
            </a>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="container-custom py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Beaver mascot with text */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/logo.svg"
                alt="Premier Lumber Co - Beaver Mascot"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-lg md:text-xl leading-none tracking-tight">
                  <span className="text-charcoal">Premier </span>
                  <span className="text-primary">Lumber</span>
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-primary/80 font-bold tracking-wide">
                  Quality Wood Products
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Cleaner */}
            <nav className="hidden lg:flex items-center gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all hover-underline-animation ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-stone-600 hover:text-charcoal hover:bg-stone-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 btn btn-primary flex items-center gap-2 text-sm py-3"
              >
                Get Free Quote →
              </Link>
            </nav>

            {/* Mobile Right Side: Phone + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+12193540720"
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
                <Icon name={isOpen ? "close" : "menu"} size={24} />
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
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest px-4 mb-2">
                Services
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold text-lg mb-1 min-h-[48px] ${
                    isActive(link.path)
                      ? "text-primary bg-orange-50"
                      : "text-stone-700 active:bg-stone-50"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <Icon name="check" size={18} className="text-primary" />
                  )}
                </Link>
              ))}

              <div className="border-t border-stone-100 my-4" />

              {/* Other Links */}
              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold text-lg mb-1 min-h-[48px] ${
                  isActive("/")
                    ? "text-primary bg-orange-50"
                    : "text-stone-700 active:bg-stone-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-xl font-bold text-lg mb-1 min-h-[48px] ${
                  isActive("/contact")
                    ? "text-primary bg-orange-50"
                    : "text-stone-700 active:bg-stone-50"
                }`}
              >
                Contact
              </Link>

              <div className="border-t border-stone-100 my-4" />

              {/* Legal (smaller) */}
              <div className="flex gap-4 px-4">
                <Link
                  to="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-stone-400 hover:text-stone-600"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-stone-400 hover:text-stone-600"
                >
                  Terms
                </Link>
              </div>
            </nav>

            {/* Drawer Footer CTAs */}
            <div className="p-4 border-t border-stone-100 bg-stone-50">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+12193540720"
                  className="btn btn-secondary justify-center text-sm min-h-[48px]"
                >
                  <Icon name="phone" size={18} className="mr-2" /> Call Now
                </a>
                <Link
                  to="/contact"
                  className="btn btn-primary justify-center text-sm min-h-[48px]"
                  onClick={() => setIsOpen(false)}
                >
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
