import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const About = () => {
  const { personal, skills } = portfolioData;
  const allSkills = skills.flatMap(s => s.items).slice(0, 8);

  return (
    <section id="about" className="w-full bg-white border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
          <div className="p-8 md:p-12 bg-surface flex-1 border-b border-black">
            <h2 className="heading-display !mb-0 text-5xl md:text-6xl text-black">
              Building <br />
              The Digital <br />
              Future.
            </h2>
          </div>

          <div className="h-64 bg-accent text-white p-8 md:p-12 flex items-end">
            <div className="text-3xl font-serif">
              “Obsessed with<br />the details.”
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col">
          <div className="p-8 md:p-12 border-b border-black text-lg md:text-xl font-medium leading-relaxed text-secondary space-y-6">
            <p>
              I’m <span className="text-black font-bold font-sans">{personal.name}</span>, a {personal.title} based in {personal.location.split('|')[0]}.
              My journey has not been a straight line: it has been a continuous loop of learning, building, and refining.
            </p>
            <p>
              {personal.bio}
            </p>
            <p>
              I specialize in full-stack architecture and reliable systems engineering.
              Whether optimizing render cycles in React or architecting scalable relational schemas with PostgreSQL,
              I focus on the foundational elements that transform a good application into a great one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">
            {allSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-8 border-b sm:border-r sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 border-black hover:bg-black hover:text-white transition-colors duration-500 group flex flex-col justify-between aspect-[3/2] bg-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-[filter] duration-300 font-mono">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-xs text-secondary opacity-60 font-medium group-hover:text-white">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="font-bold text-xl uppercase tracking-tight font-sans mb-1 text-black group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="h-[2px] w-full bg-secondary/30 group-hover:bg-white/30 transition-colors overflow-hidden">
                      <div className="h-full w-full bg-accent group-hover:bg-white motion-safe:transition-transform motion-reduce:transition-none duration-1000 origin-left" style={{ transform: `scaleX(${skill.level / 100})` }} />
                    </div>
                    <span className="font-mono text-xs font-bold w-8 text-right group-hover:text-white transition-colors">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
