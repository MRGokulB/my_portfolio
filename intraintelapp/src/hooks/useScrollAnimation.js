// src/hooks/useScrollAnimation.js
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/* -----------------------------------------------------
   useScrollAnimation
   - Reveals elements on scroll using IntersectionObserver
   - Works perfectly with Tailwind + globals.css animations
   ----------------------------------------------------- */
export const useScrollAnimation = ({
  threshold = 0.12,
  triggerOnce = true,
  rootMargin = '0px 0px -10% 0px',
} = {}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return [ref, inView];
};

/* -----------------------------------------------------
   useScrollProgress
   - Smooth scroll progress (0–100)
   - Drives top progress bar in Navbar
   - Uses requestAnimationFrame for performance
   ----------------------------------------------------- */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const current = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (current / max) * 100 : 0;

      setScrollProgress(pct);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollProgress;
};

/* -----------------------------------------------------
   useMousePosition
   - For parallax effects / hero lighting
   - Throttled by requestAnimationFrame
   ----------------------------------------------------- */
export const useMousePosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const update = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      ticking = false;
    };

    const onMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => update(e));
        ticking = true;
      }
    };

    window.addEventListener('mousemove', onMove);

    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return pos;
};
