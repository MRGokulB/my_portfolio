import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Search,
    BarChart3,
    Shield,
    CheckCircle2,
    FileSearch,
    Brain,
    Lock
} from 'lucide-react';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [typedText, setTypedText] = useState('');

    const scrollContainerRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

    const tabs = [
        {
            id: 'search',
            icon: Search,
            title: 'Natural Language Search',
            subtitle: 'Ask questions in plain English',
            number: '01',
            duration: 14000 // 14s for the full search demo
        },
        {
            id: 'analyze',
            icon: BarChart3,
            title: 'Real-Time Analysis',
            subtitle: 'Instant insights from your data',
            number: '02',
            duration: 8000 // 8s for others
        },
        {
            id: 'secure',
            icon: Shield,
            title: 'Security Architecture',
            subtitle: 'Protected within your boundaries',
            number: '03',
            duration: 8000
        }
    ];

    const demoQueries = [
        "Show me all contracts expiring this quarter",
        "What are the top security concerns from last week's reports?",
        "Summarize customer feedback from the past month"
    ];

    const demoResponse = {
        summary: "I found 23 contracts expiring in Q1 2025 across your AWS S3 and SharePoint storage. Here's a breakdown:",
        insights: [
            { label: "Total Contracts", value: "23", icon: FileSearch },
            { label: "Total Value", value: "$2.4M", icon: BarChart3 },
            { label: "Priority Renewals", value: "8", icon: Brain }
        ],
        sources: [
            { name: "contracts_2024.pdf", location: "AWS S3 / Legal", date: "Updated 2 days ago" },
            { name: "client_agreements", location: "SharePoint / Sales", date: "Updated 5 days ago" },
            { name: "vendor_contracts.xlsx", location: "Google Drive / Finance", date: "Updated 1 week ago" }
        ]
    };

    const analysisSteps = [
        { icon: FileSearch, label: "Scan Documents", value: "2,847 files" },
        { icon: Brain, label: "AI Processing", value: "< 2 sec" },
        { icon: CheckCircle2, label: "Results Ready", value: "23 matches" },
        { icon: Shield, label: "Data Secure", value: "100%" }
    ];

    const securitySteps = [
        {
            step: 1,
            title: "Query Initiated",
            description: "User submits search query",
            status: "complete"
        },
        {
            step: 2,
            title: "Local Processing",
            description: "AI processes within your infrastructure",
            status: "complete"
        },
        {
            step: 3,
            title: "Data Stays Put",
            description: "No data leaves your security perimeter",
            status: "complete"
        },
        {
            step: 4,
            title: "Results Delivered",
            description: "Encrypted results returned to user",
            status: "complete"
        }
    ];

    // Handle Tab Rotation with dynamic duration
    useEffect(() => {
        if (!isInView) return; // Pause rotation when off-screen

        const currentDuration = tabs[activeTab].duration;

        const timer = setTimeout(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, currentDuration);

        return () => clearTimeout(timer);
    }, [activeTab, isInView]);

    // Reset state when tab changes
    useEffect(() => {
        setSearchQuery('');
        setShowResults(false);
        setIsProcessing(false);
        setTypedText('');
    }, [activeTab]);

    // Complex Animation Sequence for Search Tab
    useEffect(() => {
        if (activeTab === 0 && isInView) {
            let typingInterval;
            let processingTimeout;
            let resultsTimeout;
            let scrollTimeout;

            // 1. Start Typing (at 1s)
            const startTyping = setTimeout(() => {
                const queryToType = demoQueries[0];
                let charIndex = 0;

                typingInterval = setInterval(() => {
                    if (charIndex <= queryToType.length) {
                        setSearchQuery(queryToType.slice(0, charIndex));
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);

                        // 2. Start Processing (immediately after typing)
                        setIsProcessing(true);

                        // Scroll to show processing
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollTo({
                                top: scrollContainerRef.current.scrollHeight,
                                behavior: 'smooth'
                            });
                        }

                        // 3. Show Results (after 2s processing)
                        processingTimeout = setTimeout(() => {
                            setIsProcessing(false);
                            setShowResults(true);
                            setTypedText('');

                            // 4. Scroll to show results
                            scrollTimeout = setTimeout(() => {
                                if (scrollContainerRef.current) {
                                    scrollContainerRef.current.scrollTo({
                                        top: scrollContainerRef.current.scrollHeight,
                                        behavior: 'smooth'
                                    });
                                }
                            }, 100);

                        }, 2000);
                    }
                }, 50); // Typing speed
            }, 1000);

            return () => {
                clearTimeout(startTyping);
                clearInterval(typingInterval);
                clearTimeout(processingTimeout);
                clearTimeout(resultsTimeout);
                clearTimeout(scrollTimeout);
            };
        }
    }, [activeTab, isInView]);

    // Typewriter effect for results summary text
    useEffect(() => {
        if (showResults && activeTab === 0 && typedText.length < demoResponse.summary.length) {
            const timeout = setTimeout(() => {
                setTypedText(demoResponse.summary.slice(0, typedText.length + 1));
            }, 20); // Faster typing for results
            return () => clearTimeout(timeout);
        }
    }, [showResults, typedText, activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleDemoSearch = (query) => {
        setSearchQuery(query);
        setIsProcessing(true);
        setShowResults(false);
        setTypedText('');

        setTimeout(() => {
            setIsProcessing(false);
            setShowResults(true);
        }, 2000);
    };

    return (
        <section id="how-it-works" ref={containerRef} className="relative py-20 px-6 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-6 max-w-xs mx-auto">
                        <motion.div
                            className="h-px flex-1"
                            style={{ backgroundColor: 'var(--border-muted, rgba(15,23,42,0.1))' }}
                        />
                        <span
                            className="text-xs font-medium tracking-[0.25em] uppercase"
                            style={{ color: 'var(--text-medium, #6C757D)' }}
                        >
                            Interactive Demo
                        </span>
                        <motion.div
                            className="h-px flex-1"
                            style={{ backgroundColor: 'var(--border-muted, rgba(15,23,42,0.1))' }}
                        />
                    </div>

                    <h2 className="section-title">
                        See{' '}
                        <span className="section-title-highlight">
                            How It Works
                        </span>
                    </h2>

                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium, #6C757D)" }}>
                        Experience the power of IntraIntel.AI with our interactive demo
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Vertical Navigation */}
                    <div className="lg:col-span-4 space-y-4">
                        {tabs.map((tab, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(index)}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 relative overflow-hidden group ${isActive ? 'bg-white shadow-xl shadow-blue-900/5' : 'hover:bg-white/50'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-tab-border"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                                        />
                                    )}

                                    {/* Progress Bar Background for Active State */}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 h-1 bg-blue-100 w-full rounded-b-2xl overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-600"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: tab.duration / 1000, ease: "linear" }}
                                            />
                                        </div>
                                    )}

                                    <div className="flex items-start gap-4 relative z-10">
                                        <span className={`text-sm font-bold tracking-wider uppercase mt-1 ${isActive ? 'text-blue-600' : 'text-slate-400'
                                            }`}>
                                            {tab.number}
                                        </span>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'
                                                }`}>
                                                {tab.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-slate-600' : 'text-slate-400'
                                                }`}>
                                                {tab.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Interactive Demo Window */}
                    <div className="lg:col-span-8">
                        {/* Unique Window Style Container */}
                        <div className="relative rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 p-[1px] shadow-2xl shadow-blue-900/20">
                            <div className="relative rounded-2xl bg-slate-900 overflow-hidden h-full">
                                {/* Window Chrome */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900/90 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2 z-20">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-[10px] font-medium text-slate-400 flex items-center gap-2 border border-white/5">
                                        <Lock className="w-2.5 h-2.5" />
                                        intraintel.ai/secure-demo
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div
                                    className={`relative bg-slate-50 mt-10 transition-all duration-700 ease-in-out ${activeTab === 0 ? 'min-h-[450px] md:min-h-[650px]' : 'min-h-[400px] md:min-h-[500px]'
                                        }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {activeTab === 0 ? (
                                            <motion.div
                                                key="search-tab"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.02 }}
                                                transition={{ duration: 0.4 }}
                                                ref={scrollContainerRef}
                                                className="h-full bg-white flex flex-col overflow-y-auto scroll-smooth relative"
                                            >
                                                {/* Search UI */}
                                                <div className="flex-1 p-4 md:p-8 flex flex-col justify-center max-w-3xl mx-auto w-full">
                                                    <div className="text-center mb-8">
                                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                                            <Search className="w-6 h-6 text-blue-600" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Enterprise Search</h3>
                                                        <p className="text-sm text-slate-500">Ask questions, get verified answers.</p>
                                                    </div>

                                                    <div className="relative mb-6 group">
                                                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                        <div className="relative">
                                                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                            <input
                                                                type="text"
                                                                value={searchQuery}
                                                                readOnly
                                                                placeholder="e.g., Show me contracts expiring in Q1..."
                                                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 shadow-lg shadow-blue-900/5 text-base focus:outline-none focus:border-blue-500 transition-colors bg-white font-medium text-slate-700"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2 justify-center">
                                                        {demoQueries.map((query, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => handleDemoSearch(query)}
                                                                className="px-3 py-1.5 rounded-lg bg-slate-50 text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100"
                                                            >
                                                                {query}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* Results Preview */}
                                                    <AnimatePresence>
                                                        {(isProcessing || showResults) && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 20 }}
                                                                className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100"
                                                            >
                                                                {isProcessing ? (
                                                                    <div className="flex items-center gap-3 text-slate-500">
                                                                        <Brain className="w-5 h-5 animate-pulse text-blue-500" />
                                                                        <span>Analyzing 2.4M documents...</span>
                                                                    </div>
                                                                ) : (
                                                                    <div className="space-y-4">
                                                                        <div className="flex items-start gap-4">
                                                                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                                                <Brain className="w-5 h-5 text-blue-600" />
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-slate-900 leading-relaxed text-sm md:text-base">
                                                                                    {typedText}
                                                                                    <motion.span
                                                                                        animate={{ opacity: [1, 0] }}
                                                                                        transition={{ duration: 0.5, repeat: Infinity }}
                                                                                    >
                                                                                        |
                                                                                    </motion.span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        {showResults && (
                                                                            <div className="mt-4 pl-12 space-y-4">
                                                                                {/* Insights Grid */}
                                                                                <div className="grid grid-cols-3 gap-3">
                                                                                    {demoResponse.insights.map((insight, idx) => (
                                                                                        <motion.div
                                                                                            key={idx}
                                                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                                                            animate={{ opacity: 1, scale: 1 }}
                                                                                            transition={{ delay: idx * 0.1 }}
                                                                                            className="p-2 rounded-lg bg-white border border-slate-100 shadow-sm text-center"
                                                                                        >
                                                                                            <div className="text-base font-bold text-slate-900">{insight.value}</div>
                                                                                            <div className="text-[10px] text-slate-500">{insight.label}</div>
                                                                                        </motion.div>
                                                                                    ))}
                                                                                </div>

                                                                                {/* Sources List */}
                                                                                <div>
                                                                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Sources Used</div>
                                                                                    <div className="space-y-2">
                                                                                        {demoResponse.sources.map((source, idx) => (
                                                                                            <motion.div
                                                                                                key={idx}
                                                                                                initial={{ opacity: 0, x: -10 }}
                                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                                                                                className="flex items-center gap-3 p-2 rounded-lg bg-white border border-slate-100"
                                                                                            >
                                                                                                <FileSearch className="w-3.5 h-3.5 text-slate-400" />
                                                                                                <div className="flex-1 min-w-0">
                                                                                                    <div className="text-xs font-medium text-slate-900 truncate">{source.name}</div>
                                                                                                    <div className="text-[10px] text-slate-500">{source.location} • {source.date}</div>
                                                                                                </div>
                                                                                            </motion.div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </motion.div>
                                        ) : activeTab === 1 ? (
                                            <motion.div
                                                key="analyze-tab"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.05 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 bg-white p-6 md:p-10 flex flex-col justify-center"
                                            >
                                                <div className="text-center mb-8">
                                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                        <BarChart3 className="w-7 h-7 text-teal-600" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Real-Time Analysis</h3>
                                                    <p className="text-sm text-slate-500">Processing pipeline visualization</p>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
                                                    {analysisSteps.map((step, index) => {
                                                        const Icon = step.icon;
                                                        return (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                                                            >
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                        <Icon className="w-4 h-4 text-blue-600" />
                                                                    </div>
                                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Step 0{index + 1}</span>
                                                                </div>
                                                                <div className="text-lg font-bold text-slate-900 mb-0.5">{step.value}</div>
                                                                <div className="text-xs text-slate-500">{step.label}</div>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="secure-tab"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.05 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 bg-white p-6 md:p-10 flex flex-col justify-center"
                                            >
                                                <div className="text-center mb-8">
                                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                        <Shield className="w-7 h-7 text-indigo-600" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Zero-Trust Security</h3>
                                                    <p className="text-sm text-slate-500">Enterprise-grade protection</p>
                                                </div>

                                                <div className="max-w-xl mx-auto w-full space-y-3">
                                                    {securitySteps.map((step, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                                                        >
                                                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-green-500/20">
                                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="font-semibold text-sm text-slate-900">{step.title}</div>
                                                                <div className="text-xs text-slate-500">{step.description}</div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
