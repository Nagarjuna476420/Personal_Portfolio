import React, { useState } from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { SectionContainer } from '../../layout/SectionContainer/SectionContainer';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Button } from '../../common/Button/Button';
import { Toast } from '../../common/Toast/Toast';
import { Mail, Phone, MapPin, Send, Loader2, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear inline error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setToast({
        type: 'error',
        message: 'Please review and correct the errors in the form.'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate graceful asynchronous sending and mail client trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        type: 'success',
        message: 'Your email client is opening with your message details!'
      });

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name.trim()}`
      )}&body=${encodeURIComponent(
        `${formData.message.trim()}\n\nFrom: ${formData.name.trim()} (${formData.email.trim()})`
      )}`;

      window.location.href = mailtoUrl;

      // Reset form on submission
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <SectionContainer id="contact" ariaLabel="Contact Nagarjuna">
      <SectionHeading
        tag="Get in Touch"
        title="Let's build something"
        gradientText="meaningful."
        subtitle="Have a full stack opportunity, product architecture question, or want to collaborate? I would love to hear from you."
      />

      <div className="contact-grid-container">
        {/* Direct Contact Links */}
        <div className="contact-links-column">
          <div className="contact-direct-card glass-panel">
            <h3 className="contact-column-title">Direct Channels</h3>
            <p className="muted">Reach out directly via email, phone, or schedule a technical discussion.</p>

            <div className="contact-methods-list">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-channel-item"
              >
                <div className="channel-icon-pill">
                  <Mail size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-label muted">Email Address</span>
                  <span className="channel-value">{personalInfo.email}</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="contact-channel-item"
              >
                <div className="channel-icon-pill">
                  <Phone size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-label muted">Mobile / WhatsApp</span>
                  <span className="channel-value">{personalInfo.phone}</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              <div className="contact-channel-item no-hover">
                <div className="channel-icon-pill">
                  <MapPin size={18} />
                </div>
                <div className="channel-info">
                  <span className="channel-label muted">Location</span>
                  <span className="channel-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Error Handling */}
        <div className="contact-form-column">
          <form
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="contact-column-title">Send a Message</h3>

            {/* Name Input */}
            <div className="form-field-group">
              <label htmlFor="contact-name" className="form-field-label">
                Your Name <span className="required-star">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Satya Nadella"
                className={`form-input ${errors.name ? 'input-has-error' : ''}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <span id="name-error" className="form-field-error">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="form-field-group">
              <label htmlFor="contact-email" className="form-field-label">
                Your Email <span className="required-star">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@company.com"
                className={`form-input ${errors.email ? 'input-has-error' : ''}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <span id="email-error" className="form-field-error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="form-field-group">
              <label htmlFor="contact-message" className="form-field-label">
                Your Message <span className="required-star">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your product, project, or open role..."
                rows={5}
                className={`form-textarea ${errors.message ? 'input-has-error' : ''}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <span id="message-error" className="form-field-error">
                  {errors.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </SectionContainer>
  );
}
