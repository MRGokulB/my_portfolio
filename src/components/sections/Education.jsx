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
          <span className="label-category !mb-4">04. Foundation</span>
          <h2 className="heading-display !mb-0 text-5xl md:text-7xl">
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
            <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
              <span className="font-mono text-sm uppercase tracking-widest">{edu.period}</span>
              <div className="mt-8 md:mt-0 font-serif text-2xl group-hover:text-white transition-colors">
                {edu.institution}
                <div className="text-sm font-sans text-secondary group-hover:text-gray-400 mt-2">
                  {edu.location}
                </div>
              </div>
            </div>

            {/* Details: Degree & Coursework */}
            <div className="md:col-span-9 p-8 md:p-12 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <h3 className="font-display text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                  <GraduationCap strokeWidth={1.5} size={32} className="shrink-0" />
                  {edu.degree}
                </h3>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-accent text-white font-mono text-xs uppercase tracking-widest">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6 max-w-3xl text-secondary group-hover:text-gray-300 transition-colors">
                {edu.description}
                <br /><span className="mt-2 block font-medium">Major: {edu.major}</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black group-hover:border-white/20 pt-6 transition-colors">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-gray-400 mb-4">
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span key={course} className="text-[10px] font-mono font-medium border border-current px-2 py-1 uppercase group-hover:border-white/30 transition-colors">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-gray-400 mb-4">
                    Achievements
                  </h4>
                  <ul className="space-y-2 font-mono text-sm">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent shrink-0 select-none">■</span>
                        <span className="group-hover:text-gray-200">{item}</span>
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
            <h3 className="font-serif italic text-3xl tracking-wide">
              Continuous <br />Expansion.
            </h3>
          </div>
          <div className="md:col-span-2 p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {education.additionalLearning.map((learn, i) => (
                <div key={i} className="flex flex-col border-b border-black pb-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                  <span className="font-bold text-lg">{learn.title}</span>
                  <div className="flex justify-between items-center mt-2 font-mono text-xs uppercase text-secondary">
                    <span>{learn.platform}</span>
                    <span>{learn.year}</span>
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