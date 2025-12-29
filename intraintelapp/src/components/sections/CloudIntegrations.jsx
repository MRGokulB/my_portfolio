import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cloud, Brain, MessageSquare, Bot } from 'lucide-react';
import { integrationsData } from '../../data/intraintel';
import logo from '../../assets/logo.svg';

const categories = [
    {
        id: 'connect',
        label: '1. Connect Data Sources',
        icon: Cloud,
        description: "Securely link your data sources. We support AWS, Azure, Google Cloud, and more with read-only access.",
        integrations: ['AWS', 'Google Cloud', 'Azure', 'iCloud']
    },
    {
        id: 'models',
        label: '2. Create Models',
        icon: Brain,
        description: "Our AI engine ingests your documents and data to build custom, private knowledge models tailored to your enterprise.",
        integrations: ['Dropbox', 'OneDrive', 'Box', 'Drive', 'Salesforce', 'GitHub']
    },
    {
        id: 'agent ',
        label: '3.Connect AI Agent',
        icon: Bot,
        description: "Connect with your own tailor-made AI agent.",
        integrations: ['AWS', 'Salesforce', 'Slack', 'Teams']
    },
    {
        id: 'chat',
        label: '4. Converse with AI',
        icon: MessageSquare,
        description: "Start asking questions immediately. Get accurate, cited answers directly within your favorite communication tools.",
        integrations: ['Teams', 'Slack']
    },

];

export default function CloudIntegrations() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [autoRotate, setAutoRotate] = useState(true);
    // Auto-rotate categories
    useEffect(() => {
        if (!autoRotate) return;
        const interval = setInterval(() => {
            setActiveCategory(prev => {
                const currentIndex = categories.findIndex(c => c.id === prev);
                const nextIndex = (currentIndex + 1) % categories.length;
                return categories[nextIndex].id;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [autoRotate]);

    const activeData = categories.find(c => c.id === activeCategory);
    const currentIntegrations = integrationsData.filter(item => activeData.integrations.includes(item.name));

    return (
        <section id="integrations" className="relative py-20 bg-transparent">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Right Column: Visualizer */}
                    <div className="relative h-[400px] md:h-[600px] flex items-center justify-center order-2 lg:order-1">
                        <div className="relative w-full max-w-lg aspect-square transform scale-75 md:scale-100">
                            {/* Central Hub */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="relative w-32 h-32 bg-white rounded-3xl shadow-2xl shadow-blue-900/20 flex items-center justify-center border border-slate-100 z-20">
                                    <img src={logo} alt="IntraIntel" className="w-16 h-16" />
                                    {/* Pulsing Rings */}
                                    <div className="absolute inset-0 rounded-3xl border border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                                    <div className="absolute -inset-4 rounded-[2rem] border border-blue-500/10 animate-pulse" />
                                </div>
                            </div>

                            {/* Orbiting Integrations */}
                            <div className="absolute inset-0">
                                <AnimatePresence>
                                    {currentIntegrations.map((item, index) => {
                                        const total = currentIntegrations.length;
                                        const angle = (index * 360) / total;
                                        const radius = 160; // Distance from center
                                        return (
                                            <motion.div
                                                key={`${activeCategory}-${item.name}`}
                                                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    x: Math.cos((angle - 90) * (Math.PI / 180)) * radius,
                                                    y: Math.sin((angle - 90) * (Math.PI / 180)) * radius,
                                                }}
                                                exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 25,
                                                    delay: index * 0.1
                                                }}
                                                className="absolute top-1/2 left-1/2 -ml-8 -mt-8 w-16 h-16 z-10"
                                            >
                                                {/* Connection Line */}
                                                <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible" style={{ transform: `translate(-50%, -50%) rotate(${angle - 90}deg)` }}>
                                                    <motion.line
                                                        x1="100" y1="100" x2="200" y2="100"
                                                        stroke="url(#gradient-line)"
                                                        strokeWidth="2"
                                                        strokeDasharray="4 4"
                                                        initial={{ pathLength: 0, strokeOpacity: 0 }}
                                                        animate={{ pathLength: 1, strokeOpacity: 0.3 }}
                                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                                    />
                                                    <defs>
                                                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                {/* Icon Card */}
                                                <div className="relative group/icon">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover/icon:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                                                    <div className="relative w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
                                                        {typeof item.icon === 'string' ? (
                                                            <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                                        ) : (
                                                            <item.icon className="w-8 h-8 text-slate-600" />
                                                        )}
                                                    </div>
                                                    {/* Tooltip */}
                                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                                        <span className="text-xs font-semibold text-slate-600 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                    {/* Left Column: Narrative */}
                    <div className="space-y-12 order-1 lg:order-2">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="section-subtitle"
                            >
                                SEAMLESS INTEGRATIONS
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="section-title"
                            >
                                AI-Driven Process <br />
                                <span className="section-title-highlight">
                                    Unified & Intelligent.
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-600 leading-relaxed max-w-lg"
                            >
                                Stop switching tabs. IntraIntel connects to your existing tools to create a single source of truth, powered by advanced AI.
                            </motion.p>
                        </div>
                        {/* Interactive Categories */}
                        <div className="space-y-4">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${activeCategory === category.id
                                        ? 'bg-white border-blue-100 shadow-xl shadow-blue-900/5'
                                        : 'bg-transparent border-transparent hover:bg-white/50'
                                        }`}
                                    onClick={() => {
                                        setActiveCategory(category.id);
                                        setAutoRotate(false);
                                    }}
                                >
                                    {/* Progress Bar for Active State */}
                                    {activeCategory === category.id && autoRotate && (
                                        <motion.div
                                            layoutId="progress"
                                            className="absolute bottom-0 left-6 right-6 h-0.5 bg-blue-600/20 overflow-hidden rounded-full"
                                        >
                                            <motion.div
                                                className="h-full bg-blue-600"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 3, ease: "linear" }}
                                            />
                                        </motion.div>
                                    )}
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl transition-colors duration-300 ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:shadow-sm'
                                            }`}>
                                            <category.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-lg font-semibold transition-colors duration-300 ${activeCategory === category.id ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                                                }`}>
                                                {category.label}
                                            </h3>
                                            <AnimatePresence mode="wait">
                                                {activeCategory === category.id && (
                                                    <motion.p
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="mt-2 text-slate-600 text-sm leading-relaxed"
                                                    >
                                                        {category.description}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
