import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="w-full bg-white text-black selection:bg-accent selection:text-black">
      <div className="p-8 md:p-12 border-b border-black">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[15vw] leading-[0.8] font-black uppercase tracking-tighter"
        >
          Let’s<br />
          <span className="text-accent">Build</span><br />
          Next.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between min-h-[40vh] bg-surface">
          <div className="text-xs font-medium text-secondary mb-12">
            Direct connection
          </div>

          <div>
            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-4 text-3xl md:text-5xl font-display hover:text-white hover:bg-black transition-colors mb-8 text-black px-4 py-2 -ml-4 w-fit focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
            >
              <Mail
                strokeWidth={1.5}
                size={40}
                className="motion-safe:group-hover:rotate-12 motion-safe:transition-transform motion-reduce:transition-none duration-300"
              />
              <span className="underline decoration-1 underline-offset-8 decoration-black group-hover:decoration-transparent transition-colors">
                {personal.email}
              </span>
            </a>

            <div className="flex gap-8 mt-12 border-t border-black pt-8">
              {Object.entries(personal.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-black text-xs font-medium transition-colors flex items-center gap-1 group focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                >
                  <span className="capitalize">{platform}</span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    size={14}
                    className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-opacity motion-safe:transition-transform motion-reduce:transition-none duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-between items-start md:items-end text-left md:text-right text-xs font-medium text-secondary bg-surface">
          <div className="space-y-4">
            <div>
              Based in <span className="text-black block mt-1">{personal.location.split('|')[0]}</span>
            </div>
            <div>
              Status <span className="text-black block mt-1">Available for work</span>
            </div>
          </div>

          <div className="mt-20 md:mt-0 space-y-2">
            <div>© {new Date().getFullYear()}</div>
            <div className="text-black">{personal.name}</div>
            <div className="text-[10px] border border-black bg-white text-black px-2 py-1 w-fit md:ml-auto font-medium">
              Swiss Architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
