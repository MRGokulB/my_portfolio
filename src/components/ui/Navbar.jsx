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
        className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-black md:mx-auto max-w-[1920px] w-full"
      >
        <div className="flex justify-between items-center w-full h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="h-full flex items-center px-6 md:px-8 border-r border-black hover:bg-black hover:text-white transition-colors">
            <span className="font-serif font-bold text-xl tracking-tighter uppercase">
              Gangaprasad<span className="text-accent italic">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex h-full items-center">
            <nav className="flex items-center h-full">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `h-full flex items-center px-8 border-l border-black text-sm font-mono font-medium transition-colors uppercase tracking-widest ${isActive ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'
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
              className="h-full flex items-center px-8 border-l border-black bg-black text-white text-sm font-mono font-medium hover:bg-accent transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              <span>Resume</span>
              <ArrowUpRight strokeWidth={1.5} size={16} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center h-full border-l border-black">
            <button
              className="w-16 h-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 bg-surface flex flex-col pt-24"
          >
            <nav className="flex flex-col border-t border-black">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl text-black font-black uppercase tracking-tighter hover:text-accent hover:bg-black transition-colors border-b border-black p-6 w-full text-center"
              >
                Home
              </NavLink>
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-4xl font-black uppercase tracking-tighter transition-colors border-b border-black p-6 w-full text-center ${isActive ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'
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
                className="p-6 bg-black text-white font-mono uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent w-full text-center"
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