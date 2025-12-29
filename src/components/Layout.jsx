import { motion } from 'framer-motion';
import Navbar from './ui/Navbar';
import { portfolioData } from '../data/portfolio';
import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Layout = ({ children, isDark, toggleTheme }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>{children}</main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full glass-effect flex items-center justify-center text-gray-900 dark:text-white border-2 border-transparent hover:border-accent-blue/50 shadow-lg hover:shadow-accent-blue/20 transition-all z-50 group"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} className="group-hover:text-accent-blue transition-colors" />
          <div className="absolute inset-0 rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </div>
  );
};

export default Layout;