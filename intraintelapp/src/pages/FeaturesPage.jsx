import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import {
    Activity, ArrowRight, BarChart3, Bot, BrainCircuit, Check, Zap, AlertTriangle,
    Database, FileText, Globe, Layers, Layout, Lock, MessageSquare,
    Network, Server, Shield, Smartphone, Workflow, Search, Users,
    X, TrendingUp, Cpu, MonitorPlay, FileCheck, Share2, Landmark,
    Briefcase, Target, Phone, ChevronRight, Factory, Import,
    Link as LinkIcon, FileText as FileIcon, ShieldCheck, Crosshair, Scan
} from 'lucide-react';
import UseCasesSection from '../components/sections/UseCasesSection';
import SEO from '../components/SEO';
import { seoData } from '../data/intraintel';

// --- Assets ---
// Using existing verified assets from previous implementations
const VISUAL_ASSETS = {
    platform: "/assets/enterprise_ai_digital_wave_1765527961286.png",
    dashboard: "/assets/ai_governance_shield_abstract_1765527908919.png",
    network: "/assets/ai_agents_macro_neurons.png"
};

// --- Data: Agents (Preserved from previous version) ---
import { agentsData } from '../data/intraintel';

// Map string icon names to imported components
const ICON_MAP = {
    Landmark, FileText, Check, TrendingUp, Shield, Activity, Globe, Layers,
    Workflow, Users, Server, Database, Search, AlertTriangle, MessageSquare,
    Zap, MonitorPlay, Phone, Network, Lock, Target, Briefcase, Factory
};

const agents = agentsData.map(agent => ({
    ...agent,
    icon: ICON_MAP[agent.icon] || Activity,
    capabilities: agent.capabilities.map(cap => ({
        ...cap,
        icon: ICON_MAP[cap.icon] || Activity
    }))
}));

// --- Sub-Components ---

const HeroSection = () => (
    <div className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-purple-50/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_60%)]" />
        </div>


        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200/50 shadow-lg shadow-indigo-500/10 mb-6">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                <span className="text-indigo-600 font-semibold tracking-wide uppercase text-xs">
                    The Ecosystem
                </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                AI  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                Specialized AI agents that transform how your organization works.
            </p>
        </motion.div>
    </div>
);

const DifferentiatorOne = () => (
    <section className="py-24 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">01. End-To-End Platform</span>
                <h2 className="text-4xl font-light mt-2 text-slate-900">Not Just Point Solutions. <span className="font-medium">A Complete OS.</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    {[
                        { t: "Baseline SaaS Platform", d: "Enterprise-grade infrastructure (SOC 2, GDPR) built-in. Competitors require DIY assembly.", i: Server },
                        { t: "RAG Architecture", d: "Answers grounded in YOUR data with citations. Zero hallucinations vs Generic AI's 40% error rate.", i: Database },
                        { t: "Multi-Agent Orchestration", d: "Specialized agents that collaborate. Single-purpose bots can't handle complex workflows.", i: Bot },
                        { t: "Universal Connectivity", d: "100+ pre-built connectors (ERP, CRM, SQL). No migration or ETL pipelines needed.", i: Network },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <item.i size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.t}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.d}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center relative overflow-hidden"
                >
                    {/* Visual Metaphor for Unified Platform */}
                    <img
                        src={VISUAL_ASSETS.platform}
                        alt="Unified Platform"
                        className="w-full h-full object-contain mix-blend-multiply opacity-80"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent" />
                </motion.div>
            </div>

            <div className="mt-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <p className="text-blue-800 text-sm font-medium flex items-center gap-2">
                    <Zap size={16} fill="currentColor" />
                    <strong>Why This Matters:</strong> Competitors force you to buy 5 tools. IntraIntel is ONE platform. 30% lower TCO.
                </p>
            </div>
        </div>
    </section>
);

