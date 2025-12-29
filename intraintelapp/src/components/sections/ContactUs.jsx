import React, { useState } from "react";
import { submitContactForm } from "../../services/contact.service";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Lock, Sparkles, Calendar } from "lucide-react";
import { contactData } from "../../data/intraintel";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { CALENDLY_LINK } from "../../utils/constants";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Get contact info from centralized data
  const contactInfo = contactData.info;

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      setError(null);
      await submitContactForm(formData);

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'An error occurred. Please try again.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-50 py-20 lg:py-20 px-6 lg:px-8 overflow-hidden font-sans"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get in{' '}
            <span className="section-title-highlight">
              Touch
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Ready to transform your enterprise search? Our team is here to help you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-transparent rounded-[2rem] p-6 md:p-12 "
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
              <p className="text-slate-500">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="bg-slate-50 border-slate-200 focus:bg-white"
                />
                <Input
                  label="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="bg-slate-50 border-slate-200 focus:bg-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Work email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="bg-slate-50 border-slate-200 focus:bg-white"
                />
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-slate-50 border-slate-200 focus:bg-white"
                />
              </div>

              <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                required
                className="bg-slate-50 border-slate-200 focus:bg-white"
              />

              <Input
                label="Message"
                name="message"
                type="textarea"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="bg-slate-50 border-slate-200 focus:bg-white"
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-blue-500/20"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative rounded-[2rem] overflow-hidden p-8 md:p-12 h-full min-h-auto lg:min-h-[600px] flex flex-col justify-between"
          >
            {/* Stats Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,234,254,0.8),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(254,240,242,0.6),transparent_70%)]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Contact Information</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">
                Connect with our enterprise team to discuss your specific needs and requirements.
              </p>

              <div className="space-y-8">
                {contactInfo.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div key={i} className="flex gap-5 items-start group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          {c.label}
                        </p>
                        <p className="text-lg font-semibold text-slate-900 leading-snug">
                          {c.value}
                        </p>
                        {c.description && (
                          <p className="text-sm text-slate-500 mt-1">
                            {c.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-slate-200/60">
              <div className="flex flex-col gap-6">
                {/* Request Demo Button */}
                <Button
                  onClick={() => window.open(CALENDLY_LINK, '_blank')}
                  className="w-full justify-center text-center shadow-lg shadow-blue-500/20"
                  variant="primary"
                >
                  <span className="flex items-center gap-2">
                    Request a Demo <Calendar className="w-4 h-4" />
                  </span>
                </Button>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white border border-blue-100 shadow-sm">
                    <Lock className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      Enterprise Grade Security
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Your data is encrypted and secure. We adhere to strict privacy policies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Notification */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 right-8 z-50 bg-white rounded-xl shadow-2xl border border-green-100 p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Message Sent!</h4>
                <p className="text-sm text-slate-500">We'll get back to you soon.</p>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 right-8 z-50 bg-white rounded-xl shadow-2xl border border-red-100 p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Error</h4>
                <p className="text-sm text-slate-500">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
