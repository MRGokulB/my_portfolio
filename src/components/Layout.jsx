import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Navbar from './ui/Navbar';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Layout = () => {
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
    <div className="relative min-h-screen bg-background text-primary border-x border-border-color max-w-[1920px] mx-auto w-full flex flex-col pt-16 md:pt-20">
      <Navbar />

      {/* Route Outlet */}
      <main className="flex-1 flex flex-col relative w-full">
        <Outlet />
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-black text-space rounded-full flex items-center justify-center hover:bg-accent text-white transition-colors z-50 group border border-black shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Layout;