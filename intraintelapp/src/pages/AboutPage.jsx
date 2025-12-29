import React, { useRef, useEffect, useState, Suspense } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  Target,
  Brain,
  Shield
} from "lucide-react";
import SEO from "../components/SEO";
import { seoData, aboutData } from "../data/intraintel";

// Lazy load heavy components
const AboutStack = React.lazy(() => import("../components/sections/AboutStack"));
const TeamSection = React.lazy(() => import("../components/sections/TeamSection"));
const TimelineCarousel = React.lazy(() => import('../components/sections/TimelineCarousel'));


const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);
  return [ref, count];
};

// Get data from centralized source
const { team: allTeam, stats, journey } = aboutData;

const StatCard = ({ stat, i }) => {
  const [ref, count] = useCounter(stat.value);
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500">
        <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
      </div>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-600 mt-2 font-medium tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const heroY = useTransform(smoothProgress, [0, 0.15], [0, -50]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  return (
    <>
      <SEO {...seoData.about} />

      <div
        ref={containerRef}
        className="bg-white text-gray-900 overflow-x-hidden"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", system-ui, sans-serif' }}
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-50"
          style={{ scaleX: smoothProgress }}
        />

        <div className="bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white">
          {/* Hero Section */}
          <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 max-w-7xl mx-auto text-center overflow-hidden">
            {/* Premium Gradient Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.12),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.08),transparent_60%)]" />
            </div>

            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-lg shadow-purple-500/10 mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-purple-600 font-semibold tracking-wide uppercase text-xs">
                    Our Story
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  About <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">IntraIntel</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Empowering organizations to unlock the hidden potential of their data through intelligent AI solutions.
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <div className="w-5 h-9 rounded-full border-2 border-slate-300 flex justify-center p-1.5 bg-white/50 backdrop-blur-sm">
                  <div className="w-1 h-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* CHAPTER ONE */}
          <section className="py-16 md:py-20 px-4 md:px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
              >
                <div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="section-title text-3xl md:text-4xl lg:text-5xl mb-6"
                  >
                    Your data is your most valuable asset
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg font-light text-justify md:text-left"
                  >
                    In an era where data drives decisions, most organizations struggle to extract meaningful insights from their internal information. Documents scattered across systems, knowledge trapped in silos, and the constant challenge of maintaining security while enabling access.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-slate-600 leading-relaxed text-base md:text-lg font-light text-justify md:text-left"
                  >
                    We built IntraIntel.AI to solve this. A platform that harnesses the power of Generative AI within the secure boundaries of your own storage—transforming how businesses leverage internal data across government, medical, research, and finance sectors.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative mt-8 lg:mt-0"
                >
                  <div className="aspect-square rounded-3xl bg-white/50 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-blue-500/10 border border-blue-100/50">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.1),transparent_60%)]" />
                    <div className="relative grid grid-cols-2 gap-4 w-full max-w-xs">
                      {[Globe, Target, Brain, Shield].map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="aspect-square rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-200/40 flex items-center justify-center shadow-xl shadow-blue-900/10 hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600" strokeWidth={1.5} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Mission, Purpose & Values - Using AboutStack Component */}
          <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading section...</div>}>
            <AboutStack />
          </Suspense>
        </div>

        {/* Stats Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,234,254,0.8),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(254,240,242,0.6),transparent_70%)]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="section-title mb-4 text-3xl md:text-4xl">
                Trusted by enterprises worldwide
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-light px-2">
                Our platform delivers measurable results for organizations across industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} i={i} />
              ))}
            </div>
          </div>
        </section>
        <div className="bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white">
          <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading timeline...</div>}>
            <TimelineCarousel />
          </Suspense>
          {/* Team Section */}
          <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading team...</div>}>
            <TeamSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}
