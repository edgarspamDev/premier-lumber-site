export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-stone prose-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-8">Privacy Policy</h1>
      <p className="text-stone-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">1. Introduction</h2>
        <p>Premier Lumber Co ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (premierlumber.com) and tell you about your privacy rights and how the law protects you.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Identity Data:</strong> includes first name, last name, title.</li>
          <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>To fulfill your order or service request (e.g., Log Pickup, Firewood Delivery).</li>
          <li>To respond to your inquiries via our contact form.</li>
          <li>To improve our website, products/services, marketing or customer relationships.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">4. Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">5. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <div className="mt-4 bg-stone-100 p-6 rounded-lg">
          <p className="font-bold">Premier Lumber Co</p>
          <p>724 Chicago Ave</p>
          <p>East Chicago, IN 46312</p>
          <p>Phone: (219) 398-2010</p>
        </div>
      </section>
    </div>
  );
}
