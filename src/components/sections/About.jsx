import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioData } from '../../data/portfolio';
import Card from '../ui/Card';
import { Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const [ref, inView] = useScrollAnimation(0.2);
  const { personal, experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {personal.bio}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-2" />
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white ml-2">{personal.location}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-2" />
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <a href={`mailto:${personal.email}`} className="text-accent-blue hover:underline ml-2">
                      {personal.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-pink rounded-full mt-2" />
                  <div>
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-white ml-2">{personal.phone}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
              <Briefcase size={28} />
              Experience
            </h3>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover={false} className="relative border-l-4 border-accent-blue">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {exp.position}
                      </h4>
                      <p className="text-accent-blue font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;