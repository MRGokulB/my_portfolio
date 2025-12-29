import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ className = "" }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Map specific paths to more readable names if needed
    const nameMap = {
        'resources': 'Resources',
        'blog': 'Blog',
        'guide': 'Guides',
        'video': 'Videos'
    };

    return (
        <nav aria-label="Breadcrumb" className={`flex items-center text-sm text-slate-500 ${className}`}>
            <ol className="flex items-center gap-1">
                {/* Home Link */}
                <li className="flex items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                        title="Home"
                    >
                        <Home size={16} />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>

                {pathnames.map((name, index) => {
                    // Check if it's the last item
                    const isLast = index === pathnames.length - 1;

                    // Build path up to this item
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

                    // Format name: check map or capitalize
                    let displayName = nameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

                    // If it looks like an ID (numeric), maybe just show ellipsis or "Detail"? 
                    // Or keep as is. Let's keep numeric IDs as minimal or maybe handle "Detail" if needed.
                    if (!isNaN(name)) {
                        displayName = `Detail`; // Or use a prop relative to the page if we want the actual title
                    }

                    return (
                        <li key={name} className="flex items-center gap-1">
                            <ChevronRight size={14} className="text-slate-400" />
                            {isLast ? (
                                <span className="font-medium text-slate-900" aria-current="page">
                                    {displayName}
                                </span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {displayName}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
