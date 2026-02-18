import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Icon } from '../components/Icons';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      
      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-primary animate-bounce-subtle">
        <Icon name="search" size={48} />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
        Wood You Look <br className="sm:hidden" /> At That?
      </h1>
      
      <p className="text-lg text-stone-600 max-w-md mb-8">
        We can't seem to find the page you're looking for. It might have been sawed off, moved, or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn btn-primary">
          <Icon name="home" className="mr-2" size={20} />
          Back to Home
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