const DifferentiatorTwo = () => (
    <section className="py-24 bg-transparent overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 max-w-3xl"
            >
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">02. Enterprise Intelligence</span>
                <h2 className="text-4xl font-light mt-2 text-slate-900">Connecting the Dots. <span className="font-medium">Revealing the Invisible.</span></h2>
                <p className="mt-4 text-slate-600 text-lg">We don't just find docs. We connect insights across silos to reveal risks and opportunities.</p>
            </motion.div>

            {/* Connecting Lines Graphic (Absolute behind grid) */}
            <div className="absolute top-1/2 left-0 w-full h-full -z-10 opacity-20 pointer-events-none hidden lg:block">
                <svg width="100%" height="100%">
                    <path d="M200 100 C 400 100, 400 300, 600 300" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="6 6" />
                    <path d="M600 300 C 800 300, 800 100, 1000 100" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="6 6" />
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { t: "Gap Analysis", d: "Identifies missing process docs causing $2M in quality issues.", i: AlertTriangle },
                    { t: "Risk Assessment", d: "Connects vendor audits to market news to predict bankruptcy.", i: Shield },
                    { t: "Performance", d: "Correlates training programs with actual sales win-rates.", i: TrendingUp },
                    { t: "Market Intel", d: "Monitors competitor feature launches vs deal loss reasons.", i: Globe },
                ].map((card, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        key={i}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                        <card.i className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{card.t}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{card.d}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const LeadershipDashboard = () => (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">03. Impact</span>
                <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
                    The Leadership <br /><span className="font-medium text-white">Transparency Dashboard.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                    Not just reports, but actionable insights with clear attribution. See organizational health in real-time.
                </p>

                <div className="space-y-6">
                    {[
                        { l: "Strategic Gaps", t: "No disaster recovery plan for 40% of systems.", c: "text-red-400" },
                        { l: "Hidden Wins", t: "APAC sales team found unlisted technique (+28% win rate).", c: "text-emerald-400" },
                        { l: "Talent Intel", t: "Lack of career dev is #1 turnover cause. Cost: $3.2M.", c: "text-amber-400" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.2) }}
                            className="border-l-2 border-white/10 pl-6 py-2 hover:border-blue-500 hover:bg-white/5 transition-all cursor-default rounded-r-lg"
                        >
                            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.c}`}>{item.l}</div>
                            <div className="text-slate-300 font-light">{item.t}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-700" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative rounded-xl border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm overflow-hidden"
                >
                    <img
                        src={VISUAL_ASSETS.dashboard}
                        alt="Dashboard"
                        className="w-full h-auto"
                        loading="lazy"
                    />
                    {/* Glint Effect */}
                    <div className="absolute inset-0 bg-white/20 skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                </motion.div>
            </div>
        </div>
    </section>
);

const CustomizationSection = () => (
    <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">04. Customization</span>
                <h2 className="text-4xl font-light mt-2 text-slate-900">No 'One Size Fits All'. <span className="font-medium">Trained on YOU.</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { t: "Domain Vocabulary", d: "Learns YOUR acronyms and jargon. Understands 'Project Phoenix' is a product, not a bird." },
                    { t: "Process Workflows", d: "Learns YOUR approval chains and exceptions. Guides users through YOUR specific SOPs." },
                    { t: "Historical Context", d: "Trained on YOUR past decisions. Recommends based on what actually worked for you before." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:border-blue-200 transition-colors"
                    >
                        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{item.t}</h3>
                        <p className="text-slate-600">{item.d}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// --- Reusing AgentSection (The "Ecosystem") ---

// --- Abstract UI Indicators (High Fidelity) ---

const FinanceVisual = ({ isInView }) => (
    <div className="relative w-64 h-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="h-12 border-b border-slate-50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/20" />
            <div className="w-20 h-2 rounded-full bg-slate-100" />
        </div>
        {/* Content - Invoice Scan */}
        <div className="p-4 space-y-3 relative">
            <div className="w-full h-8 bg-slate-50 rounded-lg animate-pulse" />
            <div className="space-y-2">
                <div className="flex justify-between"><div className="w-16 h-2 bg-slate-100 rounded" /><div className="w-8 h-2 bg-slate-100 rounded" /></div>
                <div className="flex justify-between"><div className="w-24 h-2 bg-slate-100 rounded" /><div className="w-8 h-2 bg-slate-100 rounded" /></div>
                <div className="flex justify-between"><div className="w-12 h-2 bg-slate-100 rounded" /><div className="w-8 h-2 bg-slate-100 rounded" /></div>
            </div>
            {/* Scan Line */}
            <motion.div
                animate={isInView ? { top: ["0%", "100%", "0%"] } : { top: "0%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-px bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />
        </div>
        {/* Validated Badge */}
        <div className="mt-auto p-4 bg-emerald-50/50 flex items-center justify-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
            <Check size={12} strokeWidth={3} /> Verified
        </div>
    </div>
);

const BIVisual = ({ isInView }) => (
    <div className="relative w-72 h-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex items-end justify-between gap-2 overflow-hidden">
        {[40, 70, 50, 90, 65, 85].map((h, i) => (
            <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${h}%` } : { height: 0 }}
                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                className="w-8 bg-indigo-500 rounded-t-lg relative group"
            >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                </div>
            </motion.div>
        ))}
        {/* Floating Connection Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <motion.path
                d="M 20 180 L 60 100 L 100 140 L 140 40 L 180 110 L 220 50"
                fill="none"
                stroke="#6366F1"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
        </svg>
    </div>
);

const OpsVisual = ({ isInView }) => (
    <div className="relative w-72 h-48 flex items-center justify-center">
        {/* Orchestration Hub */}
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating Rings */}
            <motion.div
                animate={isInView ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 rounded-full border border-slate-100 border-dashed"
            />
            <motion.div
                animate={isInView ? { rotate: -360 } : { rotate: 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border border-slate-200 border-dashed opacity-50"
            />
        </div>

        {/* Central Engine */}
        <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
            <Workflow size={24} className="text-emerald-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
        </div>

        {/* Floating Task Cards */}
        {[0, 120, 240].map((deg, i) => (
            <motion.div
                key={i}
                className="absolute w-10 h-8 bg-white rounded shadow-md border border-slate-50 flex items-center justify-center"
                animate={isInView ? {
                    x: Math.cos(deg * (Math.PI / 180)) * 70,
                    y: Math.sin(deg * (Math.PI / 180)) * 70,
                    scale: [1, 1.1, 1]
                } : {
                    x: Math.cos(deg * (Math.PI / 180)) * 70,
                    y: Math.sin(deg * (Math.PI / 180)) * 70,
                    scale: 1
                }}
                transition={{
                    x: { duration: 0 },
                    y: { duration: 0 },
                    scale: { duration: 2, repeat: Infinity, delay: i * 0.5 }
                }}
            >
                <div className="w-6 h-1 bg-slate-200 rounded" />
            </motion.div>
        ))}

        {/* Incoming/Outgoing Particles */}
        <div className="absolute w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-emerald-400 rounded-full"
                    animate={isInView ? {
                        x: [0, Math.cos(i * 60 * (Math.PI / 180)) * 100],
                        y: [0, Math.sin(i * 60 * (Math.PI / 180)) * 100],
                        opacity: [1, 0]
                    } : { opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                />
            ))}
        </div>
    </div>
);

const KnowledgeVisual = ({ isInView }) => (
    <div className="relative w-72 h-64 flex items-center justify-center">
        {/* Document Grid - The "Chaos" */}
        <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center"
                    initial={{ opacity: 0.5 }}
                    animate={isInView ? {
                        opacity: i === 4 ? 1 : 0.3,
                        scale: i === 4 ? 1.1 : 1,
                        borderColor: i === 4 ? '#F59E0B' : '#F1F5F9',
                        backgroundColor: i === 4 ? '#FFFBEB' : '#F8FAFC'
                    } : { opacity: 0.5 }}
                    transition={{ duration: 0.5, delay: i === 4 ? 2 : 0 }}
                >
                    <FileText size={18} className={i === 4 ? "text-amber-500" : "text-slate-300"} />
                </motion.div>
            ))}
        </div>

        {/* Scanning Beam - The "Contextual Search" */}
        <motion.div
            className="absolute top-0 w-full h-8 bg-gradient-to-b from-amber-400/20 to-transparent border-t border-amber-400/50"
            initial={{ top: "0%", opacity: 0 }}
            animate={isInView ? { top: ["10%", "90%"], opacity: [0, 1, 0] } : { top: "0%", opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
        />

        {/* Search Query Indicator */}
        <motion.div
            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-amber-100 rounded-full p-2 flex items-center gap-2 pr-4"
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: [20, 0, 0, 20], opacity: [0, 1, 1, 0] } : { x: 20, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0 }}
        >
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <Search size={14} />
            </div>
            <div className="flex flex-col">
                <div className="w-16 h-2 bg-slate-100 rounded-full mb-1" />
                <div className="w-10 h-2 bg-slate-100 rounded-full" />
            </div>
        </motion.div>
    </div>
);

