import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Lumber for Your Projects
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Quality materials from trusted lumber supplier serving contractors and builders across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition inline-block"
            >
              Request a Quote
            </Link>
            <Link
              to="/products"
              className="px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition inline-block"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Premier - Trust Strip */}
      <section className="bg-slate-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
              <p className="text-gray-700 font-semibold">Years in Business</p>
              <p className="text-gray-600 text-sm">Trusted by contractors region-wide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <p className="text-gray-700 font-semibold">On-Time Delivery</p>
              <p className="text-gray-600 text-sm">Reliable, predictable service</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">Premium</div>
              <p className="text-gray-700 font-semibold">Grading Standards</p>
              <p className="text-gray-600 text-sm">SPF, #2&Btr, and specialty cuts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dimensional Lumber',
                description: 'Standard and specialty cuts for framing and construction',
                icon: '📦',
              },
              {
                name: 'Pressure Treated',
                description: 'Weather-resistant lumber for decks, fences, and outdoor projects',
                icon: '🛡️',
              },
              {
                name: 'Specialty Grades',
                description: 'Premium grades for finishing and visible applications',
                icon: '⭐',
              },
            ].map((product) => (
              <div key={product.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to="/products"
                  className="text-amber-600 font-semibold hover:text-amber-700 transition"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Commercial Office Complex',
                location: 'Portland, OR',
                materials: 'Dimensional lumber, SPF framing',
                outcome: '12,000 bf delivered on schedule',
              },
              {
                title: 'Multi-Unit Residential',
                location: 'Eugene, OR',
                materials: '#2&Btr lumber, pressure-treated',
                outcome: '50+ homes completed, zero delays',
              },
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">📍 {project.location}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Materials:</strong> {project.materials}</p>
                  <p><strong>Outcome:</strong> {project.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Get a custom quote in minutes or call us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition inline-block"
            >
              Request Quote
            </Link>
            <a
              href="tel:+15551234567"
              className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition inline-block"
            >
              Call +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
