import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioData } from '../../data/portfolio';
import Card from '../ui/Card';

const Skills = () => {
  const [ref, inView] = useScrollAnimation(0.2);
  const { skills } = portfolioData;

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-accent-blue font-semibold">{skill.level}%</span>
        </div>
        
        <div className="w-full h-3 bg-dark-300 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card hover={false} className="h-full">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.category}
                </h3>
                
                <div>
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Always Learning 📚
            </h3>
            <p className="text-gray-400">
              I'm constantly expanding my skillset and staying up-to-date with the latest technologies. 
              Currently exploring WebGL shaders, AI/ML integration, and advanced animation techniques.
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Skills;