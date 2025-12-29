import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash, search } = useLocation();

    useEffect(() => {
        // Handle Hash Scrolling (e.g., /#security)
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100); // Small delay to ensure render
            }
        }
        // Handle Query Params (e.g., /features?agent=clinical) - Optional if page handles it
        else if (!search) {
            // Only scroll to top if no hash and no search params (unless search params imply a new view)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, search]);

    return null;
}
