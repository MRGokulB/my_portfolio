import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="w-full bg-white border-b border-black">
      <div className="p-8 md:p-12 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8 items-end bg-surface">
        <div>
          <h2 className="heading-display !mb-0 text-5xl md:text-7xl uppercase text-black">
            Commit <br className="hidden md:block" />History
          </h2>
        </div>
        <div className="text-xl font-medium text-secondary max-w-md">
          Professional journey structured as a rigorous timeline of contributions and architectural decisions.
        </div>
      </div>

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
            <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between group-hover:border-white transition-colors">
              <span className="font-mono text-xs text-secondary group-hover:text-white/80">{job.period}</span>
              <div className="mt-8 md:mt-0">
                <div className="font-serif text-2xl font-bold mb-3">
                  {job.company}
                </div>
                {job.url && (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent group-hover:text-white underline underline-offset-4 decoration-accent group-hover:decoration-white transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight strokeWidth={1.5} size={14} className="motion-safe:transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="md:col-span-9 p-8 md:p-12 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="font-display text-3xl font-black uppercase tracking-tight">
                  {job.position}
                </h3>
                {index === 0 && (
                  <span className="px-2.5 py-0.5 border border-current text-xs font-medium self-start md:self-auto transition-colors">
                    Current
                  </span>
                )}
              </div>

              <p className="text-lg leading-relaxed mb-8 max-w-3xl text-secondary group-hover:text-white/80 transition-colors">
                {job.description}
              </p>

              <ul className="space-y-4 font-mono text-sm max-w-3xl border-t border-black group-hover:border-white pt-6 transition-colors">
                {job.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5">■</span>
                    <span className="text-secondary group-hover:text-white transition-colors">{ach}</span>
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
