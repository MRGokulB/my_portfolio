import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="w-full bg-background border-b border-black/10">
      {/* Section Header: Shruti Eyebrow + Multi-Style Display */}
      <div className="p-8 md:p-14 lg:p-16 border-b border-black/10 bg-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-0.5 bg-accent" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
            Track Record & Proven Execution
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h2 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-primary">
              Commit <span className="text-accent italic font-normal">History.</span>
            </h2>
          </div>
          <div className="md:col-span-5 text-base md:text-lg font-medium text-secondary leading-relaxed">
            A chronological timeline of production contributions, system scaling, and high-stakes architecture decisions.
          </div>
        </div>
      </div>

      {/* Experience Timeline Rows */}
      <div className="flex flex-col bg-white">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-black/10 last:border-b-0 hover:bg-surface/50 transition-colors duration-300"
          >
            {/* Left Column: Period & Company */}
            <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-black/10 text-secondary">
                    {job.period}
                  </span>
                  {index === 0 && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <div className="font-serif text-2xl md:text-3xl font-bold text-primary mt-2">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95 group/link"
                    >
                      <span>{job.company}</span>
                      <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-accent" />
                    </a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </div>
              </div>

              <div className="mt-8 text-xs font-mono text-muted uppercase tracking-wider">
                Role Index 0{index + 1}
              </div>
            </div>

            {/* Right Column: Position, Summary, and Achievements */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tight text-primary mb-4">
                  {job.position}
                </h3>

                <p className="text-base md:text-lg leading-relaxed mb-8 max-w-3xl text-secondary">
                  {job.description}
                </p>
              </div>

              {/* Achievements with Custom Stylized Accent Bullets */}
              <div className="pt-6 border-t border-black/5">
                <ul className="space-y-3.5 max-w-3xl">
                  {job.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm md:text-base text-secondary leading-normal">
                      <span className="text-accent mt-1 shrink-0 font-bold">→</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
