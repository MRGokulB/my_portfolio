import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../../data/intraintel";

const Star = ({ className = "w-4 h-4", title = "rating" }) => (
  <svg className={className} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
      fill="currentColor"
    />
  </svg>
);

export default function TestimonialsSection({ testimonials = testimonialsData }) {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="section-subtitle text-center mx-auto">
            Testimonials
          </span>
          <h2 className="section-title">
            What our <span className="section-title-highlight">Clients Say</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                boxShadow: "0 30px 60px rgba(2,6,23,0.06)",
                backgroundImage: "linear-gradient(to bottom right, #ffffff, #f0f9ff)"
              }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="card rounded-2xl p-6 flex flex-col break-inside-avoid mb-6"
              aria-labelledby={`testimonial-${t.id}-name`}
            >

              {/* rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1 text-yellow-400" aria-hidden>
                  {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5" />
                  ))}
                </div>
              </div>

              {/* quote */}
              <blockquote className="flex-grow mb-6">
                <p className="leading-relaxed text-base text-main">
                  "{t.quote}"
                </p>
              </blockquote>

              {/* client */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full avatar-fallback flex items-center justify-center font-semibold text-sm">
                      {t.name?.split(" ").map(n => n?.[0]).slice(0, 2).join("")}
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <p id={`testimonial-${t.id}-name`} className="text-sm font-semibold text-main">
                    {t.name}
                  </p>
                  <p className="text-xs text-medium truncate">{t.position}</p>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
