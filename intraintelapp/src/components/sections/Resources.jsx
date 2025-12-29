import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Play, FileText, ArrowUpRight, Clock } from 'lucide-react';
import { resources } from '../../services/resources';

const ResourceHero = ({ resource }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'video': return Play;
            case 'guide': return BookOpen;
            default: return FileText;
        }
    };
    const Icon = getIcon(resource.type);

    return (
        <Link to={`/resources/${resource.type}/${resource.id}`} className="group relative block w-full h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Icon size={12} />
                            {resource.category}
                        </div>
                        <span className="text-slate-300 text-xs font-semibold">{resource.meta}</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                        {resource.title}
                    </h3>

                    <p className="text-slate-300 line-clamp-2 max-w-xl mb-8 text-lg">
                        {resource.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold group/btn">
                        <span className="border-b-2 border-blue-500 pb-1 group-hover/btn:border-white transition-colors">
                            Read Full Story
                        </span>
                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const ResourceListItem = ({ resource, index }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'video': return Play;
            case 'guide': return BookOpen;
            default: return FileText;
        }
    };
    const Icon = getIcon(resource.type);

    return (
        <Link
            to={`/resources/${resource.type}/${resource.id}`}
            className="group flex items-start gap-6 p-6 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 relative">
                <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {resource.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center pl-1">
                            <Play size={12} className="text-slate-900" />
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-full">{resource.category}</span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={10} />
                        <span>{resource.meta}</span>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {resource.title}
                </h4>

                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mt-4 group-hover:translate-x-2 transition-transform">
                    View <ArrowUpRight size={14} />
                </div>
            </div>
        </Link>
    );
};

export default function Resources() {
    const primaryResource = resources.find(r => r.featured) || resources[0];
    const secondaryResources = resources.filter(r => r.id !== primaryResource.id).slice(0, 3);

    return (
        <section className="relative py-24 md:py-24 bg-transparent overflow-hidden">

            {/* Background Texture - Glass/Clean */}
            {/* Clean Background - Removed blobs for cleaner look */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-[-1]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-6">
                            <BookOpen size={14} className="text-slate-600" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Knowledge Base</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Latest Intelligence.
                        </h2>
                    </div>

                    <Link to="/resources" className="hidden md:flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        View Archive <ArrowRight size={18} />
                    </Link>
                </motion.div>

                {/* Main Grid: Hero + Feed */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left: Hero Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <ResourceHero resource={primaryResource} />
                    </motion.div>

                    {/* Right: Intel Feed */}
                    <div className="flex flex-col gap-4">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pl-6">Recent Updates</div>
                        {secondaryResources.map((resource, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <ResourceListItem resource={resource} index={idx} />
                            </motion.div>
                        ))}

                        <div className="mt-8 pl-6 md:hidden">
                            <Link to="/resources" className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                View Archive <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
