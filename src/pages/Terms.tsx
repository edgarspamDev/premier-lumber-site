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
        <h2 className="text-2xl font-bold text-charcoal mb-4">4. Waiver of Liability</h2>
        <p>Premier Lumber Co is not responsible for any damages, injuries, or losses arising from the use of our products or services, including but not limited to damage during delivery, loading, unloading, or log pickup operations. All products are sold "as-is" and customers assume full responsibility upon receipt. By purchasing products or using our services, you agree to hold Premier Lumber Co harmless from any claims, damages, or liabilities.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">5. Limitation of Liability</h2>
        <p>In no event shall Premier Lumber Co, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website or our products and services, whether such liability is under contract, tort or otherwise. Premier Lumber Co shall not be held liable for any indirect, consequential, or incidental damages.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">6. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the State of Indiana, United States, without regard to its conflict of law provisions.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">7. Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at:</p>
         <div className="mt-4 bg-stone-100 p-6 rounded-lg">
          <p className="font-bold">Premier Lumber Co</p>
          <p>724 Chicago Ave</p>
          <p>East Chicago, IN 46312</p>
          <p>Phone: (219) 354-0720</p>
        </div>
      </section>
    </div>
  );
}
