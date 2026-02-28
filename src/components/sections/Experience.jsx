import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="w-full bg-white border-b border-black">
            {/* Header */}
            <div className="p-8 md:p-12 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8 items-end bg-surface">
                <div>
                    <span className="label-category !mb-4">03. The Path</span>
                    <h2 className="heading-display !mb-0 text-5xl md:text-7xl">
                        Commit <br className="hidden md:block" />History
                    </h2>
                </div>
                <div className="text-xl font-medium text-secondary max-w-md">
                    Professional journey structured as a rigorous timeline of contributions & architectural decisions.
                </div>
            </div>

            {/* Tabular Experience Grid */}
            <div className="flex flex-col">
                {experience.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-12 border-b border-black last:border-b-0 group hover:bg-black hover:text-white transition-colors duration-500"
                    >
                        {/* Meta: Dates & Company */}
                        <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
                            <span className="font-mono text-sm uppercase tracking-widest">{job.period}</span>
                            <div className="mt-8 md:mt-0 font-serif text-2xl group-hover:text-white transition-colors">
                                {job.url ? (
                                    <a href={job.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors w-fit">
                                        {job.company} <ArrowUpRight strokeWidth={1.5} size={20} className="hidden group-hover:block" />
                                    </a>
                                ) : (
                                    job.company
                                )}
                            </div>
                        </div>

                        {/* Details: Role & Impact */}
                        <div className="md:col-span-9 p-8 md:p-12 flex flex-col">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <h3 className="font-display text-3xl font-black uppercase tracking-tight">
                                    {job.position}
                                </h3>
                                {index === 0 && (
                                    <span className="px-3 py-1 bg-accent text-white font-mono text-xs uppercase tracking-widest self-start md:self-auto">
                                        Current
                                    </span>
                                )}
                            </div>

                            <p className="text-lg leading-relaxed mb-8 max-w-3xl text-secondary group-hover:text-gray-300 transition-colors">
                                {job.description}
                            </p>

                            <ul className="space-y-4 font-mono text-sm max-w-3xl border-t border-black group-hover:border-white/20 pt-6 transition-colors">
                                {job.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="text-accent shrink-0 mt-0.5">■</span>
                                        <span className="group-hover:text-gray-200 transition-colors">{ach}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
