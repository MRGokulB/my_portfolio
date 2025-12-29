import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layers, Shield, Zap, Brain, ArrowRight, CheckCircle } from 'lucide-react';

const solutions = [
    {
        icon: Layers,
        title: "End-to-End Platform",
        description: "The only complete solution. From data connectivity to strategic insights—one platform, one contract, zero integration headaches.",
        metric: "30%",
        metricLabel: "Lower TCO"
    },
    {
        icon: Brain,
        title: "Enterprise Intelligence",
        description: "We don't just search docs. We connect the dots across every silo to reveal patterns, risks, and opportunities hidden in your systems.",
        metric: "100%",
        metricLabel: "Transparency"
    },
    {
        icon: Zap,
        title: "Fully Customized",
        description: "AI trained on YOUR terminology, workflows, and history. No generic 'one-size-fits-all' models that fail to understand your business.",
        metric: "95%+",
        metricLabel: "Accuracy"
    },
    {
        icon: Shield,
        title: "Strategic Impact",
        description: "Combine proprietary data with specialized agents. Unlock competitive intelligence and answers grounded in your reality.",
        metric: "10x",
        metricLabel: "Faster Insights"
    }
];

const Card = ({ item, index }) => {
    return (
        <motion.div
            className="sticky top-32 mb-8 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50 overflow-hidden group hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
                zIndex: index,
                top: `calc(120px + ${index * 20}px)`
            }}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 p-3 rounded-xl bg-blue-50 text-blue-600">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-6">
                        {item.description}
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-blue-600">{item.metric}</span>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.metricLabel}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TheSolution = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax Effect: Move image up as user scrolls down
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-0%"]);

    return (
        <section ref={containerRef} className="relative py-20 px-6 lg:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">

                    {/* Stacked Cards (Left on Desktop) */}
                    <div className="relative min-h-[80vh] order-2 lg:order-1">
                        {solutions.map((solution, index) => (
                            <Card key={index} item={solution} index={index} />
                        ))}
                    </div>

                    {/* Sticky Header (Right on Desktop) */}
                    <div className="lg:sticky lg:top-32 lg:h-fit order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-subtitle">
                                The Solution
                            </span>
                            <h2 className="section-title">
                                One platform. <br />
                                <span className="section-title-highlight">Infinite possibilities.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Most tools just search documents. We transform your enterprise data into strategic intelligence with full transparency, customization, and control.
                            </p>

                            <div className="space-y-4 mb-10">
                                {["Single Integrated Platform", "Connecting the Dots", "Zero Hallucinations"].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500" />
                                        <span className="text-slate-700">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                onClick={() => navigate('/features')}
                                whileHover={{ x: 5 }}
                                className="group flex items-center gap-3 text-blue-600 font-semibold mb-12"
                            >
                                Compare vs Competitors
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>

                            {/* Visual Placeholder */}
                            <div className="aspect-video rounded-2xl relative overflow-hidden bg-blue-50/30 shadow-[inset_0_2px_20px_rgba(37,99,235,0.05)] border border-blue-100">
                                <motion.img
                                    style={{ y }}
                                    src="/assets/ai_agents_macro_neurons.png"
                                    alt="IntraIntel Unified Intelligence Core"
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
                                />
                                {/* Inner Shadow for 'Window' Effect */}
                                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(37,99,235,0.06)] z-10 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheSolution;