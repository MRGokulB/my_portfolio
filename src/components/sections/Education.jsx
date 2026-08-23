import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { GraduationCap, ArrowUpRight } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="w-full bg-white border-b border-black">
      {/* Header */}
      <div className="p-8 md:p-12 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8 items-end bg-surface">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-secondary mb-6 block">04. Foundation</span>
          <h2 className="heading-display !mb-0 text-5xl md:text-7xl text-black">
            Academic <br className="hidden md:block" />Theory
          </h2>
        </div>
        <div className="text-xl font-medium text-secondary max-w-md">
          Structured learning and technical foundations shaping architectural decisions.
        </div>
      </div>

      {/* Tabular Education Grid */}
      <div className="flex flex-col">
        {education.degrees.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 border-b border-black last:border-b-0 group hover:bg-black hover:text-white transition-colors duration-500"
          >
            {/* Meta: Dates & Institution */}
            <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between group-hover:border-white transition-colors">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">{edu.period}</span>
              <div className="mt-8 md:mt-0 font-serif text-2xl font-bold">
                {edu.institution}
                <div className="text-sm font-sans font-normal opacity-80 mt-2">
                  {edu.location}
                </div>
              </div>
            </div>

            {/* Details: Degree & Coursework */}
            <div className="md:col-span-9 p-8 md:p-12 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <h3 className="font-display text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                  <GraduationCap strokeWidth={1.5} size={32} className="shrink-0 group-hover:text-white transition-colors" />
                  {edu.degree}
                </h3>
                <div className="flex gap-4">
                  <span className="px-3 py-1 border border-black group-hover:border-white font-mono text-xs uppercase tracking-widest transition-colors font-bold">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6 max-w-3xl opacity-90">
                {edu.description}
                <br /><span className="mt-2 block font-medium">Major: {edu.major}</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black group-hover:border-white pt-6 transition-colors">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-4 font-bold">
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span key={course} className="text-[10px] font-mono font-bold border border-black px-2 py-1 uppercase transition-colors group-hover:border-white">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-4 font-bold">
                    Achievements
                  </h4>
                  <ul className="space-y-2 font-mono text-sm">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 select-none opacity-80 mt-1">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Learning */}
      {education.additionalLearning && education.additionalLearning.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black bg-surface">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black flex items-center">
            <h3 className="font-serif italic text-3xl tracking-wide text-black">
              Continuous <br />Expansion.
            </h3>
          </div>
          <div className="md:col-span-2 p-8 md:p-12 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {education.additionalLearning.map((learn, i) => (
                <div key={i} className="flex flex-col border-b border-black pb-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                  <span className="font-bold text-lg text-black">{learn.title}</span>
                  <div className="flex justify-between items-center mt-2 font-mono text-xs uppercase font-bold opacity-70">
                    <span>{learn.platform}</span>
                    <span className="text-black">{learn.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;