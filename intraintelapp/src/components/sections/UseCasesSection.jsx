import React, { useRef } from 'react';
import { motion, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

const caseStudies = [
    {
        id: "01",
        industry: "Healthcare",
        title: "The Trial That Recruited Itself",
        hook: "Values hidden in unstructured data.",
        challenge: "A clinical research team was drowning in EHR data, manually screening patients across 8 disconnected systems.",
        transformation: "Our Clinical Agent connected every data source, scanning structured and unstructured records to surface perfect matches.",
        results: ["Recruitment time halved", "93% matching accuracy", "Zero manual screening"],
        image: "/assets/light_medical_dna.png",
        color: "blue",
        texture: "/assets/texture_hex_white.png"
    },
    {
        id: "02",
        industry: "Manufacturing",
        title: "The Factory That Stopped Breaking",
        hook: "Predicting failure before it happens.",
        challenge: "Quality data was scattered across MES, sensors, and maintenance logs. Root cause analysis took weeks.",
        transformation: "Our Quality Agent unified 15 facilities into a single intelligence layer, predicting failures before they happened.",
        results: ["$4.2M saved annually", "60% faster analysis", "Predictive maintenance"],
        image: "/assets/light_factory_automated.png",
        color: "amber",
        texture: "/assets/texture_circuit_white.png"
    },
    {
        id: "03",
        industry: "Enterprise",
        title: "The Proposal That Wrote Itself",
        hook: "Scaling expertise instantly.",
        challenge: "Teams spent 60-80 hours per RFP, hunting through 20,000 documents. Win rate: 35%.",
        transformation: "Our RFP Agent learned from every past bid, auto-generating compliant, competitive proposals.",
        results: ["75% time reduction", "Win rate jumped to 50%", "$1.5M revenue boost"],
        image: "/assets/light_ai_nexus_macro.png",
        color: "indigo",
        texture: "/assets/texture_mesh_white.png"
    }
];

const UseCasesSection = () => {
    return (
        <section className="py-24 md:py-24 relative overflow-visible bg-transparent">
            {/* Transparent background - content floats on page bg */}

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header - Strict Global Consistency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        CASE STUDIES
                    </motion.span>
                    <h2 className="section-title mb-4 tracking-tight">
                        Real Problems. <span className="section-title-highlight">Real Solutions.</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        See how we transform chaos into competitive advantage.
                    </p>
                </motion.div>

                {/* Timeline Cards */}
                <div className="relative space-y-32">
                    {/* Vertical Connecting Line - Subtle Gradient */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent md:-translate-x-1/2 z-0" />

                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const CaseStudyCard = ({ study, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`relative flex gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Timeline Node - Pulsing */}
            <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center`}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-white border-4 border-slate-900 relative z-20 shadow-lg"
                />
                {/* Pulse ring */}
                <motion.div
                    className="absolute w-12 h-12 rounded-full bg-blue-500/20 z-10"
                    animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>

            {/* Content Card with Scroll Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`
                    pl-16 md:pl-0 md:w-[calc(50%-4rem)] w-full
                    ${isEven ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}
                `}
            >
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-100">

                    {/* Subtle Texture Background */}
                    <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-multiply">
                        <img
                            src={study.texture}
                            alt=""
                            className="w-full h-full object-cover grayscale"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                    </div>

                    {/* Image Header with Overlay */}
                    <div className="h-64 relative overflow-hidden z-10">
                        <motion.img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover origin-bottom"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = '#f8fafc' }}
                        />
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur text-slate-900 uppercase tracking-widest shadow-sm">
                                {study.industry}
                            </span>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{study.title}</h3>
                            <span className="text-4xl font-black text-slate-100 hidden md:block group-hover:text-slate-200 transition-colors">{study.id}</span>
                        </div>

                        <p className="text-slate-500 italic mb-8 border-l-2 border-slate-200 pl-4">"{study.hook}"</p>

                        <div className="grid gap-6 mb-8">
                            <div className="relative pl-4 border-l-2 border-slate-200">
                                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Challenge</span>
                                <p className="text-slate-600 text-sm">{study.challenge}</p>
                            </div>
                            <div className="relative pl-4 border-l-2 border-blue-500">
                                <span className="text-[10px] font-bold text-blue-600 uppercase block mb-1">Impact</span>
                                <p className="text-slate-900 text-sm font-medium">{study.transformation}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {study.results.map((r, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700"
                                    whileHover={{ scale: 1.05, backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
                                >
                                    <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                                    <span>{r}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default UseCasesSection;
