import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Icon, type IconName } from '../components/Icons';
import { FadeInOnScroll } from '../components/Animations';
import treeServiceBg from '../assets/images/lumbrr/tree_service_hero_ai.png';

export function TreeServicePartners() {
  const steps = [
    {
      num: 1,
      title: 'Call & Describe',
      desc: 'Tell us the tree location, species, and approximate size.',
    },
    {
      num: 2,
      title: 'Get Referrals',
      desc: 'We share referral options for licensed, insured local crews.',
    },
    {
      num: 3,
      title: 'Hire Directly',
      desc: 'You contract directly with the tree service company.',
    },
    {
      num: 4,
      title: 'We Pick Up Logs',
      desc: 'After the tree is down, we check if the logs qualify for our free pickup service.',
    },
  ];

  const tips: { icon: IconName; title: string; text: string }[] = [
    { icon: 'quote', title: 'Check for rules first', text: 'Your city or neighborhood association might need to approve the tree removal. Check with them before you start.' },
    { icon: 'shield', title: 'Make sure they are licensed', text: 'Ask the tree company for proof of their license and insurance before they start any work.' },
    { icon: 'lumber', title: 'Separate the logs by type', text: 'If you can, keep oak with oak and walnut with walnut. This helps us figure out what we can use.' },
    { icon: 'truck', title: 'Leave room for our truck', text: 'We need a clear path from the street to the logs so our log truck can get in and out safely.' },
  ];

  return (
    <div>
      <SEO
        title="Tree Service Partners | Premier Lumber Co"
        description="Need tree removal before log pickup? We can refer you to independent licensed tree service partners in Gary and Northwest Indiana."
        path="/tree-service-partners"
      />
      <PageHeader
        title="Tree Service Partners"
        subtitle="Need a tree removed first? We can connect you with independent licensed crews."
        bgImage={treeServiceBg}
      />

      {/* Important Notice */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <FadeInOnScroll>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200/60 p-6 md:p-10 mb-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="shield" size={22} className="text-primary" />
                </div>
                <h2 className="font-extrabold text-xl md:text-2xl">Important Notice</h2>
              </div>
              <div className="space-y-4">
                {[
                  'Premier Lumber picks up qualifying logs after a tree is already down and accessible.',
                  'We do not provide tree cutting, pruning, stump grinding, or tree removal services.',
                  'Any tree service work is handled by independent licensed and insured partners.',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-4 border border-orange-100/50">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" size={14} className="text-success" />
                    </div>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* How Referrals Work — Numbered Steps */}
          <FadeInOnScroll delay={100}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="quote" size={22} className="text-white" />
                </div>
                <h2 className="font-extrabold text-xl md:text-2xl">How Referrals Work</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="group relative bg-white rounded-2xl border border-stone-200 p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Step Number */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
                        <span className="text-white font-extrabold text-lg">{step.num}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg text-charcoal mb-1">{step.title}</h3>
                        <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    {/* Connector line (only between 1→2, 3→4 on desktop) */}
                    {i % 2 === 0 && i < steps.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 -right-3 md:-right-3 w-6 h-[2px] bg-stone-200 -translate-y-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* Before You Schedule — Tips */}
          <FadeInOnScroll delay={200}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center">
                  <Icon name="check" size={22} className="text-white" />
                </div>
                <h2 className="font-extrabold text-xl md:text-2xl">Before You Schedule</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-stone-50 rounded-xl border border-stone-100 p-5 hover:bg-white hover:border-stone-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={tip.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal text-sm md:text-base mb-1">{tip.title}</p>
                      <p className="text-sm text-stone-500 leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* CTA Section */}
          <FadeInOnScroll delay={300}>
            <div className="bg-gradient-to-br from-charcoal to-dark-soft rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Icon name="phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-extrabold text-2xl md:text-3xl mb-3 text-white">Need a Referral?</h3>
              <p className="text-stone-100 mb-8 max-w-md mx-auto leading-relaxed">
                Call us for current partner options in Gary and Northwest Indiana. We'll point you in the right direction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+12193540720" className="btn btn-primary text-lg">
                  <Icon name="phone" size={20} className="mr-2" /> (219) 354-0720
                </a>
                <Link to="/log-pickup" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg">
                  ← Back to Log Pickup
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
