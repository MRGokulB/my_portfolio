import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Shield, Zap, Play } from 'lucide-react';

const features = [
    {
        id: 1,
        icon: Search,
        title: "Deep Semantic Search",
        description: "Go beyond keywords. Our AI understands the intent behind your queries to deliver precise, relevant results from millions of documents in seconds.",
        videoPlaceholder: "bg-blue-50"
    },
    {
        id: 2,
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "Your data never leaves your infrastructure. We adhere to strict SOC2 and GDPR compliance standards, ensuring your sensitive information remains protected.",
        videoPlaceholder: "bg-indigo-50"
    },
    {
        id: 3,
        icon: Zap,
        title: "Real-Time Processing",
        description: "Get answers in milliseconds. Our optimized engine processes complex queries instantly, enabling real-time decision making for your teams.",
        videoPlaceholder: "bg-violet-50"
    }
];

const FeatureItem = ({ feature, index }) => {
    return (
        <div className="py-16 md:py-20 flex items-center justify-center sticky top-24 bg-white/80 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-7xl mx-auto px-6">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                            Capability 0{index + 1}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {feature.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                        {feature.description}
                    </p>
                </motion.div>

                {/* Visual Content (Video Placeholder) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group cursor-pointer"
                >
                    <div className={`absolute inset-0 ${feature.videoPlaceholder} transition-colors duration-500`} />

                    {/* Abstract Video UI */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
                            </div>
                        </div>
                    </div>

                    {/* Fake Controls */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                        <div className="h-1.5 flex-1 bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-white rounded-full" />
                        </div>
                        <div className="text-xs font-medium text-white">01:24</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const FeaturesSection = ({ features = defaultFeatures }) => {
    return (
        <section className="relative bg-transparent">
            <div className="py-12 text-center">
                <span className="section-subtitle">System Capabilities</span>
                <h2 className="section-title">
                    Powering the <span className="section-title-highlight">Next Generation</span>
                </h2>
            </div>

            <div className="relative">
                {features.map((feature, index) => (
                    <FeatureItem key={feature.id || index} feature={feature} index={index} />
                ))}
            </div>
        </section>
    );
};

const defaultFeatures = [
    {
        id: 1,
        icon: Search,
        title: "Deep Semantic Search",
        description: "Go beyond keywords. Our AI understands the intent behind your queries to deliver precise, relevant results from millions of documents in seconds.",
        videoPlaceholder: "bg-blue-50"
    },
    {
        id: 2,
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "Your data never leaves your infrastructure. We adhere to strict SOC2 and GDPR compliance standards, ensuring your sensitive information remains protected.",
        videoPlaceholder: "bg-indigo-50"
    },
    {
        id: 3,
        icon: Zap,
        title: "Real-Time Processing",
        description: "Get answers in milliseconds. Our optimized engine processes complex queries instantly, enabling real-time decision making for your teams.",
        videoPlaceholder: "bg-violet-50"
    }
];

export default FeaturesSection;
