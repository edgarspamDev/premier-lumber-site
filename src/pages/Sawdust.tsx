import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../components/Icons';
import { SEO } from '../components/SEO';
import { categorizedPhotos } from '../data/categorized-photos';
import sawdustHeroImage from '../assets/images/lumbrr/20260119_103929.jpg';

export function Sawdust() {
  const [pieces, setPieces] = useState<string>('1');
  const [thick, setThick] = useState<string>('2');
  const [width, setWidth] = useState<string>('6');
  const [length, setLength] = useState<string>('10');
  const p = parseFloat(pieces) || 0;
  const t = parseFloat(thick) || 0;
  const w = parseFloat(width) || 0;
  const l = parseFloat(length) || 0;
  const boardFeet = ((p * t * w * l) / 12).toFixed(2);

  const allPhotos = [...categorizedPhotos.sawdust, ...categorizedPhotos.lumber];

  return (
    <div>
      <SEO 
        title="Bulk Sawdust & Shavings"
        description="Buy bulk sawdust and shavings for animal bedding, landscaping, and industrial use. Available by truckload. Premier Lumber Co, Gary, IN. Call (219) 938-6275."
        path="/sawdust"
      />
      <PageHeader 
        title="Sawdust & Custom Lumber" 
        subtitle="Bulk materials for farms, landscaping, and construction."
        bgImage={sawdustHeroImage}
      />

      <section className="section bg-white">
        <div className="container-custom">

          {/* Tap to Call - Mobile */}
          <a href="tel:+12199386275" className="tap-to-call mb-8">
            <div className="flex items-center gap-3">
              <Icon name="phone" size={22} />
              <div>
                <p className="font-bold text-base">Call For Pricing</p>
                <p className="text-sm text-white/80">(219) 938-6275</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="font-extrabold mb-6">Bulk Sawdust & Shavings</h2>
              <p className="text-stone-600 text-base md:text-lg mb-6">
                We produce high volumes of clean sawdust and shavings from our milling operations. Ideal for:
              </p>

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Animal Bedding</span>
                    <span className="text-xs text-stone-500">Horses, livestock, poultry</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Landscaping</span>
                    <span className="text-xs text-stone-500">Moisture retention & mulch</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Industrial</span>
                    <span className="text-xs text-stone-500">Spill cleanup & manufacturing</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="truck" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Bulk Available</span>
                    <span className="text-xs text-stone-500">Truckload or semi-load</span>
                  </div>
                </div>
              </div>

              <h2 className="font-extrabold mb-6">Rough-Sawn Lumber</h2>
              <p className="text-stone-600 text-base md:text-lg mb-6">
                Need specific dimensions you can't find at the big box store? We mill custom beams, boards, and timbers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="lumber" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Trailer Decking</span>
                    <span className="text-xs text-stone-500">Oak rough-cut decking</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="pallets" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Blocking & Dunnage</span>
                    <span className="text-xs text-stone-500">For shipping & logistics</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="saw" className="text-primary shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Fencing</span>
                    <span className="text-xs text-stone-500">Durable, locally sourced</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <Icon name="check" className="text-green-600 shrink-0 mt-0.5" size={22} />
                  <div>
                    <span className="font-bold block text-charcoal text-sm">Custom Sizes</span>
                    <span className="text-xs text-stone-500">Milled to your specs</span>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">Request Bulk Quote</Link>

              {/* Board Foot Calculator */}
              <div className="mt-10 bg-brand-cream rounded-2xl p-6 border border-orange-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Icon name="saw" size={22} />
                  </div>
                  <h3 className="font-bold text-lg">Board Foot Calculator</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Pieces</label>
                    <input 
                      type="number" 
                      value={pieces}
                      onChange={(e) => setPieces(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-xl focus:ring-primary focus:border-primary bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Length (ft)</label>
                    <input 
                      type="number" 
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-xl focus:ring-primary focus:border-primary bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Thickness (in)</label>
                    <input 
                      type="number" 
                      value={thick}
                      step="0.25"
                      onChange={(e) => setThick(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-xl focus:ring-primary focus:border-primary bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">Width (in)</label>
                    <input 
                      type="number" 
                      value={width}
                      step="0.25"
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-xl focus:ring-primary focus:border-primary bg-white"
                    />
                  </div>
                </div>
                <div className="text-center bg-primary/10 py-3 rounded-xl font-extrabold text-charcoal text-xl border border-primary/20">
                  {boardFeet} Board Feet
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={categorizedPhotos.sawdust[0]?.src} 
                    alt={categorizedPhotos.sawdust[0]?.alt || "Bulk sawdust at Premier Lumber"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-stone-500 text-sm">Bulk materials available for pickup or delivery.</p>

                <div className="grid grid-cols-2 gap-4">
                  {allPhotos.slice(1, 5).map((photo, index) => (
                    <div key={photo.src || index} className="aspect-square rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={photo.src} 
                        alt={photo.alt || "Sawdust and lumber materials"} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Gallery */}
          {allPhotos.length > 5 && (
            <div className="mt-12 md:mt-16 border-t border-stone-200 pt-10 md:pt-12">
              <h2 className="font-bold text-center mb-6 md:mb-8">Material Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {allPhotos.map((photo, index) => (
                  <div key={photo.src || index} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg bg-stone-100">
                    <img 
                      src={photo.src} 
                      alt={photo.alt || "Premier Lumber materials"} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">{photo.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
