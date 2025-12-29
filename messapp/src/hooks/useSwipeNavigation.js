import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook to implement Android-like edge swipe navigation.
 * 
 * - Swiping from the LEFT edge (within 30px) to the RIGHT -> Go Back
 * - Swiping from the RIGHT edge (within 30px) to the LEFT -> Go Back (common in modern Android)
 * 
 * @param {number} threshold - Min distance in pixels to trigger navigation (default 100px)
 * @param {number} edgeWidth - Width of the edge zone in pixels (default 40px)
 */
const useSwipeNavigation = (threshold = 100, edgeWidth = 40) => {
    const navigate = useNavigate();

    // Refs to track touch state to avoid stale closures if we were using state
    const touchStart = useRef(null);
    const touchStartTarget = useRef(null);

    useEffect(() => {
        const handleTouchStart = (e) => {
            // Only consider single touch
            if (e.touches.length !== 1) return;

            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            const windowWidth = window.innerWidth;

            // Check if touch is within the edge zones
            const isLeftEdge = x <= edgeWidth;
            const isRightEdge = x >= windowWidth - edgeWidth;

            if (isLeftEdge || isRightEdge) {
                touchStart.current = { x, y, isLeftEdge, isRightEdge, time: Date.now() };
                touchStartTarget.current = e.target;
            } else {
                touchStart.current = null;
                touchStartTarget.current = null;
            }
        };

        const handleTouchEnd = (e) => {
            if (!touchStart.current) return;

            const touchEnd = e.changedTouches[0];
            const deltaX = touchEnd.clientX - touchStart.current.x;
            const deltaY = touchEnd.clientY - touchStart.current.y;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);

            // 1. Horizontal dominance check (prevent scrolling from triggering back)
            if (absY > absX) return;

            // 2. Threshold check
            if (absX < threshold) return;

            // 3. Direction check based on edge
            const { isLeftEdge, isRightEdge } = touchStart.current;

            let shouldNavigate = false;

            // Left edge -> Swipe Right to go back
            if (isLeftEdge && deltaX > 0) {
                shouldNavigate = true;
            }
            // Right edge -> Swipe Left to go back
            else if (isRightEdge && deltaX < 0) {
                shouldNavigate = true;
            }

            if (shouldNavigate) {
                // Determine if we can go back
                // Note: React Router's navigate(-1) works if there is history. 
                // If checking window.history.length > 1 is strictly needed we can add it, 
                // but usually navigate(-1) is safe enough (it might just stay if nowhere to go).
                if (window.history.length > 1) {
                    navigate(-1);
                }
            }

            // Reset
            touchStart.current = null;
        };

        // We use passive: false to theoretically allow preventing default, 
        // but for navigation gestures we usually don't want to block scroll unless it creates conflicts.
        // Here we just listen passively to decide navigation.
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [navigate, threshold, edgeWidth]);
};

export default useSwipeNavigation;
