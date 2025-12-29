import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme logic moved to App.jsx for global control

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <div className="container-custom px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="relative z-50 group">
            <span className="font-display font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
              Gangaprasad
              <span className="text-gray-500 group-hover:text-accent-blue transition-colors">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-4 p-1.5 rounded-full border border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg dark:shadow-none' : ''}`}>
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="w-[1px] h-6 bg-gray-300 dark:bg-white/10" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume CTA */}
            <a
              href={portfolioData.personal.resume}
              download="Gangaprasad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-accent-blue hover:text-white dark:hover:bg-accent-blue dark:hover:text-white transition-all shadow-lg hover:shadow-accent-blue/20 flex items-center gap-2"
            >
              <span>Resume</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4 z-50 relative">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md text-gray-900 dark:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-gray-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="font-display text-4xl text-gray-900 dark:text-white font-bold tracking-tight hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={portfolioData.personal.resume}
                download="Gangaprasad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium flex items-center gap-3"
              >
                <Download size={20} />
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