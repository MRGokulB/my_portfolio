import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex items-center group py-4 border-b border-black last:border-b-0 hover:bg-black hover:text-white transition-colors duration-300 px-4 -mx-4"
      >
        <div className="flex-1 font-mono uppercase tracking-wide flex items-center gap-4">
          <span className="text-2xl grayscale group-hover:grayscale-0 transition-all font-mono">
            {skill.icon}
          </span>
          {skill.name}
        </div>
        <div className="w-1/3 md:w-1/2 flex items-center gap-4">
          <div className="w-full h-[1px] bg-gray-300 group-hover:bg-gray-800 transition-colors">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-black group-hover:bg-white transition-colors"
            />
          </div>
          <span className="font-mono text-sm font-bold w-12 text-right">
            {skill.level}%
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="w-full bg-white border-b border-black">
      {/* Header */}
      <div className="p-8 md:p-12 border-b border-black bg-surface">
        <span className="label-category !mb-4">05. Toolkit</span>
        <h2 className="heading-display !mb-0 text-5xl md:text-7xl">
          Systems & <br />
          <span className="text-white bg-accent px-4 ml-0 md:ml-12">Architecture</span>
        </h2>
      </div>

      {/* Skills Grid Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {skills.map((category, categoryIndex) => (
          <div
            key={category.category}
            className="border-b lg:border-b-0 lg:border-r border-black last:border-r-0 flex flex-col"
          >
            <div className="bg-black text-white p-6 border-b border-black">
              <h3 className="text-2xl font-serif italic tracking-wide">
                {category.category}
              </h3>
            </div>
            <div className="p-8 flex-1">
              {category.items.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={skillIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Info Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black bg-surface">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black flex items-center justify-center">
          <span className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter">
            Always<br />Learning.
          </span>
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center text-secondary text-lg font-medium leading-relaxed">
          <p>
            I'm constantly expanding my skillset and staying up-to-date with the latest technologies.
            Currently exploring WebGL shaders, AI/ML integration, and advanced animation techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;