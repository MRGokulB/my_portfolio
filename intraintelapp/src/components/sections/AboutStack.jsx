import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Lightbulb, Shield, Users, Globe, Brain, CheckCircle2, Lock, Database, Zap } from 'lucide-react';

const sections = [
    {
        id: 'purpose',
        label: 'Our Purpose',
        bgColor: 'from-blue-50 to-indigo-50',
        textColor: 'text-blue-900',
        accentColor: 'bg-blue-600',
        subtitle: 'Our Purpose',
        title: 'Empowering Data-Driven Decisions',
        description: 'At IntraIntel.AI, we aim to empower individuals and organizations to confidently make data-driven decisions. We understand that your data is not just a collection of numbers and text; it\'s a valuable asset that is key to unlocking insights, driving innovation, and achieving your goals. That\'s why we\'ve created a platform that allows you to harness the power of Generative AI within the secure boundaries of your own storage and data files.',
        icons: [Globe, Brain, Shield, Target]
    },
    {
        id: 'mission',
        label: 'Our Mission',
        bgColor: 'from-indigo-50 to-purple-50',
        textColor: 'text-indigo-900',
        accentColor: 'bg-indigo-600',
        subtitle: 'Our Mission',
        title: 'Democratizing AI-Driven Insights',
        description: 'Our mission is to democratize access to AI-driven insights, making it possible for everyone to benefit from the transformative potential of AI, regardless of their technical expertise or the size of their data sets.',
        features: [
            { icon: Users, title: 'Enable Seamless Interactions', desc: 'Provide an intuitive platform allowing users to interact meaningfully with their data' },
            { icon: Lock, title: 'Prioritize Security', desc: 'Ensure the highest security and compliance standards' },
            { icon: Database, title: 'Offer Flexibility', desc: 'Choose your preferred LLM and storage options' },
            { icon: Zap, title: 'Drive Innovation', desc: 'Continuously improve to meet evolving needs' }
        ]
    },
    {
        id: 'values',
        label: 'Our Values',
        bgColor: 'from-purple-50 to-pink-50',
        textColor: 'text-purple-900',
        accentColor: 'bg-purple-600',
        subtitle: 'Our Values',
        title: 'What Drives Us Forward',
        description: 'Built on principles that ensure your data remains secure, accessible, and actionable. Our values guide every decision we make and every feature we build.',
        values: [
            { icon: Shield, title: 'Security First', desc: 'Your data never leaves your infrastructure' },
            { icon: Users, title: 'User-Centric', desc: 'Intuitive design for all expertise levels' },
            { icon: Lightbulb, title: 'Innovation', desc: 'Cutting-edge AI that evolves with you' },
            { icon: CheckCircle2, title: 'Integrity', desc: 'Transparent, ethical AI practices' }
        ]
    }
];

// Visual Components - Using actual images for Purpose and Mission
const PurposeIllustration = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex items-center justify-center p-4"
    >
        <img
            src="https://intraintel.ai/assets/OurPurposeImgV2-fa250963.png"
            alt="Our Purpose"
            className="w-full h-auto rounded-2xl shadow-2xl"
        />
    </motion.div>
);

const MissionIllustration = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex items-center justify-center p-4"
    >
        <img
            src="https://intraintel.ai/assets/OurMissionImgV2-879a5f04.png"
            alt="Our Mission"
            className="w-full h-auto rounded-2xl shadow-2xl"
        />
    </motion.div>
);

const ValuesIllustration = () => (
    <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
            <linearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9" />
            </linearGradient>
        </defs>

        {/* Shield shape */}
        <motion.path
            d="M 200 50 L 280 100 L 280 220 Q 280 300 200 350 Q 120 300 120 220 L 120 100 Z"
            fill="url(#purpleGrad2)"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
        />

        <motion.path
            d="M 200 80 L 260 115 L 260 210 Q 260 270 200 310 Q 140 270 140 210 L 140 115 Z"
            fill="url(#purpleGrad2)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Check mark */}
        <motion.path
            d="M 170 200 L 190 220 L 230 170"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        />
    </svg>
);

