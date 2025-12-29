import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldAlert,
    ShieldCheck,
    Zap,
    Clock,
    Database,
    Layers,
    Check,
    X,
    ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComparisonItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* MOBILE LAYOUT (< md) - Stacked Cards */}
            <div className="md:hidden mb-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                {/* Problem Top */}
                <div className="bg-slate-50 p-8 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                        <item.problem.icon size={24} />
                    </div>
                    <div className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" /> Legacy Mode
                    </div>
                    <h3 className="text-2xl font-light text-slate-900 mb-3">{item.problem.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.problem.desc}</p>
                </div>

                {/* Solution Bottom */}
                <div className="bg-white p-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                        <item.solution.icon size={24} />
                    </div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" /> IntraIntel Active
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">{item.solution.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.solution.desc}</p>
                </div>
            </div>

            {/* DESKTOP LAYOUT (>= md) - Hover Interaction */}
            <div
                className="hidden md:flex relative h-[280px] rounded-3xl overflow-hidden cursor-pointer group mb-6 bg-white border border-slate-200 shadow-sm"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* LEFT SIDE (PROBLEM) */}
                <motion.div
                    className="relative bg-slate-50 overflow-hidden flex flex-col justify-center px-10 border-r border-slate-100"
                    initial={false}
                    animate={{ width: isHovered ? '35%' : '96%' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative z-10 w-full min-w-[300px]">
                        <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                            <item.problem.icon size={24} />
                        </div>
                        <div className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-600" /> Legacy Mode
                        </div>
                        <h3 className="text-3xl font-light text-slate-900 mb-2">{item.problem.title}</h3>
                        <p className="text-slate-500 max-w-sm text-sm leading-relaxed">{item.problem.desc}</p>
                    </div>

                    {/* Hover Hint Overlay - Only visible when NOT hovered */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-100/80 flex items-center justify-end px-8"
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-sm pointer-events-none">
                            See Solution <ArrowRight size={16} className="animate-pulse" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE (SOLUTION) */}
                <motion.div
                    className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden flex flex-col justify-center"
                    initial={false}
                    animate={{ width: isHovered ? '65%' : '4%' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Collapsed State (Vertical Peek) */}
                    <motion.div
                        className="absolute inset-y-0 left-0 w-full flex items-center justify-center bg-blue-600"
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="rotate-90 whitespace-nowrap text-white text-xs font-bold tracking-widest uppercase opacity-40">
                            IntraIntel Active
                        </div>
                    </motion.div>

                    {/* Expanded State Content */}
                    <motion.div
                        className="relative z-10 w-full min-w-[400px] px-10"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: isHovered ? 0.2 : 0 }}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                                <item.solution.icon size={24} />
                            </div>
                        </div>

                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600" /> IntraIntel Active
                        </div>
                        <h3 className="text-4xl font-semibold text-slate-900 mb-4">{item.solution.title}</h3>
                        <p className="text-slate-600 text-lg max-w-lg leading-relaxed">{item.solution.desc}</p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

const ComparisonSection = () => {
    const navigate = useNavigate();

    const comparisons = [
        {
            id: "integration",
            category: "Integration",
            problem: {
                title: "Data Siloed in 8+ Systems",
                desc: "Critical information is fragmented across disparate platforms, making comprehensive analysis impossible.",
                icon: Database
            },
            solution: {
                title: "Unified Intelligence Layer",
                desc: "Connects seamlessly to all your data sources, creating a single, cohesive knowledge fabric.",
                icon: Layers
            }
        },
        {
            id: "compliance",
            category: "Compliance",
            problem: {
                title: "Manual Compliance Checks",
                desc: "Reliance on human review creates bottlenecks and leaves room for costly regulatory oversights.",
                icon: ShieldAlert
            },
            solution: {
                title: "Automated Audit Trails",
                desc: "Every interaction is logged and verified in real-time, ensuring 100% compliance automatically.",
                icon: ShieldCheck
            }
        },
        {
            id: "precision",
            category: "Precision",
            problem: {
                title: "High Risk of Human Error",
                desc: "Fatigue and cognitive bias lead to inconsistencies that erode trust in key decision-making.",
                icon: X
            },
            solution: {
                title: "Zero-Touch Accuracy",
                desc: "Deterministic AI pipelines deliver precise, reproducible results at scale, eliminating variability.",
                icon: Check
            }
        },
        {
            id: "knowledge",
            category: "Knowledge Access",
            problem: {
                title: "Knowledge Hidden in Docs",
                desc: "Valuable insights are buried in PDFs and long threads, invisible to standard keyword search.",
                icon: Clock
            },
            solution: {
                title: "Instant Semantic Recall",
                desc: "Retrieve the exact paragraph or slack message you need in milliseconds using natural language.",
                icon: Zap
            }
        }
    ];

    return (
        <section className="py-24 lg:py-24 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <span className="section-subtitle text-slate-500 mb-4">
                        The Choice
                    </span>
                    <h2 className="section-title text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
                        Legacy constraints or <br />
                        <span className="font-medium text-blue-600">Intelligent freedom?</span>
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
                        Hover to see how IntraIntel transforms your enterprise capabilities.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {comparisons.map((item) => (
                        <ComparisonItem key={item.id} item={item} />
                    ))}
                </div>



            </div>
        </section>
    );
};

export default ComparisonSection;