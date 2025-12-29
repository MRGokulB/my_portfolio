import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { GraduationCap, Calendar, BookOpen, Award, Star } from 'lucide-react';
import Card from '../ui/Card';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-32 bg-transparent">
      <div className="container-custom max-w-5xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">Academic background and qualifications</p>
        </motion.div>

        <div className="grid gap-12">
          {education.degrees.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col gap-8 hover:border-accent-blue/50 p-6 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-gray-200 dark:border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple shrink-0">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-accent-blue font-medium items-center">
                        <span>{edu.institution}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</span>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-md">
                          <BookOpen size={14} />
                          Major: {edu.major}
                        </span>
                        <span className="flex items-center gap-1.5 text-accent-green bg-accent-green/10 px-3 py-1 rounded-md font-mono font-bold">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-mono text-sm bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-lg whitespace-nowrap self-start">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Coursework */}
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <BookOpen size={16} /> Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map(course => (
                        <span key={course} className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-400 dark:border-white/10 bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-gray-300 hover:border-accent-purple/50 hover:text-accent-purple transition-colors">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <Award size={16} /> Achievements
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Star size={14} className="mt-1 text-accent-yellow shrink-0 fill-accent-yellow/20" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm italic border-t border-gray-200 dark:border-white/10 pt-4">
                  "{edu.description}"
                </p>
              </Card>
            </motion.div>
          ))}

          {/* Additional Learning */}
          {userHasAdditionalLearning(education) && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Additional Learning</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {education.additionalLearning.map((learn, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{learn.title}</div>
                      <div className="text-sm text-gray-500">{learn.platform}</div>
                    </div>
                    <div className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded">
                      {learn.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// Helper to check for additional learning safely
const userHasAdditionalLearning = (edu) => {
  return edu.additionalLearning && edu.additionalLearning.length > 0;
};

export default Education;