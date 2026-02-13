import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div>
      <SEO 
        title="About Us"
        description="Premier Lumber Co has served Gary and Northwest Indiana for over 30 years. Family-owned, locally focused. Quality pallets, firewood, sawdust, and lumber."
        path="/about"
      />
      <PageHeader 
        title="About Premier Lumber" 
        subtitle="Family-owned and serving Northwest Indiana for over 30 years."
      />

      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg mx-auto text-stone-600">
            <p>
              Since 1994, Premier Lumber Co. has been the trusted local source for high-quality wood products in Gary, Indiana and the surrounding region.
              We are a family-owned and operated business dedicated to providing personalized service that big box stores simply can't match.
            </p>
            <h3>Our Mission</h3>
            <p>
              To supply our community with sustainable, high-quality lumber, firewood, and pallet solutions while offering fair prices and exceptional reliability.
            </p>
            <h3>Why Choose Us?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <Icon name="location" className="text-primary shrink-0 mt-0.5" size={22} />
              <div>
                <span className="font-bold block text-charcoal text-sm">Local Expertise</span>
                <span className="text-xs text-stone-500">We know the region and its needs.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <Icon name="truck" className="text-primary shrink-0 mt-0.5" size={22} />
              <div>
                <span className="font-bold block text-charcoal text-sm">Fast Delivery</span>
                <span className="text-xs text-stone-500">Same or next-day delivery available.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <Icon name="check" className="text-primary shrink-0 mt-0.5" size={22} />
              <div>
                <span className="font-bold block text-charcoal text-sm">Fair Pricing</span>
                <span className="text-xs text-stone-500">Competitive rates on all products.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <Icon name="saw" className="text-primary shrink-0 mt-0.5" size={22} />
              <div>
                <span className="font-bold block text-charcoal text-sm">Sustainable Practices</span>
                <span className="text-xs text-stone-500">We recycle waste into useful products.</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
