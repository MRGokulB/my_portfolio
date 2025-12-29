import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Factory, FileText, ShieldCheck, Brain, ArrowUpRight, Search, Zap, Cpu, Shield } from 'lucide-react';

const solutions = [
    {
        id: "clinical",
        title: "AI for Healthcare",
        subtitle: "Clinical Documentation",
        description: "Transforms physician-patient conversations into structured clinical notes in real-time.",
        stat: "66 min Saved Daily",
        icon: Stethoscope,
        image: "/assets/light_medical_dna.png",
        colSpan: "md:col-span-2",
        visual: "heartbeat"
    },
    {
        id: "quality",
        title: "AI for Industry",
        subtitle: "Quality Control",
        description: "Detects sub-millimeter defects with computer vision accuracy.",
        stat: "99.9% Accuracy",
        icon: Factory,
        image: "/assets/light_factory_automated.png",
        colSpan: "md:col-span-1 md:row-span-2",
        visual: "scanning"
    },
    {
        id: "rfp",
        title: "AI for Enterprise",
        subtitle: "RFP Automation",
        description: "Generates compliant, winning proposals from your knowledge base.",
        stat: "80% Time Saved",
        icon: FileText,
        image: "/assets/enterprise_ai_digital_wave_1765527961286.png",
        colSpan: "md:col-span-1",
        visual: "generation"
    },
    {
        id: "regulatory",
        title: "AI for Compliance",
        subtitle: "Compliance",
        description: "Automated audit trails.",
        stat: "24/7 Monitoring",
        icon: ShieldCheck,
        image: "/assets/ai_governance_shield_abstract_1765527908919.png",
        colSpan: "md:col-span-1",
        visual: "shield"
    },
    {
        id: "knowledge",
        title: "AI for Knowledge",
        subtitle: "Knowledge",
        description: "Semantic search engine.",
        stat: "100+ Formats",
        icon: Brain,
        image: "/assets/ai_agents_macro_neurons.png",
        colSpan: "md:col-span-3",
        visual: "search-grid"
    }
];

const SolutionCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative rounded-[2.5rem] overflow-hidden border border-white/40 shadow-sm hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/30 h-full`}
        >
            {/* Background Image (Reveals on Hover) */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-slate-900/80 to-slate-900/40 z-10" />
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = '#1e293b' }}
                />
            </div>

            {/* Glass Background (Default State) */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md z-0 group-hover:opacity-0 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                {/* Top: Icon & Subtitle */}
                <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/60 text-blue-600 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-md transition-all duration-500 shadow-sm">
                        <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/60 text-slate-600 text-xs font-medium uppercase tracking-wider group-hover:bg-white/20 group-hover:text-white transition-colors duration-500 backdrop-blur-sm">
                            {item.subtitle}
                        </span>
                        {/* Stat Badge */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-50/50 text-blue-700 text-[10px] font-bold uppercase tracking-wider group-hover:bg-blue-500/20 group-hover:text-blue-100 transition-colors duration-500">
                            <Zap size={10} className="fill-current" />
                            {item.stat}
                        </div>
                    </div>
                </div>

                {/* Middle: Title & Desc */}
                <div className="mt-8 relative">
                    <h3 className="text-3xl font-light text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300 max-w-lg">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Visual Animations */}
            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">

                {/* Healthcare: Heartbeat */}
                {item.visual === 'heartbeat' && (
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-1/3 h-32 flex items-center justify-center hidden md:flex">
                        <svg className="w-full h-24 text-rose-200 group-hover:text-rose-500 transition-colors duration-500 drop-shadow-sm" viewBox="0 0 300 100" preserveAspectRatio="none">
                            <motion.path
                                d="M0 50 L 40 50 L 50 20 L 60 80 L 70 50 L 100 50 L 140 50 L 150 20 L 160 80 L 170 50 L 200 50 L 240 50 L 250 20 L 260 80 L 270 50 L 300 50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>
                )}

                {/* The Sentinel: Scanning */}
                {item.visual === 'scanning' && (
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-0.5 bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,1)]"
                            animate={isHovered ? { top: ["0%", "100%", "0%"] } : { top: "0%" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>
                )}

                {/* The Architect: Generation */}
                {item.visual === 'generation' && (
                    <div className="absolute bottom-6 right-6 bg-slate-900/40 backdrop-blur-md rounded-lg p-3 w-32 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/10 hidden md:block">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-1.5 bg-slate-500 rounded"
                                animate={isHovered ? { width: ["0%", "80%", "0%"] } : { width: "0%" }}
                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                            />
                        ))}
                        <motion.div
                            className="h-1.5 bg-blue-500 rounded w-1/2"
                            animate={isHovered ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                )}

                {/* The Guardian: Shield */}
                {item.visual === 'shield' && (
                    <div className="absolute bottom-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                        <div className="relative">
                            <Shield size={64} className="text-blue-500/20" />
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <ShieldCheck size={32} className="text-blue-400 group-hover:text-white transition-colors" />
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* The Oracle: Search Grid (Knowledge) */}
                {item.visual === 'search-grid' && (
                    <div className="absolute bottom-8 right-8 hidden md:block opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="grid grid-cols-4 gap-2 relative overflow-hidden p-1">
                            {[...Array(16)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-8 h-8 rounded-md border border-blue-200/50 bg-white/20 flex items-center justify-center"
                                    animate={isHovered ? {
                                        backgroundColor: i === 6 || i === 9 ? ["rgba(255,255,255,0.2)", "rgba(59,130,246,0.6)", "rgba(255,255,255,0.2)"] : "rgba(255,255,255,0.2)",
                                        borderColor: i === 6 || i === 9 ? ["rgba(191,219,254,0.5)", "rgba(255,255,255,1)", "rgba(191,219,254,0.5)"] : "rgba(191,219,254,0.5)",
                                        scale: i === 6 || i === 9 ? [1, 1.1, 1] : 1
                                    } : {}}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.1
                                    }}
                                >
                                    {(i === 6 || i === 9) && <div className="w-4 h-1 bg-white rounded-full" />}
                                </motion.div>
                            ))}
                            {/* Scanning Beam Over Grid */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-0.5 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)]"
                                animate={isHovered ? { top: ["0%", "100%", "0%"] } : { top: "0%" }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>

    );
};

const AiSolutionsSection = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-blue-600" />
                            <span className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                                Intelligent Agents
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">
                            Meet Your New <br />
                            <span className="font-medium text-blue-600">Specialized Workforce.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/request-demo" className="group flex items-center gap-2 text-slate-600 font-medium hover:text-blue-600 transition-colors">
                            View all capabilities
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">
                    {solutions.map((item) => (
                        <div id={item.id} key={item.id} className={item.colSpan}>
                            <SolutionCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiSolutionsSection;
