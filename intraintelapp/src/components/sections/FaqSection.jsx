// FAQSectionPremium.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import { Helmet } from 'react-helmet-async'; // Import Helmet

const faqs = [
  {
    q: "What is IntraIntel.AI?",
    a: "IntraIntel.AI is an enterprise AI platform that enables you to run generative AI models on your data within your own security boundaries. Your data never leaves your infrastructure, ensuring complete data sovereignty and compliance."
  },
  {
    q: "How does IntraIntel.AI ensure data security?",
    a: "We operate entirely within your infrastructure. Your data stays in your cloud storage, and we never have external access. All processing happens within your security perimeter, with end-to-end encryption and full compliance with HIPAA, GDPR, and SOC 2 standards."
  },
  {
    q: "What cloud platforms do you support?",
    a: "IntraIntel.AI integrates seamlessly with all major cloud platforms including Google Drive, Dropbox, OneDrive, AWS S3, Azure Blob Storage, and more. We support multi-cloud environments for maximum flexibility."
  },
  {
    q: "Can I customize the AI models?",
    a: "Yes! You can create custom AI models trained on your specific data and use cases. You can also provide custom instructions to tailor responses to your organization's needs and industry requirements."
  },
  {
    q: "What kind of support do you offer?",
    a: "We offer comprehensive support including email support, priority support channels, and dedicated account managers for enterprise customers with 24/7 availability. All plans include extensive documentation and training resources."
  },
  {
    q: "Is there a free trial?",
    a: "Yes! We offer a 14-day free trial with full access to all features and no credit card required. You can explore the complete platform and see how IntraIntel.AI transforms your data into actionable insights."
  }
];

// Generate JSON-LD Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Motion variants
  const itemReveal = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };
  const chevronRotate = (isOpen) => ({ rotate: isOpen ? 90 : 0 });

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        /* fall back color while CSS variables load */
        background: "transparent"
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      {/* Palette + fonts scoped to this component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');

        :root {
          /* Primary */
          --brand-blue: #0D6EFD;     /* Primary Blue */
          --brand-blue-2: #1E90FF;   /* Alternate Primary */
          /* Backgrounds */
          --bg-cream: #FFF9F5;       /* Light Cream / Beige */
          --bg-soft-pink: #FFF0F0;   /* Soft Pink */
          --bg-light-blue: #F0F8FF;  /* Very pale sky blue */
          --bg-mint: #F0FFF4;
          --bg-lavender: #F5F0FF;
          /* Text */
          --text-main: #1A1A1A;      /* primary text */
          --text-medium: #6C757D;    /* secondary */
          --text-light: #ADB5BD;     /* tertiary */
          /* Accents */
          --accent-purple: #7C3AED;
          --accent-teal: #06B6D4;
          --accent-orange: #FF9E4A;
          /* Card surfaces & borders */
          --card-surface: #ffffff;
          --card-border: rgba(15,23,42,0.06);
          --card-hover-tint: rgba(124,58,237,0.04);
          /* CTA */
          --cta-bg: var(--brand-blue);
          --cta-bg-hover: #0b5fe0;
          --cta-text: #ffffff;
        }

        .faq-sans { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        .faq-head { font-family: "Playfair Display", Georgia, serif; }

        /* Reduced motion respect */
        @media (prefers-reduced-motion: reduce) {
          .faq-motion-safe { animation: none !important; transition: none !important; }
        }

        /* Section background (subtle layered) */
        .faq-bg-layer {
          background: transparent;
        }

        /* Card surface + interactive hover */
        .faq-card {
          background-color: var(--card-surface);
          border: 1px solid var(--card-border);
          transition: transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease;
        }
        .faq-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(16,24,40,0.06);
          background-color: var(--card-hover-tint);
        }

        /* Heading / text colors using palette */
        .faq-title { color: var(--text-main); }
        .faq-sub { color: var(--text-medium); }
        .faq-quote { color: var(--text-main); }

        /* Left accent bar styling when hovered or open */
        .left-accent {
          background: linear-gradient(180deg, var(--brand-blue), var(--brand-blue-2));
        }
        .left-accent-muted {
          background: linear-gradient(180deg, rgba(13,110,253,0.12), rgba(99,102,241,0.05));
        }

        /* Icon color for the message circle */
        .icon-cta { color: var(--brand-blue); }

        /* Ensure the masonry / layout remains identical */
        .break-avoid { break-inside: avoid; }
      `}</style>

      {/* subtle layered background node */}
      <div className="pointer-events-none absolute inset-0 -z-10 faq-bg-layer" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.95) 1px, transparent 0)',
            backgroundSize: "44px 44px"
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto faq-sans">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={itemReveal} className="flex items-center gap-3 mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-[color:var(--text-medium)] font-semibold">
              Frequently Asked Questions
            </span>
          </motion.div>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px 0px" }}
                variants={{ show: { transition: { staggerChildren: 0.03 } } }}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative faq-card overflow-hidden rounded-lg">
                  {/* Left accent - Moved INSIDE and added rounded-none to respect container overflow if needed, or keep rounded */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: hoveredIndex === index || isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: isOpen
                        ? "linear-gradient(180deg,var(--brand-blue),var(--brand-blue-2))"
                        : "linear-gradient(180deg,rgba(13,110,253,0.12), rgba(99,102,241,0.05))",
                      transformOrigin: "top"
                    }}
                  />

                  <button
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full px-6 md:px-8 lg:px-10 py-5 md:py-6 flex items-start justify-between gap-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(13,110,253,0.12)]"
                  >
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-base md:text-lg lg:text-xl font-medium faq-title leading-relaxed"
                        style={{ transition: "color 180ms ease" }}
                      >
                        {faq.q}
                      </motion.h3>
                    </div>

                    <motion.div
                      animate={chevronRotate(isOpen)}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                          scale: hoveredIndex === index ? 1 : 0,
                          opacity: hoveredIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.18 }}
                        className="absolute inset-0 rounded-full bg-[color:rgba(0,0,0,0.03)]"
                      />
                      <AnimatePresence mode="wait">
                        {isOpen ? (
                          <motion.div
                            key="minus"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                          >
                            <Minus className="w-5 h-5 text-[color:var(--text-main)]" strokeWidth={1.5} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                          >
                            <Plus className="w-5 h-5 text-[color:var(--text-medium)]" strokeWidth={1.5} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.28 }
                        }}
                        className="overflow-hidden px-6 md:px-8 lg:px-10 pb-6 md:pb-8"
                      >
                        <motion.div
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                          className="pt-2 border-t"
                          style={{ borderColor: "rgba(15,23,42,0.04)" }}
                        >
                          <p className="text-sm md:text-base text-[color:var(--text-medium)] leading-relaxed font-light max-w-3xl">
                            {faq.a}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px 0px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 pt-12 border-t"
          style={{ borderColor: "rgba(15,23,42,0.06)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full" style={{ boxShadow: "0 6px 18px rgba(13,110,253,0.06)" }}>
                <MessageCircle className="w-6 h-6 icon-cta" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium faq-title mb-1">Still have questions?</h3>
                <p className="text-sm md:text-base text-[color:var(--text-medium)] font-light">
                  Our team is ready to help — let’s get you set up.
                </p>
              </div>
            </div>

            <Button
              href="#contact"
              variant="primary"
              className="rounded-md"
              icon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
              iconPosition="right"
              iconEffect="slide"
            >
              Contact our team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
