import { useState } from 'react';
import { validateRFQForm, sanitizeText } from '../utils/validation';
import { submitForm } from '../utils/formSubmission';
import { FormErrors } from '../utils/validation';

interface RFQFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  productNeeds: string;
  timeline: string;
  projectType: string;
  comments: string;
}

export function RFQForm() {
  const [formData, setFormData] = useState<RFQFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    productNeeds: '',
    timeline: 'within-1-month',
    projectType: 'new-construction',
    comments: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setSubmitMessage('');

    // Validate form
    const newErrors = validateRFQForm({
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      productNeeds: formData.productNeeds,
      timeline: formData.timeline,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      setSubmitMessage('Please correct the errors below and try again.');
      return;
    }

    setIsSubmitting(true);

    // Sanitize all text fields
    const sanitizedData = {
      name: sanitizeText(formData.name),
      company: sanitizeText(formData.company),
      phone: sanitizeText(formData.phone),
      email: sanitizeText(formData.email),
      location: sanitizeText(formData.location),
      productNeeds: sanitizeText(formData.productNeeds),
      timeline: sanitizeText(formData.timeline),
      projectType: sanitizeText(formData.projectType),
      comments: sanitizeText(formData.comments),
    };

    // Submit form
    const response = await submitForm(sanitizedData, {
      endpoint: '/api/rfq', // This will be handled by backend
      method: 'POST',
      timeout: 10000,
    });

    setIsSubmitting(false);

    if (response.success) {
      setSubmitStatus('success');
      setSubmitMessage(response.message);
      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        location: '',
        productNeeds: '',
        timeline: 'within-1-month',
        projectType: 'new-construction',
        comments: '',
      });
      setErrors({});
    } else {
      setSubmitStatus('error');
      setSubmitMessage(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 font-medium">{submitMessage}</p>
          <p className="text-green-700 text-sm mt-2">
            Need immediate assistance? Call us at <a href="tel:+15551234567" className="font-semibold">+1 (555) 123-4567</a>
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium">{submitMessage}</p>
          <p className="text-red-700 text-sm mt-2">
            Or reach out directly at <a href="tel:+15551234567" className="font-semibold">+1 (555) 123-4567</a>
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          minLength={2}
          maxLength={100}
          placeholder="John Smith"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          minLength={2}
          maxLength={150}
          placeholder="ABC Construction"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-red-600">
            {errors.company}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          maxLength={20}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          maxLength={254}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Project Location (City/Region) <span className="text-red-500">*</span>
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Portland, OR"
          maxLength={100}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? 'location-error' : undefined}
        />
        {errors.location && (
          <p id="location-error" className="mt-1 text-sm text-red-600">
            {errors.location}
          </p>
        )}
      </div>

      {/* Product Needs */}
      <div>
        <label htmlFor="productNeeds" className="block text-sm font-medium text-gray-700 mb-2">
          Product Needs <span className="text-red-500">*</span>
        </label>
        <textarea
          id="productNeeds"
          name="productNeeds"
          value={formData.productNeeds}
          onChange={handleChange}
          placeholder="Tell us about the lumber or materials you need..."
          maxLength={500}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
          aria-invalid={!!errors.productNeeds}
          aria-describedby={errors.productNeeds ? 'productNeeds-error' : undefined}
        />
        <p className="mt-1 text-xs text-gray-500">
          {formData.productNeeds.length}/500 characters
        </p>
        {errors.productNeeds && (
          <p id="productNeeds-error" className="mt-1 text-sm text-red-600">
            {errors.productNeeds}
          </p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
        >
          <option value="new-construction">New Construction</option>
          <option value="remodel">Remodel/Renovation</option>
          <option value="deck-fence">Deck/Fence</option>
          <option value="commercial">Commercial</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
          Project Timeline <span className="text-red-500">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition min-h-[44px]"
          aria-invalid={!!errors.timeline}
          aria-describedby={errors.timeline ? 'timeline-error' : undefined}
        >
          <option value="within-1-month">Within 1 Month</option>
          <option value="1-3-months">1-3 Months</option>
          <option value="3-6-months">3-6 Months</option>
          <option value="6-plus-months">6+ Months</option>
        </select>
        {errors.timeline && (
          <p id="timeline-error" className="mt-1 text-sm text-red-600">
            {errors.timeline}
          </p>
        )}
      </div>

      {/* Additional Comments */}
      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Any additional details we should know?"
          maxLength={500}
          rows={2}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
        />
        <p className="mt-1 text-xs text-gray-500">
          {formData.comments.length}/500 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition min-h-[44px] flex items-center justify-center"
      >
        {isSubmitting ? 'Submitting...' : 'Request Quote'}
      </button>

      <p className="text-xs text-gray-600 text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
