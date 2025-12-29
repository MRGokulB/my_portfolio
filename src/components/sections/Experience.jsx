import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { GitCommit, GitBranch } from 'lucide-react';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="relative py-32 bg-transparent">
            <div className="container-custom max-w-5xl px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex items-center gap-4"
                >
                    <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
                        <GitBranch size={28} />
                    </div>
                    <div>
                        <span className="text-accent-blue font-mono uppercase tracking-widest text-sm block">03. The Path</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Commit History</h2>
                    </div>
                </motion.div>

                <div className="relative ml-4 md:ml-12 border-l-2 border-dashed border-gray-300 dark:border-gray-800 space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-16 group"
                        >
                            {/* Timeline Dot (Commit Node) */}
                            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white dark:bg-dark-950 border-4 border-gray-400 dark:border-gray-700 group-hover:border-accent-blue group-hover:scale-110 transition-all duration-300 z-10" />

                            {/* Content Card */}
                            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0f0f15]/60 backdrop-blur-md border border-gray-200 dark:border-white/5 hover:border-accent-blue/50 transition-all duration-300 shadow-xl shadow-gray-100/50 dark:shadow-none">

                                {/* Header: Position & Company */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                            {job.position}
                                            {index === 0 && <span className="px-2 py-0.5 rounded-full bg-accent-green/10 dark:bg-accent-green/20 text-accent-green text-xs font-mono border border-accent-green/30">Latest</span>}
                                        </h3>
                                        <div className="text-accent-blue font-mono mt-1">@ {job.company}</div>
                                    </div>
                                    <div className="font-mono text-sm text-gray-800 dark:text-gray-400 bg-gray-200 dark:bg-white/5 px-3 py-1 rounded-md border border-gray-400 dark:border-white/5 whitespace-nowrap">
                                        {job.period}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6 font-light">
                                    {job.description}
                                </p>

                                {/* Tech & Achievements (Commit Messages) */}
                                <div className="space-y-3">
                                    {job.achievements.map((ach, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400 font-mono group/item hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                                            <GitCommit size={16} className="mt-1 text-gray-400 dark:text-gray-600 group-hover/item:text-accent-purple transition-colors shrink-0" />
                                            <span>{ach}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
