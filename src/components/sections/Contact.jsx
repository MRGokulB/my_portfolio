import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="w-full bg-black text-white selection:bg-accent selection:text-white">
      {/* Massive Typography Banner */}
      <div className="p-8 md:p-12 border-b border-white/20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[15vw] leading-[0.8] font-black uppercase tracking-tighter"
        >
          Let's<br />
          <span className="text-accent italic">Build</span><br />
          Next.
        </motion.h2>
      </div>

      {/* Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between min-h-[40vh]">
          <div className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-12">
            06. Initialize Connection
          </div>

          <div>
            <a href={`mailto:${personal.email}`} className="group flex items-center gap-4 text-3xl md:text-5xl font-display hover:text-accent transition-colors mb-8">
              <Mail strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-300" size={40} />
              <span className="underline decoration-1 underline-offset-8 decoration-white/30 group-hover:decoration-accent transition-colors">
                {personal.email}
              </span>
            </a>

            <div className="flex gap-8 mt-12 border-t border-white/20 pt-8">
              {Object.entries(personal.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white uppercase tracking-widest text-sm font-mono transition-colors flex items-center gap-1 group">
                  {platform}
                  <ArrowUpRight strokeWidth={1.5} size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Copyright meta */}
        <div className="p-8 md:p-12 flex flex-col justify-between items-start md:items-end text-left md:text-right font-mono text-sm uppercase tracking-widest text-gray-500">
          <div className="space-y-4">
            <div>
              Based in <span className="text-white block mt-1">{personal.location.split('|')[0]}</span>
            </div>
            <div>
              Status <span className="text-accent block mt-1">Available for work</span>
            </div>
          </div>

          <div className="mt-20 md:mt-0">
            <div>© {new Date().getFullYear()}</div>
            <div className="text-white mt-1">{personal.name}. All rights reserved.</div>
            <div className="mt-8 text-[10px] bg-white/10 px-2 py-1 tracking-tighter w-fit md:ml-auto">
              SYSTEM v2.0 // SWISS_UI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;