const ConversationalVisual = ({ isInView }) => (
    <div className="w-64 space-y-4">
        {/* User Bubble */}
        <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex gap-3"
        >
            <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-xs text-slate-500 max-w-[80%]">
                How do I reset my password?
            </div>
        </motion.div>

        {/* AI Reply */}
        <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-3 flex-row-reverse"
        >
            <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white flex-shrink-0">
                <Bot size={16} />
            </div>
            <div className="bg-violet-50 border border-violet-100 p-3 rounded-2xl rounded-tr-none text-xs text-slate-600 max-w-[80%] shadow-sm">
                I can help with that. <br /> <span className="text-violet-600 font-semibold cursor-pointer hover:underline">Click here to reset.</span>
            </div>
        </motion.div>
    </div>
);

const VoiceVisual = ({ isInView }) => (
    <div className="flex items-center gap-1 h-32">
        {[...Array(9)].map((_, i) => (
            <motion.div
                key={i}
                className="w-3 bg-rose-500 rounded-full"
                animate={isInView ? {
                    height: [20, Math.random() * 80 + 20, 20]
                } : { height: 20 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                }}
            />
        ))}
    </div>
);

const SalesVisual = ({ isInView }) => (
    <div className="relative w-64 h-64 flex items-center justify-center bg-slate-900 rounded-full overflow-hidden border-4 border-slate-800">
        {/* Radar Sweep */}
        <motion.div
            className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(249,115,22,0.3)_360deg)]"
            animate={isInView ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Lines */}
        <div className="absolute inset-0 border border-slate-700 rounded-full scale-75" />
        <div className="absolute inset-0 border border-slate-700 rounded-full scale-50" />
        <div className="absolute h-full w-px bg-slate-700" />
        <div className="absolute w-full h-px bg-slate-700" />

        {/* Potential Leads (Dots) */}
        {[...Array(8)].map((_, i) => (
            <div
                key={i}
                className="absolute w-2 h-2 bg-slate-600 rounded-full"
                style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`
                }}
            />
        ))}

        {/* High Intent Target (Locked) */}
        <div className="absolute top-[30%] right-[30%]">
            <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="absolute -inset-2 border border-orange-500 rounded-full"
            />
            <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_#F97316]" />
            <div className="absolute left-4 top-0 bg-slate-800 text-[10px] text-orange-400 px-1 border border-orange-500/30 whitespace-nowrap">
                HOT LEAD
            </div>
        </div>
    </div>
);

const IndustryVisual = ({ isInView }) => (
    <div className="relative w-64 h-56 perspective-1000">
        {/* Isometric Layers Stack */}
        <div className="relative h-full flex flex-col items-center justify-center -space-y-12 transform rotate-x-12">

            {/* Layer 1: Data */}
            <motion.div
                className="w-48 h-24 bg-slate-50 border border-slate-200 rounded-xl transform -skew-x-12 z-10 flex items-center justify-center"
                animate={isInView ? { y: [0, 5, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Database size={20} className="text-slate-300" />
            </motion.div>

            {/* Layer 2: Logic */}
            <motion.div
                className="w-48 h-24 bg-white border border-slate-200 rounded-xl transform -skew-x-12 z-20 flex items-center justify-center shadow-sm"
                animate={isInView ? { y: [0, 5, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
                <div className="grid grid-cols-3 gap-2">
                    <div className="w-8 h-2 bg-slate-100 rounded" />
                    <div className="w-4 h-2 bg-slate-100 rounded" />
                    <div className="w-6 h-2 bg-slate-100 rounded" />
                </div>
            </motion.div>

            {/* Layer 3: Compliance Shield (Active) */}
            <motion.div
                className="w-48 h-24 bg-teal-50/80 border border-teal-200/50 rounded-xl transform -skew-x-12 z-30 flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
                animate={isInView ? { y: [0, 5, 0] } : { y: 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
                <ShieldCheck size={32} className="text-teal-500 relative z-10" strokeWidth={1.5} />
                {/* Scanning Light */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full transform skew-x-12"
                    animate={isInView ? { x: ['-200%', '200%'] } : { x: '-200%' }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>

        {/* Floating Tooltip */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 1 }}
            className="absolute top-10 -right-4 bg-slate-800 text-white text-[10px] py-1 px-2 rounded font-mono border border-slate-700 shadow-lg z-40"
        >
            COMPLIANCE_VERIFIED
        </motion.div>
    </div>
);

const SchematicDispatcher = ({ id, accent, isInView }) => {
    // Dynamic rendering of high-fidelity visual per agent type
    return (
        <div className="w-full h-full flex items-center justify-center bg-slate-50/50 rounded-3xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50/50 to-slate-100/50" />

            <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                {id === 'finance' ? <FinanceVisual isInView={isInView} /> :
                    id === 'bi' ? <BIVisual isInView={isInView} /> :
                        id === 'ops' ? <OpsVisual isInView={isInView} /> :
                            id === 'knowledge' ? <KnowledgeVisual isInView={isInView} /> :
                                id === 'conversational' ? <ConversationalVisual isInView={isInView} /> :
                                    id === 'voice' ? <VoiceVisual isInView={isInView} /> :
                                        id === 'sales' ? <SalesVisual isInView={isInView} /> :
                                            id === 'industry' ? <IndustryVisual isInView={isInView} /> :
                                                // Fallback
                                                <div className={`p-8 rounded-3xl bg-white shadow-xl text-${accent}-500 ring-1 ring-slate-100 flex flex-col items-center gap-4`}>
                                                    <Activity size={64} strokeWidth={1} />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Agent Active</span>
                                                </div>
                }
            </div>
        </div>
    );
};

const AgentSection = ({ agent }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

    return (
        <section id={agent.id} className="min-h-[90vh] flex items-center py-24 border-b border-slate-100 last:border-0">
            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
                {/* Visual */}
                <div className="lg:col-span-5 h-[500px] lg:h-auto lg:sticky lg:top-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.2, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                        className="h-full"
                    >
                        <SchematicDispatcher id={agent.id} accent={agent.accent} isInView={isInView} />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${agent.accent}-50 text-${agent.accent}-600 text-xs font-bold uppercase w-fit mb-6`}>
                        <Bot size={14} />
                        {agent.subtitle}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">{agent.title}</h3>
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-12">{agent.desc}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-10 border-y border-slate-100 py-8">
                        {agent.metrics.map((m, i) => (
                            <div key={i} className="text-center md:text-left">
                                <span className={`block text-2xl font-bold text-${agent.accent}-600 mb-1`}>{m.split(' ')[0]}</span>
                                <span className="text-xs text-slate-400 uppercase font-medium">{m.split(' ').slice(1).join(' ')}</span>
                            </div>
                        ))}
                    </div>

                    {/* Capabilities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
                        {agent.capabilities.map((cap) => (
                            <div key={cap.id} className="group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-${agent.accent}-500 transition-colors`}>
                                        <cap.icon size={18} />
                                    </div>
                                    <h4 className="font-semibold text-slate-900">{cap.title}</h4>
                                </div>
                                <p className="text-sm text-slate-500 pl-11">{cap.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Integrations */}
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-xs font-bold text-slate-400 uppercase mr-2">Works With:</span>
                        {agent.integrations.map((tool, i) => (
                            <span key={i} className="px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-500 text-xs font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const ComparisonSection = () => (
    <section className="py-24 bg-transparent overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-slate-50 opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-light text-slate-900">The Complete Picture</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200 bg-white/50 backdrop-blur-sm"
            >
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="p-6 border-b border-slate-200 text-slate-500 font-medium uppercase text-xs tracking-wider w-1/4">Capability</th>
                            <th className="p-6 border-b border-slate-200 text-slate-400 font-medium uppercase text-xs tracking-wider w-1/4">Generic AI</th>
                            <th className="p-6 border-b border-slate-200 text-slate-400 font-medium uppercase text-xs tracking-wider w-1/4">Vertical Tools</th>
                            <th className="p-6 border-b border-blue-600 text-blue-600 font-bold uppercase text-xs tracking-wider bg-blue-50/50 w-1/4">IntraIntel.ai</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {[
                            { n: "Data Migration", g: "Required (6-12mo)", v: "Varies", i: "Zero - 5min Setup" },
                            { n: "Domain Expertise", g: "Generic", v: "Single Industry", i: "Multi-Industry" },
                            { n: "Custom Training", g: "Manual Prompts", v: "Limited", i: "Automatic" },
                            { n: "Enterprise Insights", g: "No", v: "No", i: "Yes - Core Feature" },
                            { n: "Gap/Risk Analysis", g: "No", v: "No", i: "Automatic" },
                            { n: "Source Transparency", g: "Hallucinates", v: "Limited", i: "Full Citations" },
                        ].map((row, idx) => (
                            <tr key={idx} className="border-b border-slate-100 hover:bg-white transition-colors last:border-0">
                                <td className="p-6 font-semibold text-slate-700">{row.n}</td>
                                <td className="p-6 text-slate-500"><span className="text-red-400 mr-2">✕</span>{row.g}</td>
                                <td className="p-6 text-slate-500"><span className="text-amber-400 mr-2">⚠️</span>{row.v}</td>
                                <td className="p-6 text-slate-900 font-bold bg-blue-50/10"><span className="text-emerald-500 mr-2">✓</span>{row.i}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    </section>
);


// --- Main Page ---

export default function FeaturesPage() {
    return (
        <>
            <SEO
                {...seoData.features}
                title="The Solution - Complete Enterprise Intelligence | IntraIntel.ai"
                schemaType="SoftwareApplication"
            />
            <main className="bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white min-h-screen font-sans text-slate-900">

                {/* 1. Hero */}
                <HeroSection />

                {/* 2. Differentiators */}
                <DifferentiatorOne />
                <DifferentiatorTwo />
                <LeadershipDashboard />
                <CustomizationSection />

                {/* 3. The Ecosystem (Agent List) */}
                <div className="py-24 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row relative">
                    {/* Sidebar */}
                    <div className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-fit pr-8">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Orchestration Layer</h4>
                        <nav className="space-y-1">
                            {agents.map((agent) => (
                                <ScrollLink
                                    key={agent.id}
                                    to={agent.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="text-blue-600 bg-blue-50 font-semibold !border-blue-600"
                                    className="block px-4 py-3 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-r-md cursor-pointer transition-all border-l-2 border-transparent relative"
                                >
                                    {agent.title}
                                </ScrollLink>
                            ))}
                        </nav>
                    </div>

                    {/* Content Stream */}
                    <div className="flex-1 lg:pl-12 border-l border-slate-100">
                        <div className="mb-16">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">05. The Ecosystem</span>
                            <h2 className="text-4xl font-light mt-2 text-slate-900">Multi-Agent <span className="font-medium">Orchestration.</span></h2>
                        </div>
                        {agents.map((agent) => (
                            <AgentSection key={agent.id} agent={agent} />
                        ))}
                    </div>
                </div>

                {/* 4. Use Cases (Optimization) */}
                <div className="bg-slate-50 border-t border-slate-100">
                    <UseCasesSection />
                </div>

                {/* 5. Complete Comparison */}
                <ComparisonSection />

                {/* 6. CTA Footer */}
                <div className="bg-slate-900 py-24 text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                        Not just connecting data. <br />
                        <span className="font-medium text-blue-500">Connecting intelligence.</span>
                    </h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
                        Deploy your first AI agent in 5 minutes. See strategic insights in 5 days. Transform your enterprise in 5 weeks.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors text-lg">
                            Deploy Now
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors backdrop-blur-sm text-lg border border-white/10">
                            See the Demo
                        </button>
                    </div>
                </div>

            </main>
        </>
    );
}
