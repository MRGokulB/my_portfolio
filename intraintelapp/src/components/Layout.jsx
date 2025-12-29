// src/components/Layout.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Determine layout mode based on route
  const isVideoPage = location.pathname.includes('/resources/video/');
  const isBlogPage = location.pathname.includes('/resources/blog/');

  // Standard Page Mode: Always show footer, always global scroll
  const isAppMode = false;

  // Dark Hero mode: Navbar text should be white initially
  // Video page (Light theme now) -> False
  // Blog page (Containerized now, so white background at top) -> False
  const isDarkHero = false;

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    // Only bind scroll listener if NOT in app mode (where window scroll might not happen)
    if (!isAppMode) {
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isAppMode]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`relative min-h-screen bg-surface-1 text-text-main ${isAppMode ? 'h-screen overflow-hidden flex flex-col' : ''}`}>
      {/* Navbar */}
      <Navbar textColor={isDarkHero ? 'white' : 'slate-900'} />

      {/* Page content */}
      <main className={`pt-0 ${isAppMode ? 'flex-1 overflow-hidden relative' : ''}`}>
        {children}
      </main>

      {/* Footer - Hidden in App Mode */}
      {!isAppMode && <Footer />}

      {/* Scroll to Top button - Only for standard pages */}
      {!isAppMode && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 2xl:bottom-10 right-4 2xl:right-10 z-50 group"
          aria-label="Scroll to top"
          style={{ display: showScrollTop ? 'block' : 'none' }}
        >
          <div className="py-3 md:py-[17px] px-[15px] md:px-5 rounded-full bg-[#0068E5] hover:bg-[#005bb5] shadow-[0px_5px_15px_0px_#00000059] transition-colors">
            <ArrowUp className="w-6 h-6 text-white" />
          </div>
        </motion.button>
      )}
    </div>
  );
};

export default Layout;
