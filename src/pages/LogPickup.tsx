import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import { categorizedPhotos } from '../data/categorized-photos';
import logHeroImage from '../assets/images/lumbrr/logpick.webp';

export function LogPickup() {
  // Use the first approved log image as the main visual
  const mainImage = categorizedPhotos.logPickup[0];

  return (
    <div>
      <SEO 
        title="Free Log Pickup | Tree Log Recycling Indiana"
        description="We pick up qualifying hardwood logs at no cost in Gary, East Chicago & NW Indiana. Walnut, oak, cherry, ash, maple. 14&quot;+ diameter. Call (219) 354-0720. Sustainable wood recycling."
        path="/log-pickup"
        service={{
          name: "Free Hardwood Log Pickup",
          description: "We pick up qualifying hardwood logs (Walnut, Oak, Cherry, Ash) at no cost. Sustainable wood recycling in NW Indiana.",
          image: logHeroImage,
          areaServed: ["Gary", "East Chicago", "Hammond", "Merrillville", "Hobart", "Lake Station"]
        }}
        breadcrumb={[
          { name: "Home", item: "/" },
          { name: "Log Pickup", item: "/log-pickup" }
        ]}
      />
      <PageHeader 
        title="Free Log Pickup" 
        subtitle="Your logs, our truck. Zero cost if they qualify."
        bgImage={logHeroImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12193540720" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Check Eligibility</p>
                <p className="text-sm text-white/80">(219) 354-0720</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={mainImage?.src} 
                  alt={mainImage?.alt || "Log pickup service"} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="font-extrabold mb-4">Stop Paying to Get Rid of Good Wood</h2>
              <p className="text-stone-600 text-base md:text-lg mb-8 leading-relaxed">
                If your hardwood logs meet our requirements, we'll send our truck to pick them up at no cost to you. We repurpose these logs into lumber, keeping them out of landfills and providing value back to the community.
              </p>

              {/* What We Accept */}
              <div className="mb-8">
                <h3 className="font-bold mb-3 text-base text-charcoal">All Wood Types Accepted</h3>
                <p className="text-stone-600 text-sm mb-3">
                  We accept any type of wood — hardwood, softwood, it doesn't matter. Bring us what you've got.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Walnut', 'Oak', 'Cherry', 'Ash', 'Maple', 'Hickory', 'Pine', 'Elm', 'Poplar', 'Cottonwood'].map((species) => (
                    <span key={species} className="bg-orange-50 text-charcoal px-3 py-1.5 rounded-lg text-sm font-bold border border-orange-100 shadow-sm">
                      {species}
                    </span>
                  ))}
                  <span className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm">
                    + Any Other Species
                  </span>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-brand-cream rounded-xl p-6 border border-orange-100 mb-8">
                <h3 className="font-bold mb-4 text-base text-charcoal flex items-center gap-2">
                    <Icon name="lumber" size={18} className="text-primary"/>
                    Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-stone-700">
                    <div className="mt-0.5 text-green-600">
                         <Icon name="check" size={18} />
                    </div>
                    <span><strong>14"+ diameter</strong> at narrowest point</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-700">
                    <div className="mt-0.5 text-green-600">
                         <Icon name="check" size={18} />
                    </div>
                    <span><strong>8'+ length</strong> minimum</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-700">
                    <div className="mt-0.5 text-green-600">
                         <Icon name="check" size={18} />
                    </div>
                    <span><strong>Accessible</strong> by log truck (clear path from road)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 mb-8">
                <p className="text-sm text-stone-700 mb-2">
                  <strong>Liability Waiver:</strong> Premier Lumber is not responsible for any property damage (lawns, driveways, etc.) during log retrieval operations. Homeowner assumes all risks associated with heavy truck access.
                </p>
                <div className="h-px bg-stone-200 my-3"></div>
                <p className="text-sm text-stone-700 mb-2">
                  Need a tree cut down first?
                </p>
                <p className="text-xs text-stone-500 mb-3">
                  Premier Lumber does not perform tree removal services. We can refer you to independent licensed tree service partners.
                </p>
                <Link to="/tree-service-partners" className="text-sm font-bold text-primary hover:underline">
                  View Tree Service Partners →
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary flex-1">
                    Schedule FREE Pickup
                </Link>
                <a href="tel:+12193540720" className="btn btn-secondary flex-1">
                  <Icon name="phone" size={18} className="mr-2" /> Call to Confirm
                </a>
              </div>
            </div>
          </div>

{/* Gallery Section - Hidden per user request (no photos yet) */}
          {/* 
          {categorizedPhotos.logPickup.length > 1 && (
             ...
          )} 
          */}
        </div>
      </section>
    </div>
  );
}
