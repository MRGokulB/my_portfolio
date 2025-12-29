import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="relative py-32 bg-white dark:bg-transparent border-t border-gray-200 dark:border-white/5 overflow-hidden">
      {/* Huge Typography */}
      <div className="container-custom px-6 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[12vw] leading-[0.8] font-bold text-black dark:text-white mb-8 tracking-tighter">
            LET'S<br />
            BUILD<br />
            <span className="text-gray-300 dark:text-gray-600">NEXT.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-20 items-end">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <a href={`mailto:${personal.email}`} className="group flex items-center gap-4 text-2xl md:text-4xl hover:text-accent-blue transition-colors text-gray-800 dark:text-white font-light">
              <Mail className="group-hover:rotate-12 transition-transform duration-300" size={32} />
              {personal.email}
            </a>

            <div className="flex gap-8">
              {Object.entries(personal.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white uppercase tracking-widest text-sm transition-colors cursor-pointer flex items-center gap-1 group">
                  {platform}
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right text-gray-500 text-sm font-mono uppercase tracking-widest">
            <p>Based in {personal.location.split('|')[0]}</p>
            <p className="mt-2">© {new Date().getFullYear()} {personal.name}</p>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[200px] -z-10 opacity-50 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
    </section>
  );
};

export default Contact;