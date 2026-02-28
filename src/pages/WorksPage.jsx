import React, { useEffect } from 'react';
import WorksDirectory from '../components/sections/WorksDirectory';

const WorksPage = () => {
    // Scroll to top when page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col w-full bg-surface min-h-screen">
            <WorksDirectory />
        </div>
    );
};

export default WorksPage;
