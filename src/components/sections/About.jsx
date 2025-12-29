import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Code2, Database, Layout, Server, Cpu, Globe } from 'lucide-react';

const About = () => {
  const { personal, skills } = portfolioData;

  // Helper to get raw skills list
  const allSkills = skills.flatMap(s => s.items).slice(0, 8); // Top 8 skills

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" className="relative py-32 bg-transparent">
      {/* Transparent Background - No Solid Fill */}

      <div className="container-custom max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: The Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="glass-effect p-8 rounded-3xl"
          >
            <span className="text-accent-purple font-mono uppercase tracking-widest text-sm mb-6 block">01. The Story</span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Building the <br />
              <span className="text-gray-500 dark:text-gray-500">Digital Future.</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-800 dark:text-gray-400 font-body leading-relaxed">
              <p>
                I'm {personal.name}, a {personal.title} based in {personal.location.split('|')[0]}.
                My journey hasn't been a straight line—it's been a continuous loop of learning, building, and refining.
              </p>
              <p>
                {personal.bio}
              </p>
              <p>
                I specialize in the MERN stack but believe in choosing the right tool for the job.
                Whether it's optimizing render cycles in React or architecting scalable schemas in MongoDB,
                I obsess over the details that transform a good app into a great one.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10">
                <Code2 className="text-accent-blue mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Frontend</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">React, Tailwind, Three.js</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10">
                <Database className="text-accent-purple mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Backend</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">Node, Express, Mongo</div>
              </div>
            </div>
          </motion.div>

          {/* Right: The Stack (Visual Matrix) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {allSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl border border-gray-300 dark:border-white/5 bg-white dark:bg-white/[0.02] backdrop-blur-md transition-all shadow-lg dark:shadow-none hover:shadow-xl ${idx === 1 ? 'mt-8' : ''} ${idx === 2 ? '-mt-8' : ''}`}
                >
                  <div className="text-4xl mb-4 text-gray-900 dark:text-gray-200">{skill.icon}</div>
                  <div className="font-bold text-gray-900 dark:text-white text-lg">{skill.name}</div>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-accent-blue to-accent-purple h-full" style={{ width: `${skill.level}%` }} />
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">{skill.level}%</div>
                </motion.div>
              ))}
            </div>

            {/* Background Splashes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;