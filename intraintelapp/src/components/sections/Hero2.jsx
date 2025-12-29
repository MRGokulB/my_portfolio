import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { PlayCircle, ArrowRight, Lock, Shield } from "lucide-react";
import Button from "../ui/Button";
import VideoModal from "../ui/VideoModal";

export default function Hero({
  title = (
    <>
      <span className="block">Your Data.</span>
      <span className="block">Your AI.</span>
      <span className="block">Your Way.</span>
    </>
  ),
  subtitle = "Deploy specialized AI agents that automate technical documentation, regulatory compliance, clinical workflows, and operational processes—across all your data sources.",
  primaryCta = { label: "Start Free Trial", onClick: () => { } },
  secondaryCta = { label: "Watch Demo", onClick: () => { } },
  heroImage = null,
  logos = ["Google", "Microsoft", "Amazon"]
}) {
  const containerRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // pointer parallax
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useTransform(pointerY, [-100, 100], [6, -6]);
  const rotateY = useTransform(pointerX, [-100, 100], [-8, 8]);
  const translateX = useTransform(pointerX, [-100, 100], [-6, 6]);
  const translateY = useTransform(pointerY, [-100, 100], [-6, 6]);

  function handlePointerMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    pointerX.set((x / (rect.width / 2)) * 100);
    pointerY.set((y / (rect.height / 2)) * 100);
  }
  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <>
      <header
        className="relative bg-transparent flex justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Decorative soft lights */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -left-20 -top-20 w-[36rem] h-[36rem] rounded-full filter blur-3xl opacity-70 hero-light-left"
            style={{ opacity: 0.07 }}
          />
          <div
            className="absolute right-8 top-24 w-64 h-64 rounded-full filter blur-2xl opacity-60 hero-light-right"
            style={{ opacity: 0.06 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT: copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="rounded-full badge px-3 py-2 text-sm shadow-sm flex items-center">
                  <Lock size={14} className="text-slate-700" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                  Private by design — enterprise-ready
                </div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight hero-title"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-6 text-lg max-w-xl hero-sub"
              >
                {subtitle}{" "}
                <span className="font-semibold text-text-main">No migration required.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  onClick={primaryCta.onClick}
                  variant="primary"
                  className="rounded-xl shadow-lg shadow-blue-600/20"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  iconEffect="slide"
                >
                  {primaryCta.label}
                </Button>

                <Button
                  onClick={() => setIsVideoOpen(true)}
                  variant="secondary"
                  className="rounded-xl border-2 border-slate-200 bg-white text-slate-600 shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all font-semibold"
                  icon={<PlayCircle size={16} />}
                  iconPosition="left"
                  iconEffect="scale"
                >
                  {secondaryCta.label}
                </Button>
              </motion.div>


            </div>

            {/* RIGHT: visual card */}
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  translateX,
                  translateY
                }}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.3, 1] }}
                className="w-full max-w-lg"
              >
                <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                  {/* Video Card Container - Vertical Stack for No Overlap */}
                  <div className="relative rounded-2xl visual-card overflow-hidden bg-white border border-slate-200 shadow-2xl flex flex-col">

                    {/* UI Chrome (Browser Header) - Now Static at Top */}
                    <div className="h-10 px-4 flex items-center justify-between bg-slate-50 border-b border-slate-100 z-20">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest bg-white px-3 py-0.5 rounded-full border border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        IntraIntel Demo
                      </div>
                    </div>

                    {/* Video Area */}
                    <div className="relative aspect-video bg-slate-100 w-full overflow-hidden">
                      {/* HTML5 Video Player */}
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        poster="/images/dashboard-preview.jpg"
                      >
                        <source src="/video/hero-demo.mp4" type="video/mp4" />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
                      </video>

                      {/* Video Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

                      {/* Play Button - Glassmorphism & Smaller */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.button
                          type="button"
                          aria-label="Play demo video"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsVideoOpen(true);
                          }}
                          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-white/90 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                        >
                          <PlayCircle size={28} strokeWidth={1.5} className="ml-0.5" fill="currentColor" />
                          <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30" />
                        </motion.button>
                      </div>
                    </div>

                  </div>

                  {/* Soft Outer Glow */}
                  <div
                    aria-hidden
                    className="absolute -inset-6 rounded-[2rem] blur-3xl visual-glow pointer-events-none opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                  />

                  {/* Floating Badge - Smaller & Compact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-lg border border-slate-100 rounded-lg p-2.5 flex items-center gap-2.5 z-30 transform scale-90 sm:scale-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-900 leading-tight">SOC2 Ready</div>
                      <div className="text-[9px] text-slate-500 font-medium">Enterprise Security</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/video/hero-demo.mp4"
      />
    </>
  );
}