export default function AboutStack() {
    const [activeTab, setActiveTab] = useState('mission');

    const getIllustration = () => {
        switch (activeTab) {
            case 'purpose': return <PurposeIllustration />;
            case 'mission': return <MissionIllustration />;
            case 'values': return <ValuesIllustration />;
            default: return null;
        }
    };

    return (
        <section className="py-20 md:py-20 px-6 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-left mb-16 max-w-3xl">
                    <span className="section-subtitle">
                        Our Foundation
                    </span>
                    <h2 className="section-title">
                        What We Do at <span className="section-title-highlight">IntraIntel</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We don't just build AI; we engineer trust and intelligence. Our platform is founded on a commitment to democratizing data access while upholding the strictest standards of security and privacy for the modern enterprise.
                    </p>
                </div>

                {/* Main Container */}
                <div className="flex flex-col lg:flex-row gap-4 lg:h-[550px]">

                    {/* Tabs Container */}
                    <div className="flex lg:flex-row flex-col gap-3 lg:gap-4 flex-1">
                        {sections.map((section) => {
                            const isActive = activeTab === section.id;

                            return (
                                <motion.div
                                    key={section.id}
                                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${isActive ? 'lg:flex-[3] flex-grow' : 'lg:flex-[0.3] flex-none h-24 lg:h-auto'}
                                        }`}
                                    onClick={() => setActiveTab(section.id)}
                                    onMouseEnter={() => window.innerWidth >= 1024 && setActiveTab(section.id)}
                                    layout
                                >
                                    {/* Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor}`} />

                                    {/* Tab Label - Vertical on desktop, horizontal on mobile */}
                                    <div className={`relative h-full p-6 ${isActive ? 'lg:p-12' : 'flex items-center justify-start lg:block'}`}>
                                        <motion.div
                                            className={`${isActive ? 'opacity-0 lg:opacity-0 hidden lg:block' : 'opacity-100'} transition-opacity duration-300`}
                                            style={{
                                                writingMode: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 'vertical-rl' : 'horizontal-tb',
                                                transform: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 'rotate(180deg)' : 'none'
                                            }}
                                        >
                                            <h3 className={`text-xl lg:text-3xl font-bold ${section.textColor} whitespace-nowrap`}>
                                                {section.label}
                                            </h3>
                                        </motion.div>

                                        {/* Mobile Label (Visible when inactive on mobile) */}
                                        <div className={`lg:hidden ${isActive ? 'hidden' : 'block'}`}>
                                            <h3 className={`text-xl font-bold ${section.textColor}`}>
                                                {section.label}
                                            </h3>
                                        </div>

                                        {/* Mobile Header (Visible when active on mobile) */}
                                        <div className={`lg:hidden ${isActive ? 'block' : 'hidden'} mb-6`}>
                                            <h3 className={`text-2xl font-bold ${section.textColor}`}>
                                                {section.label}
                                            </h3>
                                        </div>

                                        {/* Content - Only show when active */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.2 }}
                                                    className="relative lg:absolute lg:inset-0 p-5 md:p-8 lg:p-12 lg:overflow-y-auto"
                                                >
                                                    <div className="max-w-xl">
                                                        <motion.p
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                            className={`text-sm font-semibold ${section.textColor} mb-2 opacity-80`}
                                                        >
                                                            {section.subtitle}
                                                        </motion.p>

                                                        <motion.h2
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.4 }}
                                                            className={`text-2xl md:text-3xl lg:text-4xl font-bold ${section.textColor} mb-4 leading-tight`}
                                                        >
                                                            {section.title}
                                                        </motion.h2>

                                                        <motion.p
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.5 }}
                                                            className={`${section.textColor} opacity-80 text-sm md:text-base leading-relaxed mb-6`}
                                                        >
                                                            {section.description}
                                                        </motion.p>

                                                        {/* Features or Values List */}
                                                        {section.features && (
                                                            <div className="space-y-3">
                                                                {section.features.map((feature, i) => {
                                                                    const Icon = feature.icon;
                                                                    return (
                                                                        <motion.div
                                                                            key={i}
                                                                            initial={{ x: -20, opacity: 0 }}
                                                                            animate={{ x: 0, opacity: 1 }}
                                                                            transition={{ delay: 0.6 + i * 0.1 }}
                                                                            className="flex items-start gap-3 group"
                                                                        >
                                                                            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg ${section.accentColor} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                                                <Icon className={`w-4 h-4 ${section.textColor}`} />
                                                                            </div>
                                                                            <div>
                                                                                <div className={`font-semibold ${section.textColor} text-sm`}>{feature.title}</div>
                                                                                <div className={`${section.textColor} opacity-70 text-xs`}>{feature.desc}</div>
                                                                            </div>
                                                                        </motion.div>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}

                                                        {section.values && (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {section.values.map((value, i) => {
                                                                    const Icon = value.icon;
                                                                    return (
                                                                        <motion.div
                                                                            key={i}
                                                                            initial={{ scale: 0.8, opacity: 0 }}
                                                                            animate={{ scale: 1, opacity: 1 }}
                                                                            transition={{ delay: 0.6 + i * 0.1 }}
                                                                            className={`p-4 rounded-xl bg-white bg-opacity-50 backdrop-blur-sm hover:bg-opacity-80 transition-all`}
                                                                        >
                                                                            <Icon className={`w-6 h-6 ${section.textColor} mb-2`} />
                                                                            <div className={`font-semibold ${section.textColor} text-sm mb-1`}>{value.title}</div>
                                                                            <div className={`${section.textColor} opacity-70 text-xs`}>{value.desc}</div>
                                                                        </motion.div>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                        {/* Mobile Illustration Integration - Hidden as requested */}
                                                        <div className="hidden lg:hidden mt-8 mb-4 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                                                            {getIllustration()}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Illustration Panel - Hidden on mobile, visible on desktop */}
                    <motion.div
                        className="hidden lg:block w-full lg:w-[45%] rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-12 shadow-2xl border border-gray-200"
                        layout
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                {getIllustration()}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}