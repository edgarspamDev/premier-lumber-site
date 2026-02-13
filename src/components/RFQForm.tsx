import { useState, useRef, useEffect } from 'react';
import { validateRFQForm, sanitizeText, type FormErrors } from '../utils/validation';
import { submitForm } from '../utils/formSubmission';
import { Icon } from './Icons';

interface RFQFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

export function RFQForm() {
  // Anti-bot: track when form loaded (bots fill in <3s)
  const loadTime = useRef(Math.floor(Date.now() / 1000));
  useEffect(() => {
    loadTime.current = Math.floor(Date.now() / 1000);
  }, []);

  const [formData, setFormData] = useState<RFQFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setSubmitMessage('');

    const newErrors = validateRFQForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const sanitizedData = {
      name: sanitizeText(formData.name),
      phone: sanitizeText(formData.phone),
      email: sanitizeText(formData.email),
      productNeeds: sanitizeText(formData.serviceType),
      comments: sanitizeText(formData.message),
      _ts: String(loadTime.current), // Anti-bot timestamp
    };

    const response = await submitForm(sanitizedData, {
      endpoint: '/mail.php',
      method: 'POST',
      timeout: 10000,
    });

    setIsSubmitting(false);

    if (response.success) {
      setSubmitStatus('success');
      setSubmitMessage(response.message);
      setFormData({ name: '', phone: '', email: '', serviceType: '', message: '' });
      setErrors({});
    } else {
      setSubmitStatus('error');
      setSubmitMessage(response.message);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="check" size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Quote Request Sent!</h3>
        <p className="text-stone-600 mb-4">{submitMessage}</p>
        <p className="text-sm text-stone-500">
          Need faster help? Call <a href="tel:+12199386275" className="font-bold text-primary">(219) 938-6275</a>
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="space-y-5 scroll-mt-28 md:scroll-mt-32"
      noValidate
      method="post"
      action="/mail.php"
    >
      {/* Helper text */}
      <p className="text-sm text-stone-500 text-center font-medium">Get a quote in 2 minutes</p>

      {/* Error Banner */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-800 font-medium text-sm">{submitMessage}</p>
          <p className="text-red-700 text-xs mt-1">
            Or call us at <a href="tel:+12199386275" className="font-bold">(219) 938-6275</a>
          </p>
        </div>
      )}

      {/* Name (Required) */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-1.5">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          autoCapitalize="words"
          autoCorrect="off"
          spellCheck={false}
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          maxLength={100}
          required
          className={`w-full px-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-base min-h-[48px] ${
            errors.name ? 'border-red-400 bg-red-50' : 'border-stone-300'
          }`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Phone (Required) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          value={formData.phone}
          onChange={handleChange}
          placeholder="(219) 555-1234"
          maxLength={20}
          pattern="[0-9()+\\-\\s]{7,20}"
          required
          className={`w-full px-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-base min-h-[48px] ${
            errors.phone ? 'border-red-400 bg-red-50' : 'border-stone-300'
          }`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
        )}
      </div>

      {/* Email (Required) */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          maxLength={254}
          required
          className={`w-full px-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-base min-h-[48px] ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-stone-300'
          }`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
        )}
      </div>

      {/* Service Type (Optional) */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-bold text-stone-700 mb-1.5">
          Service Needed <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3.5 border border-stone-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-base min-h-[48px] bg-white"
        >
          <option value="">Select a service...</option>
          <option value="pallets">Pallets (Buy or Sell)</option>
          <option value="firewood">Firewood</option>
          <option value="sawdust">Sawdust / Shavings</option>
          <option value="custom-lumber">Custom Lumber / Milling</option>
          <option value="log-pickup">Free Log Pickup</option>
          <option value="delivery">Delivery</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message (Required) */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-1.5">
          What do you need? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for (quantity, dimensions, service, etc.)"
          maxLength={500}
          rows={4}
          autoCapitalize="sentences"
          autoCorrect="on"
          spellCheck={true}
          required
          className={`w-full px-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-base ${
            errors.message ? 'border-red-400 bg-red-50' : 'border-stone-300'
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
        )}
      </div>

      {/* Honeypot (hidden from humans) */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all min-h-[52px] flex items-center justify-center shadow-lg shadow-orange-500/20"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Get Free Quote'
        )}
      </button>

      <p className="text-xs text-stone-400 text-center">
        We respect your privacy. Info is only used to respond to your request.
      </p>
    </form>
  );
}
