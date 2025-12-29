import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Layers, Lock, Clock, TrendingDown, Shield, AlertTriangle, Activity, Database, FileText, Ban, Search } from 'lucide-react';

const problems = [
    {
        number: "01",
        icon: Layers,
        title: "Data Silos",
        description: "Critical insights trapped in AWS, Azure, GCP silos. Teams spend hours searching across multiple platforms.",
        stat: "87%",
        label: "unstructured data",
        id: "silos"
    },
    {
        number: "02",
        icon: Lock,
        title: "Security Risks",
        description: "Traditional AI solutions force you to choose between innovation and data security. Compliance shouldn't be a tradeoff.",
        stat: "73%",
        label: "security concerns",
        id: "security"
    },
    {
        number: "03",
        icon: Clock,
        title: "Lost Time",
        description: "Knowledge workers waste significant time manually searching. Productivity suffers while answers remain elusive.",
        stat: "6h+",
        label: "weekly per employee",
        id: "time"
    },
    {
        number: "04",
        icon: TrendingDown,
        title: "High Costs",
        description: "Multiple AI subscriptions and fragmented platforms drain budgets without delivering integrated insights.",
        stat: "$2.3M",
        label: "avg infrastructure spend",
        id: "costs"
    }
];

const ProblemVisuals = ({ activeIndex, sectionInView }) => {
    // Refined abstract visuals for each problem state
    const visuals = {
        0: ( // Data Silos: Premium Glassmorphism Nodes
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.2)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

                {/* Central Hub - pulsing weak signal */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={sectionInView ? { scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-32 h-32 rounded-full border border-slate-200 bg-slate-50/50 backdrop-blur-sm"
                    />
                </div>

                {/* Floating disconnected nodes with glass effect */}
                {[
                    { x: -70, y: -40, icon: Database, delay: 0, label: "CRM" },
                    { x: 70, y: -50, icon: FileText, delay: 1, label: "Docs" },
                    { x: -50, y: 70, icon: Layers, delay: 2, label: "ERP" },
                    { x: 60, y: 50, icon: Activity, delay: 0.5, label: "Logs" }
                ].map((node, i) => (
                    <motion.div
                        key={i}
                        className="absolute p-3 pr-4 bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xl rounded-2xl flex items-center gap-2"
                        initial={{ x: node.x, y: node.y, opacity: 0 }}
                        animate={sectionInView ? {
                            x: [node.x, node.x + (i % 2 === 0 ? 5 : -5), node.x],
                            y: [node.y, node.y + (i % 2 === 0 ? -5 : 5), node.y],
                            opacity: 1
                        } : {
                            x: node.x,
                            y: node.y,
                            opacity: 1
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-400">
                            <node.icon size={14} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{node.label}</span>

                        {/* Disconnected Indicator Line */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-20 h-[1px] bg-red-300 origin-left -z-10"
                            style={{ rotate: i * 90 + 45 }} // Arbitrary rotation towards center
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={sectionInView ? { scaleX: [0, 0.5, 0], opacity: [0, 0.5, 0] } : { scaleX: 0, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    </motion.div>
                ))}
            </div>
        ),
        1: ( // Security Risks: Cyber-Physical Shield
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="relative">
                        <Shield size={100} className="text-slate-100 fill-slate-50" strokeWidth={0.5} />
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-rose-500 drop-shadow-lg"
                            animate={sectionInView ? { opacity: [0.4, 1, 0.4] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Lock size={40} strokeWidth={2} />
                        </motion.div>
                        {/* Glitch Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-rose-500/10 mix-blend-overlay"
                            animate={sectionInView ? { clipPath: ["inset(0 0 0 0)", "inset(10% 0 80% 0)", "inset(0 0 0 0)"] } : {}}
                            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                        />
                    </div>
                </div>

                {/* Radar Rings */}
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute w-40 h-40 border border-rose-500/20 rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={sectionInView ? { scale: 1.8, opacity: [0, 0.4, 0] } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 3, delay: ring * 0.8, repeat: Infinity, ease: "easeOut" }}
                    />
                ))}

                <div className="absolute top-8 right-12 flex flex-col gap-2">
                    {[1, 2, 3].map((item, i) => (
                        <motion.div
                            key={i}
                            className="w-24 h-1.5 bg-rose-100 rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-rose-500"
                                animate={sectionInView ? { width: ["0%", "100%"] } : { width: "0%" }}
                                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
        2: ( // Lost Time: Racing clock/chaos
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Spinning Clock */}
                <motion.div
                    className="relative w-32 h-32 bg-white rounded-full border-4 border-slate-100 shadow-xl flex items-center justify-center z-10"
                >
                    <div className="absolute top-2 left-1/2 w-0.5 h-3 bg-slate-200 -translate-x-1/2" />
                    <div className="absolute bottom-2 left-1/2 w-0.5 h-3 bg-slate-200 -translate-x-1/2" />
                    <div className="absolute left-2 top-1/2 w-3 h-0.5 bg-slate-200 -translate-y-1/2" />
                    <div className="absolute right-2 top-1/2 w-3 h-0.5 bg-slate-200 -translate-y-1/2" />

                    {/* Hour Hand */}
                    <motion.div
                        className="absolute w-1 h-8 bg-slate-800 rounded-full origin-bottom top-8"
                        style={{ bottom: "50%" }}
                        animate={sectionInView ? { rotate: 360 } : {}}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Minute Hand */}
                    <motion.div
                        className="absolute w-0.5 h-12 bg-slate-400 rounded-full origin-bottom top-4"
                        style={{ bottom: "50%" }}
                        animate={sectionInView ? { rotate: 360 } : {}}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                {/* Flying calendar pages/documents */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white p-2 shadow-md border border-slate-100 rounded opacity-60 w-12 h-16"
                        initial={{ x: 200, y: -100, rotate: 0 }}
                        animate={sectionInView ? {
                            x: -200,
                            y: 200,
                            rotate: 360,
                            opacity: [0, 1, 0]
                        } : { x: 200, y: -100, rotate: 0, opacity: 0 }}
                        transition={{
                            duration: 3,
                            delay: i * 0.4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="w-full h-1 bg-slate-100 mb-1" />
                        <div className="w-2/3 h-1 bg-slate-100" />
                    </motion.div>
                ))}
            </div>
        ),
        3: ( // High Costs: Financial Dashboard
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-72 h-40 bg-white border border-slate-100 rounded-xl shadow-lg p-4 flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-center z-10">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Infrastructure Spend</span>
                        <div className="flex items-center gap-1 text-red-500 font-bold text-xs bg-red-50 px-2 py-0.5 rounded-full">
                            <TrendingDown size={10} className="rotate-180" /> {/* Rotate to point UP for cost increase */}
                            +124%
                        </div>
                    </div>

                    {/* Graph Area */}
                    <div className="relative h-20 w-full mt-2">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                            <div className="w-full h-px bg-slate-50" />
                            <div className="w-full h-px bg-slate-50" />
                            <div className="w-full h-px bg-slate-50" />
                        </div>

                        {/* Rising Cost Line */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <motion.path
                                d="M0,80 C40,70 80,70 120,40 S200,10 280,0" // Steep curve up
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                animate={sectionInView ? { pathLength: 1 } : { pathLength: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                            {/* Area fill */}
                            <motion.path
                                d="M0,80 C40,70 80,70 120,40 S200,10 280,0 V100 H0 Z"
                                fill="url(#gradient-red)"
                                opacity="0.2"
                                initial={{ opacity: 0 }}
                                animate={sectionInView ? { opacity: 0.2 } : { opacity: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                            <defs>
                                <linearGradient id="gradient-red" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ef4444" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="w-full h-full bg-transparent relative overflow-hidden">
            {/* Soft Ambient Light */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white via-transparent to-slate-100 opacity-80" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
                    className="absolute inset-0"
                >
                    {visuals[activeIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const ProblemCard = ({ item, index, setActiveIndex }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <motion.div
            ref={ref}
            className={`
                group relative p-8 rounded-2xl border transition-all duration-700
                ${isInView
                    ? 'bg-white border-slate-200 shadow-xl opacity-100 scale-100 blur-none'
                    : 'bg-white/40 border-slate-100 shadow-sm opacity-40 scale-95 blur-sm'
                }
            `}
        >
            <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-slate-50">
                        <item.icon className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`text-xl font-semibold transition-colors duration-500 ${isInView ? 'text-slate-900' : 'text-slate-300'}`}>
                            {item.title}
                        </h3>
                        <span className={`text-4xl font-light select-none transition-colors duration-500 ${isInView ? 'text-slate-200' : 'text-slate-100'}`}>
                            {item.number}
                        </span>
                    </div>
                    <p className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${isInView ? 'text-slate-500' : 'text-slate-300'}`}>
                        {item.description}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                        <span className={`text-2xl font-bold transition-colors duration-500 ${isInView ? 'text-slate-900' : 'text-slate-200'}`}>
                            {item.stat}
                        </span>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                            {item.label}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TheProblem = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionInView = useInView(containerRef, { margin: "0px 0px -20% 0px" });

    return (
        <section ref={containerRef} className="relative py-24 bg-transparent">
            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <img
                    src="/assets/light_chaos_scattered.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50 mix-blend-multiply"
                    onError={(e) => { e.target.style.display = 'none' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Sticky Narrative Side */}
                    <div className="lg:sticky lg:top-24 lg:h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-subtitle text-slate-500">
                                The Challenge
                            </span>
                            <h2 className="section-title">
                                Drowning in data, <br />
                                <span className="section-title-highlight text-slate-900">starving for insights.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-md mb-12">
                                The modern enterprise paradox: you have more data than ever, but accessing it is harder than ever.
                            </p>

                            {/* Dynamic Visual Container */}
                            <div className="hidden lg:block h-80 w-full rounded-2xl bg-slate-100 overflow-hidden relative">
                                <ProblemVisuals activeIndex={activeIndex} sectionInView={sectionInView} />

                                {/* Overlay Gradient for polish */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Scrolling Cards Side */}
                    <div className="space-y-32 py-20">
                        {problems.map((item, index) => (
                            <ProblemCard
                                key={index}
                                item={item}
                                index={index}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheProblem;