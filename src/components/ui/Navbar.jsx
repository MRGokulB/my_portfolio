import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: 'Philosophy', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 w-full"
      >
        <div className="flex justify-between items-center w-full h-16 md:h-20 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="h-full flex items-center px-6 md:px-8 hover:text-accent transition-colors">
            <span className="font-serif font-bold text-xl tracking-tighter uppercase text-primary">
              Gangaprasad<span className="text-accent italic">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex h-full items-center gap-2">
            <nav className="flex items-center h-full mr-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `h-full flex items-center px-6 text-sm font-mono font-medium transition-colors uppercase tracking-widest ${isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Resume CTA */}
            <a
              href={portfolioData.personal.resume}
              download="Gangaprasad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/5 hover:bg-accent text-primary hover:text-black border border-white/10 rounded-full text-sm font-mono font-medium transition-all flex items-center gap-2 uppercase tracking-widest mr-6 md:mr-8"
            >
              <span>Resume</span>
              <ArrowUpRight strokeWidth={1.5} size={16} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center h-full">
            <button
              className="w-16 h-full flex items-center justify-center text-primary hover:text-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24"
          >
            <nav className="flex flex-col border-t border-white/10 mt-2">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl text-primary font-black uppercase tracking-tighter hover:text-accent transition-colors border-b border-white/10 p-6 w-full text-center"
              >
                Home
              </NavLink>
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-4xl font-black uppercase tracking-tighter transition-colors border-b border-white/10 p-6 w-full text-center ${isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                    }`
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    {link.name}
                  </motion.div>
                </NavLink>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={portfolioData.personal.resume}
                download="Gangaprasad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-accent text-black font-mono uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-colors w-full text-center mt-auto"
              >
                <Download strokeWidth={1.5} size={20} />
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;