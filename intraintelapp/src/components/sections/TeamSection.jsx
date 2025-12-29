import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { aboutData } from '../../data/intraintel';

const TeamSection = ({ team = aboutData.team }) => {
    const [activeMember, setActiveMember] = useState(team[0]);

    return (
        <section className="py-20 md:py-20 px-6 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - Matching TeamCarousel Style */}
                <div className="text-center mb-16 max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <div className="section-subtitle px-4 py-2 rounded-full bg-blue-50 inline-block">
                            Our Leadership
                        </div>
                    </motion.div>

                    <h2 className="section-title">
                        <span className="text-text-main">Meet the minds</span>
                        <br />
                        <span className="section-title-highlight">
                            behind the innovation
                        </span>
                    </h2>

                    <p className="text-xl leading-relaxed text-text-medium">
                        Brilliant minds driving the future of AI and data intelligence
                    </p>
                </div>

                {/* Desktop Layout (Interactive Split View) */}
                <div className="hidden lg:grid grid-cols-12 gap-20 items-start">
                    {/* Left Column: Interactive List */}
                    <div className="col-span-4 flex flex-col">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setActiveMember(member)}
                                className={`group relative py-8 border-b border-slate-100 cursor-pointer transition-colors duration-300 ${activeMember.name === member.name ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className={`text-3xl font-light mb-2 transition-colors duration-300 ${activeMember.name === member.name ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                                            }`}>
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                                            {member.role}
                                        </p>
                                    </div>
                                    <motion.div
                                        animate={{
                                            opacity: activeMember.name === member.name ? 1 : 0,
                                            x: activeMember.name === member.name ? 0 : -10
                                        }}
                                    >
                                        <ArrowUpRight className="w-6 h-6 text-slate-900" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Preview */}
                    <div className="col-span-8 sticky top-32 min-h-[500px] relative">
                        {/* Grid Background Pattern */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-3xl overflow-hidden"
                            style={{
                                backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeMember.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative p-8"
                            >
                                <div className="flex flex-row gap-8 items-start">
                                    {/* Image Card */}
                                    <motion.div
                                        className="relative flex-shrink-0 w-56 group"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] border border-white/50 bg-white z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                                            <img
                                                src={activeMember.image}
                                                alt={activeMember.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        <div className="absolute top-4 -right-4 w-full h-full bg-blue-50/50 rounded-2xl -z-10 border border-blue-100/50" />

                                        <div className="mt-6 flex gap-3 justify-start">
                                            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all duration-300">
                                                <Linkedin className="w-4 h-4" />
                                            </button>
                                            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all duration-300">
                                                <Twitter className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100/50 mb-4">
                                                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                                                    {activeMember.type === 'leadership' ? 'Leadership' : 'Advisor'}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-light text-slate-900 mb-2">
                                                {activeMember.name}
                                            </h3>
                                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-6">
                                                {activeMember.role}
                                            </p>

                                            <div className="prose prose-lg prose-slate max-w-none">
                                                <p className="text-slate-600 font-light text-lg leading-relaxed text-justify">
                                                    {activeMember.bio}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Layout (Vertical Stack) */}
                <div className="lg:hidden space-y-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-40 h-40 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-blue-50 transform rotate-6" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                                    />
                                </div>

                                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                                    {member.type === 'leadership' ? 'Leadership' : 'Advisor'}
                                </span>

                                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-6">
                                    {member.role}
                                </p>

                                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                                    {member.bio}
                                </p>

                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Twitter className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
