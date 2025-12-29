import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const journeyMilestones = [
    {
        id: 1,
        year: "2020",
        title: "The Vision",
        description: "IntraIntel.AI was founded with a singular mission: democratize AI-driven insights while ensuring enterprise-grade security. Our founders recognized that organizations were forced to choose between innovation and data sovereignty.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop",
        achievement: "Company Founded",
        detail: "San Francisco, CA"
    },
    {
        id: 2,
        year: "2021",
        title: "First Enterprise Client",
        description: "Secured our first major enterprise partnership in the healthcare sector, validating our zero-trust AI architecture. This milestone proved that secure, on-premise AI solutions could deliver breakthrough insights.",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=800&fit=crop",
        achievement: "Healthcare Breakthrough",
        detail: "Series A Funding"
    },
    {
        id: 3,
        year: "2022",
        title: "Platform Evolution",
        description: "Launched multi-cloud support for AWS, Azure, and GCP, enabling seamless data integration across disparate systems. Our platform processed over 1 billion queries while maintaining 100% data residency.",
        image: "/assets/timeline_2022_v6.png",
        achievement: "Multi-Cloud Launch",
        detail: "1B+ Queries"
    },
    {
        id: 4,
        year: "2023",
        title: "Global Expansion",
        description: "Expanded to serve Fortune 500 companies across finance, government, and research sectors. Achieved SOC 2 Type II and HIPAA compliance, establishing new standards for AI security.",
        image: "/assets/timeline_2023.png",
        achievement: "400+ Enterprise Clients",
        detail: "SOC 2 Certified"
    },
    {
        id: 5,
        year: "2024",
        title: "The Future",
        description: "Pioneering next-generation AI capabilities with advanced natural language processing and real-time analytics. Our vision: AI intelligence accessible to everyone, secured by design.",
        image: "/assets/timeline_2024.png",
        achievement: "Innovation Continues",
        detail: "Next-Gen AI"
    }
];

const TimelineCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const totalSlides = journeyMilestones.length;

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        if (!isAutoPlay || !isInView) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlay, totalSlides, isInView]);

    const currentMilestone = journeyMilestones[currentIndex];
    const nextIndex = (currentIndex + 1) % totalSlides;

    return (
        <section ref={containerRef} className="relative py-20 px-6 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            className="h-px flex-1 bg-border-muted"
                        />
                        <span
                            className="section-subtitle !mb-0"
                        >
                            Timeline
                        </span>
                        <motion.div
                            className="h-px flex-1 bg-border-muted"
                        />
                    </div>

                    <h2 className="section-title text-center">
                        Our Journey
                    </h2>
                </motion.div>

                {/* Main Timeline Container */}
                <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-start">

                    {/* Mobile: Horizontal Timeline Navigation */}
                    <div className="md:hidden w-full overflow-x-auto pb-4 no-scrollbar">
                        <div className="flex gap-4 px-2">
                            {journeyMilestones.map((milestone, index) => {
                                const isActive = index === currentIndex;
                                return (
                                    <button
                                        key={milestone.id}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setIsAutoPlay(false);
                                        }}
                                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? 'bg-brand-blue text-white shadow-md'
                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                            }`}
                                    >
                                        {milestone.year}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop: Vertical Timeline Navigation */}
                    <div className="hidden md:block md:col-span-3">
                        <div className="sticky top-32">
                            {/* Timeline Track */}
                            <div className="relative">
                                {/* Vertical Line */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-px bg-border-muted"
                                />

                                {/* Active Progress Line */}
                                <motion.div
                                    className="absolute left-0 top-0 w-px origin-top bg-brand-blue"
                                    style={{
                                        height: `${((currentIndex + 1) / totalSlides) * 100}%`
                                    }}
                                    initial={false}
                                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                />

                                {/* Year Markers */}
                                <div className="space-y-12 relative">
                                    {journeyMilestones.map((milestone, index) => {
                                        const isActive = index === currentIndex;
                                        const isPassed = index <= currentIndex;

                                        return (
                                            <motion.button
                                                key={milestone.id}
                                                onClick={() => {
                                                    setCurrentIndex(index);
                                                    setIsAutoPlay(false);
                                                }}
                                                className="flex items-center gap-4 w-full text-left group"
                                                whileHover={{ x: 4 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {/* Dot */}
                                                <div className="relative flex-shrink-0">
                                                    <motion.div
                                                        className={`w-2 h-2 rounded-full -ml-[3.5px] ${isPassed ? 'bg-brand-blue' : 'bg-border-muted'
                                                            }`}
                                                        style={{
                                                            border: isActive ? '3px solid var(--surface-2, #f8fafc)' : 'none',
                                                            boxShadow: isActive ? '0 0 0 1px var(--brand-blue, #0D6EFD)' : 'none'
                                                        }}
                                                        animate={{
                                                            scale: isActive ? 1.5 : 1
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>

                                                {/* Year & Title */}
                                                <div className="flex-1 min-w-0">
                                                    <div
                                                        className={`text-2xl font-light transition-colors duration-300 ${isActive ? 'text-brand-blue' : 'text-text-medium'
                                                            }`}
                                                    >
                                                        {milestone.year}
                                                    </div>
                                                    <AnimatePresence>
                                                        {isActive && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="text-sm mt-1 text-text-medium">
                                                                    {milestone.achievement}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Page Counter */}
                            <div className="mt-12 pt-8 border-t border-muted">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-light text-brand-blue">
                                        {String(currentIndex + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-text-light">
                                        / {String(totalSlides).padStart(2, '0')}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                                    className={`text-xs mt-2 transition-colors ${isAutoPlay ? 'text-brand-blue' : 'text-text-light'
                                        }`}
                                >
                                    {isAutoPlay ? 'Playing' : 'Paused'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Area */}
                    <div className="w-full md:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                                className="relative"
                            >
                                {/* Large Year Watermark */}
                                <div className="absolute -top-8 md:-top-16 -right-4 md:-right-8 text-[6rem] md:text-[15rem] font-light leading-none select-none pointer-events-none opacity-5 text-brand-blue">
                                    {currentMilestone.year}
                                </div>

                                {/* Content Grid */}
                                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                    {/* Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="relative group"
                                    >
                                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={currentMilestone.image}
                                                alt={currentMilestone.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Floating Detail Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="absolute -bottom-4 -right-4 px-6 py-3 rounded-full backdrop-blur-md bg-white/95 border border-muted shadow-lg"
                                        >
                                            <span className="text-xs font-medium tracking-wider text-brand-blue">
                                                {currentMilestone.detail}
                                            </span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Text Content */}
                                    <div className="flex flex-col justify-center pt-8 md:pt-0">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        >
                                            <div className="text-xs font-medium tracking-[0.2em] uppercase mb-4 text-text-medium">
                                                {currentMilestone.achievement}
                                            </div>

                                            <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-text-main">
                                                {currentMilestone.title}
                                            </h3>

                                            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-text-medium">
                                                {currentMilestone.description}
                                            </p>

                                            {/* Next Preview */}
                                            <motion.button
                                                onClick={() => {
                                                    setCurrentIndex(nextIndex);
                                                    setIsAutoPlay(false);
                                                }}
                                                className="inline-flex items-center gap-2 group"
                                                whileHover={{ x: 4 }}
                                            >
                                                <span className="text-sm font-medium text-brand-blue">
                                                    Next: {journeyMilestones[nextIndex].year}
                                                </span>
                                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45 text-brand-blue" />
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineCarousel;
