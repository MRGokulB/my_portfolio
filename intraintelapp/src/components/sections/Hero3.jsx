import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { PlayCircle, ArrowRight, Lock, Shield } from "lucide-react";
import Button from "../ui/Button";

export default function Hero({
  title = (
    <>
      <span className="block">Your Data.</span>
      <span className="block">Your AI.</span>
      <span className="block">Your Way.</span>
    </>
  ),
  subtitle = "Transform enterprise data into actionable insights with AI that operates inside your security boundaries.",
  primaryCta = { label: "Start Free Trial", onClick: () => { } },
  secondaryCta = { label: "Watch Demo", onClick: () => { } },
  heroImage = null,
  logos = ["Google", "Microsoft", "Amazon"]
}) {
  const containerRef = useRef(null);

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
              <span className="font-semibold text-text-main">No external access. No compromises.</span>
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
                className="rounded-xl"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                iconEffect="slide"
              >
                {primaryCta.label}
              </Button>

              <Button
                onClick={secondaryCta.onClick}
                variant="secondary"
                className="rounded-xl"
                icon={<PlayCircle size={16} />}
                iconPosition="left"
                iconEffect="scale"
              >
                {secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-6 items-center text-sm"
            >
              <span className="uppercase tracking-wide text-xs text-slate-400 mr-3">Trusted by</span>
              {logos.map((l, i) => (
                <div key={i} className="trusted-logo font-semibold opacity-80">{l}</div>
              ))}
            </motion.div>

            {/* small feature badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm">
              <div className="flex items-center gap-3 badge rounded-lg px-3 py-2 shadow-sm">
                <Shield size={18} className="text-slate-700" />
                <div className="text-sm">
                  <div className="text-slate-800 font-medium">Enterprise security</div>
                  <div className="text-xs text-slate-500">Encryption & RBAC</div>
                </div>
              </div>
              <div className="flex items-center gap-3 badge rounded-lg px-3 py-2 shadow-sm">
                <Lock size={18} className="text-slate-700" />
                <div className="text-sm">
                  <div className="text-slate-800 font-medium">Private deployment</div>
                  <div className="text-xs text-slate-500">On-premise or VPC</div>
                </div>
              </div>
            </div>
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
              <div className="relative group cursor-pointer">
                {/* Video Card Container */}
                <div className="relative rounded-2xl visual-card overflow-hidden aspect-video flex items-center justify-center bg-white">

                  {/* Placeholder Content / Future Video Area */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50" />

                  {/* Grid Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'radial-gradient(#0D6EFD 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Play Button / Interactive Element */}
                  <motion.button
                    type="button"
                    aria-label="Play demo video"
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <PlayCircle size={40} strokeWidth={1.5} className="ml-1" />

                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full border border-blue-100 animate-ping opacity-20" />
                  </motion.button>

                  {/* UI Chrome (Fake Browser/App Header) */}
                  <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-white/40 backdrop-blur-sm border-b border-white/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                      IntraIntel Demo
                    </div>
                  </div>

                </div>

                {/* Soft Outer Glow */}
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2rem] blur-3xl visual-glow pointer-events-none opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                />

                {/* Optional Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur shadow-lg border border-slate-100 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Secure</div>
                    <div className="text-[10px] text-slate-500">Enterprise Grade</div>
                  </div>
                </motion.div>
              </div>

              {/* Caption */}
              <div className="mt-6 flex justify-center gap-8 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Preview
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
