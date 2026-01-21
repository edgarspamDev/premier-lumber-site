import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">P</span>
            </div>
            <span className="hidden sm:inline text-lg font-bold">Premier Lumber</span>
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-1 sm:space-x-2">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium bg-amber-500 text-slate-900 hover:bg-amber-600 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
