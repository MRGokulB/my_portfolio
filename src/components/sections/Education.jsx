import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioData } from '../../data/portfolio';
import Card from '../ui/Card';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useScrollAnimation(0.2);
  const { education } = portfolioData;

  const EducationCard = ({ edu, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <Card className="h-full relative overflow-hidden group">
          {/* Degree Badge */}
          {edu.honors && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-blue to-accent-purple px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
              <Trophy size={12} fill="currentColor" />
              {edu.honors}
            </div>
          )}

          {/* Institution Logo/Icon */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center border border-accent-blue/30">
              {edu.logo ? (
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              ) : (
                <GraduationCap size={32} className="text-accent-blue" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">
                {edu.degree}
              </h3>
              <p className="text-accent-blue font-semibold">{edu.institution}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Calendar size={16} className="text-accent-purple" />
              <span>{edu.period}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <MapPin size={16} className="text-accent-pink" />
              <span>{edu.location}</span>
            </div>

            {edu.gpa && (
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Award size={16} className="text-accent-blue" />
                <span>GPA: <span className="text-white font-semibold">{edu.gpa}</span></span>
              </div>
            )}

            {edu.major && (
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <BookOpen size={16} className="text-accent-purple" />
                <span>Major: <span className="text-white">{edu.major}</span></span>
              </div>
            )}
          </div>

          {/* Description */}
          {edu.description && (
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {edu.description}
            </p>
          )}

          {/* Relevant Coursework */}
          {edu.coursework && edu.coursework.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-dark-300 text-accent-blue text-xs rounded-full border border-accent-blue/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {edu.achievements && edu.achievements.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white mb-2">Achievements:</h4>
              {edu.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.degrees.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>

        {/* Additional Learning */}
        {education.additionalLearning && education.additionalLearning.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
              Additional Learning & Development
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {education.additionalLearning.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card hover={true} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-accent-blue/30">
                      <BookOpen size={24} className="text-accent-blue" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">{item.platform}</p>
                    <span className="text-accent-blue text-xs">{item.year}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {education.degrees.length}
                </div>
                <div className="text-gray-400 text-sm">Degrees</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {education.additionalLearning?.length || 0}+
                </div>
                <div className="text-gray-400 text-sm">Courses</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <GraduationCap className="inline" size={36} />
                </div>
                <div className="text-gray-400 text-sm">Graduated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <BookOpen className="inline" size={36} />
                </div>
                <div className="text-gray-400 text-sm">Learning</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quote or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-accent-blue/5 to-accent-purple/5">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                <GraduationCap size={32} className="text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-300 italic mb-2">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
            <p className="text-accent-blue text-sm">- Malcolm X</p>
          </Card>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Education;