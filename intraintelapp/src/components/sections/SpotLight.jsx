import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { spotlightData } from "../../data/intraintel";

export default function CustomerSpotlight() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const wrappers = itemsRef.current || [];
    const removers = [];

    wrappers.forEach((el) => {
      if (!el) return;
      const video = el.querySelector("video");
      if (video) {
        const onLoaded = () => {
          try {
            video.pause();
            video.currentTime = 0;
          } catch (e) { }
        };
        video.addEventListener("loadeddata", onLoaded, { once: true });
        onLoaded();

        removers.push(() => video.removeEventListener("loadeddata", onLoaded));
      }
    });

    // Desktop hover behaviour
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      wrappers.forEach((el) => {
        if (!el) return;
        const video = el.querySelector("video");
        if (!video) return;

        const onEnter = () => video.play().catch(() => { });
        const onLeave = () => {
          try {
            video.pause();
            video.currentTime = 0;
          } catch (e) { }
        };

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        removers.push(() => el.removeEventListener("mouseenter", onEnter));
        removers.push(() => el.removeEventListener("mouseleave", onLeave));
      });
    }

    return () => {
      removers.forEach((fn) => {
        try {
          fn();
        } catch (e) { }
      });
    };
  }, []);

  // keep shape consistent with your data file
  const data = spotlightData;

  return (
    <section className="py-20 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Customer{" "}
          <span className="section-title-highlight">
            Spotlight
          </span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((item, i) => (
            <motion.div
              key={item.id}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`cursor-pointer group ${i > 0 ? 'hidden md:block' : ''}`}
              role="article"
              aria-label={`Customer spotlight: ${item.name}`}
            >
              <div className="card card--lift relative overflow-hidden rounded-2xl">
                <video
                  muted
                  playsInline
                  loop
                  preload="auto"
                  aria-hidden="true"
                  className="w-full h-full object-cover rounded-xl"
                  style={{ minHeight: 160 }}
                >
                  <source src={item.video} />
                </video>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 70 70"
                    className="w-10 h-10"
                    aria-hidden="true"
                  >
                    <circle cx="35" cy="35" r="34" className="fill-brand-blue" />
                    <path
                      d="M26 48V21l24 13.5L26 48z"
                      fill="white"
                      className="stroke-brand-blue-2"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
              </div>

              <p className="mt-4 text-lg text-text-main">"{item.quote}"</p>

              <div className="mt-4 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-text-main">{item.name}</div>
                  <div className="text-sm font-medium text-text-medium">{item.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
