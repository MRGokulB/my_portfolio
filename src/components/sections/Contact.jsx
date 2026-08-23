import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="w-full bg-white text-black selection:bg-accent selection:text-black">
      {/* Massive Typography Banner */}
      <div className="p-8 md:p-12 border-b border-black">
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
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
        {/* Contact Info */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between min-h-[40vh] bg-surface">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-secondary mb-12">
            06. Initialize Connection
          </div>

          <div>
            <a href={`mailto:${personal.email}`} className="group flex items-center gap-4 text-3xl md:text-5xl font-display hover:text-white hover:bg-black transition-colors mb-8 text-black px-4 py-2 -ml-4 w-fit">
              <Mail strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-300" size={40} />
              <span className="underline decoration-1 underline-offset-8 decoration-black group-hover:decoration-transparent transition-colors">
                {personal.email}
              </span>
            </a>

            <div className="flex gap-8 mt-12 border-t border-black pt-8">
              {Object.entries(personal.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noreferrer" className="text-secondary hover:text-black uppercase tracking-widest text-xs font-mono font-bold transition-colors flex items-center gap-1 group">
                  {platform}
                  <ArrowUpRight strokeWidth={1.5} size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Copyright meta */}
        <div className="p-8 md:p-12 flex flex-col justify-between items-start md:items-end text-left md:text-right font-mono text-xs uppercase font-bold tracking-widest text-secondary bg-surface">
          <div className="space-y-4">
            <div>
              Based in <span className="text-black block mt-1">{personal.location.split('|')[0]}</span>
            </div>
            <div>
              Status <span className="text-black block mt-1">Available for work</span>
            </div>
          </div>

          <div className="mt-20 md:mt-0">
            <div>© {new Date().getFullYear()}</div>
            <div className="text-black mt-1">{personal.name}. All rights reserved.</div>
            <div className="mt-8 text-[10px] border border-black bg-white text-black px-2 py-1 tracking-tighter w-fit md:ml-auto">
              SYSTEM v4.0 // SWISS_GRID
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;