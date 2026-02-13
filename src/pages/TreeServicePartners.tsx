import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Icon } from '../components/Icons';

export function TreeServicePartners() {
  return (
    <div>
      <SEO
        title="Tree Service Partners"
        description="Need tree removal before log pickup? We can refer you to independent licensed tree service partners in Gary and Northwest Indiana."
        path="/tree-service-partners"
      />
      <PageHeader
        title="Tree Service Partners"
        subtitle="Need a tree removed first? We can connect you with independent licensed crews."
      />

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-brand-cream rounded-2xl border border-orange-100 p-6 md:p-8 mb-8">
            <h2 className="font-extrabold mb-4">Important Notice</h2>
            <ul className="space-y-3 text-sm md:text-base text-stone-700">
              <li className="flex items-start gap-3">
                <Icon name="check" size={18} className="text-green-600 mt-0.5 shrink-0" />
                Premier Lumber picks up qualifying logs after a tree is already down and accessible.
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" size={18} className="text-green-600 mt-0.5 shrink-0" />
                We do not provide tree cutting, pruning, stump grinding, or tree removal services.
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" size={18} className="text-green-600 mt-0.5 shrink-0" />
                Any tree service work is handled by independent licensed and insured partners.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="card p-6">
              <h3 className="font-bold mb-3">How Referrals Work</h3>
              <ol className="space-y-2 text-sm text-stone-600">
                <li>1. Call us and describe the tree location and species.</li>
                <li>2. We share referral options for licensed local crews.</li>
                <li>3. You contract directly with the tree service company.</li>
                <li>4. After the tree is down, we evaluate log pickup eligibility.</li>
              </ol>
            </div>

            <div className="card p-6">
              <h3 className="font-bold mb-3">Before You Schedule</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>- Confirm city permits or HOA requirements if applicable.</li>
                <li>- Ask the tree service for license and insurance proof.</li>
                <li>- Keep logs separated by species when possible.</li>
                <li>- Keep a clear path for safe truck access.</li>
              </ul>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 md:p-8 text-center">
            <h3 className="font-bold mb-3">Need a Referral?</h3>
            <p className="text-stone-600 mb-6">
              Call us for current partner options in Gary and Northwest Indiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12199386275" className="btn btn-primary">
                <Icon name="phone" size={18} className="mr-2" /> (219) 938-6275
              </a>
              <Link to="/log-pickup" className="btn btn-secondary">
                Back to Log Pickup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
