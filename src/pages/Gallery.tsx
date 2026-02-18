import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import heroImage from '../assets/images/lumbrr/20260119_102704.opt.webp';
import palletImage from '../assets/images/lumbrr/Pallets.opt.webp';
import firewoodImage from '../assets/images/lumbrr/IMG-20260202-WA0004.jpg';
import sawdustImage from '../assets/images/lumbrr/sawdust-shovel.webp';
import logImage from '../assets/images/lumbrr/IMG-20260204-WA0001.jpg';
import customLumberImage from '../assets/images/lumbrr/20260119_103036.opt.webp';

const images = [
  { src: heroImage, alt: 'Premier Lumber yard operations', title: 'Yard Overview' },
  { src: palletImage, alt: 'Pallet inventory at Premier Lumber', title: 'Pallet Production' },
  { src: firewoodImage, alt: 'Seasoned firewood inventory', title: 'Firewood' },
  { src: sawdustImage, alt: 'Bulk sawdust and shavings', title: 'Sawdust' },
  { src: logImage, alt: 'Log pickup and processing operations', title: 'Log Operations' },
  { src: customLumberImage, alt: 'Custom lumber milling and cuts', title: 'Custom Lumber' },
] as const;

export function Gallery() {
  return (
    <div>
      <SEO 
        title="Photo Gallery"
        description="See real photos from Premier Lumber Co. Our yard, deliveries, firewood, pallets, and sawmill operations in East Chicago, Indiana."
        path="/gallery"
      />
      <PageHeader 
        title="Gallery" 
        subtitle="Real photos from our yard, deliveries, and local projects."
        bgImage={heroImage}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((img) => (
              <div key={img.title} className="group relative overflow-hidden rounded-xl shadow-lg bg-stone-100">
                <div className="aspect-[4/3]">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-lg font-bold">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">See Something You Like?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether it's custom lumber, pallets, or firewood, we can have it ready for you this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-white text-lg">
              Get A Quote →
            </Link>
            <a href="tel:+12193982010" className="btn bg-primary-darker text-white border-2 border-primary-dark text-lg" style={{ boxShadow: '0 4px 0 0 #9a3412' }}>
              <Icon name="phone" size={20} className="mr-2" /> (219) 398-2010
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
