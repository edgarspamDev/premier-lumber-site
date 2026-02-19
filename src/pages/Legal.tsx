import { PageHeader } from "../components/PageHeader";

export function Privacy() {
  return (
    <div>
      <PageHeader title="Privacy Policy" subtitle="Last Updated: February 2026" />
      <section className="section bg-white text-stone-700">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-6">We only collect information you voluntarily provide via our contact forms (Name, Email, Phone, Project Details) for the purpose of providing quotes and services.</p>
          
          <h2 className="text-2xl font-bold mb-4">2. How We Use It</h2>
          <p className="mb-6">We use your data to communicate with you about your orders, quotes, or scheduled pickups. We do not sell your data to third parties.</p>
          
          <h2 className="text-2xl font-bold mb-4">3. Contact Us</h2>
          <p>If you have questions about your data, please contact us at (219) 354-0720.</p>
        </div>
      </section>
    </div>
  );
}

export function Terms() {
  return (
    <div>
      <PageHeader title="Terms & Conditions" subtitle="Last Updated: February 2026" />
      <section className="section bg-white text-stone-700">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">1. Product Availability</h2>
          <p className="mb-6">All lumber, firewood, and pallet inventory is subject to availability. Prices are subject to change without notice due to market conditions.</p>
          
          <h2 className="text-2xl font-bold mb-4">2. Delivery</h2>
          <p className="mb-6">Delivery times are estimates and not guaranteed. Site access is the responsibility of the customer.</p>
          
          <h2 className="text-2xl font-bold mb-4">3. Log Pickup</h2>
          <p className="mb-3">"Free Log Pickup" is a service offered at our discretion. We reserve the right to refuse logs based on species, quality, location, or safety concerns.</p>
          <p className="mb-6">Premier Lumber does not provide tree cutting or tree removal services. Any referral to a tree company is an independent third-party relationship between you and that provider.</p>
        </div>
      </section>
    </div>
  );
}
