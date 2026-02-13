export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-stone prose-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-8">Terms of Service</h1>
      <p className="text-stone-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">2. Services</h2>
        <p>Premier Lumber Co provides wood products (pallets, firewood, sawdust, lumber) and services (log pickup). We reserve the right to modify or discontinue any product or service without notice at any time. Prices for our products are subject to change without notice.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">3. Log Pickup Protocol</h2>
        <p>For our free log pickup service, we reserve the right to refuse logs that do not meet our quality standards (e.g., embedded metal, rot, insufficient diameter). Site access must be safe for our equipment. We are not liable for minor ground disturbance during normal operation of heavy machinery.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">4. Limitation of Liability</h2>
        <p>In no event shall Premier Lumber Co, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">5. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the State of Indiana, United States, without regard to its conflict of law provisions.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">6. Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at:</p>
         <div className="mt-4 bg-stone-100 p-6 rounded-lg">
          <p className="font-bold">Premier Lumber Co</p>
          <p>6717 Atcheson Dr</p>
          <p>Gary, IN 46403</p>
          <p>Phone: (219) 938-6275</p>
        </div>
      </section>
    </div>
  );
}
