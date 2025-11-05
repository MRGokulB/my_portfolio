import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioData } from '../../data/portfolio';
import Card from '../ui/Card';
import { Briefcase, Calendar, MapPin, Mail, Phone, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useScrollAnimation(0.2);
  const { personal, experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              About Me
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Know More <span className="gradient-text">About Me</span>
          </h2>
          <div className="section-divider max-w-md mx-auto" />
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
            Get to know more about my journey, experience, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Main Bio Card */}
            <motion.div variants={itemVariants}>
              <Card className="card-3d spotlight h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center glow-effect-blue">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">Who I Am</h3>
                </div>
                
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg mb-8">
                  {personal.bio}
                </p>
                
                {/* Contact Info Grid */}
                <div className="space-y-4">
                  <motion.div 
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <MapPin size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <span className="text-neutral-500 text-sm block">Location</span>
                      <span className="text-white font-medium">{personal.location}</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Mail size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-neutral-500 text-sm block">Email</span>
                      <a 
                        href={`mailto:${personal.email}`} 
                        className="text-cyan-400 font-medium hover:underline"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Phone size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <span className="text-neutral-500 text-sm block">Phone</span>
                      <span className="text-white font-medium">{personal.phone}</span>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-effect-purple">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text-purple">
                Experience
              </h3>
            </motion.div>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center glow-effect-blue z-10">
                    <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                    </div>
                  </div>

                  <div className="ml-20">
                    <Card className="card-3d spotlight border-l-2 border-blue-500/50 hover:border-blue-500 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {exp.position}
                          </h4>
                          <p className="text-blue-400 font-semibold text-base md:text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-neutral-400 text-sm whitespace-nowrap">
                          <Calendar size={16} className="text-blue-400" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-neutral-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-3 group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8 + (index * 0.2) + (idx * 0.1) }}
                          >
                            <div className="mt-1.5 w-5 h-5 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                            </div>
                            <span className="text-neutral-400 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;