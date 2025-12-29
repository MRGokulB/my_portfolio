import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import {
    Menu, X, ChevronRight, ArrowRight, ChevronDown,
    Layout, Shield, Zap, Database,
    Activity, Brain, FileSearch, Share2,
    BookOpen, FileText, Users, HelpCircle,
    Stethoscope, Factory, ShieldCheck
} from 'lucide-react';
import logo from '../../assets/logo.svg';
import Button from './Button';


const navItems = [
    {
        label: 'Platform',
        path: '/',
        children: [
            { label: 'Overview', desc: 'The complete AI intelligence platform', icon: Layout, path: '/' },
            { label: 'How it Works', desc: 'See our engine in action', icon: Zap, path: '/#how-it-works' },
            { label: 'Security', desc: 'Enterprise-grade protection', icon: Shield, path: '/#security' },
            { label: 'Integrations', desc: 'Connect with your stack', icon: Database, path: '/#integrations' },
        ]
    },
    {
        label: 'Solutions',
        path: '/features',
        /* children: [
            { label: 'Healthcare', desc: 'Clinical Documentation', icon: Stethoscope, path: '/#clinical' },
            { label: 'Industry', desc: 'Quality Control', icon: Factory, path: '/#quality' },
            { label: 'Enterprise', desc: 'RFP Automation', icon: FileText, path: '/#rfp' },
            { label: 'Compliance', desc: 'Automated Audit', icon: ShieldCheck, path: '/#regulatory' },
            { label: 'Knowledge', desc: 'Semantic Search', icon: Brain, path: '/#knowledge' },
        ] */
    },
    { label: 'About', path: '/about' },
    {
        label: 'Resources',
        path: '/resources',
        children: [
            { label: 'Blog', desc: 'Latest insights & news', icon: BookOpen, path: '/resources' },
            { label: 'Documentation', desc: 'Technical guides', icon: FileText, path: '/resources#docs' },
            { label: 'Community', desc: 'Join the conversation', icon: Users, path: '/resources#community' },
            { label: 'Support', desc: 'Get help 24/7', icon: HelpCircle, path: '/contact' },
        ]
    },
    { label: 'Contact', path: '/contact' },
];

// --- Components ---

const NavDropdown = ({ items, active }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-6 z-50"
        >
            <div className="grid grid-cols-2 gap-4">
                {items.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.path}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                        <div>
                            <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {item.label}
                            </div>
                            <div className="text-sm text-slate-500 mt-1">
                                {item.desc}
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};

export default function Navbar({ textColor = 'slate-900' }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();
    const { scrollY } = useScroll();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setHoveredItem(null);
    }, [location]);

    const [isHoveringTop, setIsHoveringTop] = useState(false);

    useEffect(() => {
        let lastHoverStatus = false;
        const handleMouseMove = (e) => {
            const isNearTop = e.clientY < 150;
            if (isNearTop !== lastHoverStatus) {
                setIsHoveringTop(isNearTop);
                lastHoverStatus = isNearTop;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const isVisible = !scrolled || isHoveringTop;

    // Awwwards-style Premium Glass Effect Variables
    const navBackground = scrolled ? 'rgba(255, 255, 255, 0.0)' : 'rgba(255, 255, 255, 0)'; // Keep main nav transparent
    const navBackdrop = scrolled ? 'blur(0px)' : 'blur(0px)'; // No blur on full width
    const navBorder = 'transparent'; // No border on full width
    const navShadow = 'none'; // No shadow on full width

    // Dynamic text color classes
    const logoTextColor = textColor === 'white' ? 'text-white' : 'text-slate-900';
    const mobileMenuColor = textColor === 'white' ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100';

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:!bg-transparent lg:!backdrop-blur-none lg:!border-none lg:!shadow-none"
                style={{
                    backgroundColor: navBackground,
                    backdropFilter: navBackdrop,
                    borderBottom: `1px solid ${navBorder}`,
                    boxShadow: navShadow,
                }}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo Area */}
                        <Link to="/" className={`flex items-center gap-3 group relative z-50 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                                <img src={logo} alt="IntraIntel" className="w-6 h-6 brightness-0 invert" />
                            </div>
                            <span className={`text-xl font-bold tracking-tight transition-colors ${logoTextColor}`}>
                                IntraIntel<span className="text-blue-600">.AI</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation - Premium Floating Glass Pill */}
                        <div className={`hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                            <div
                                className="relative flex items-center gap-1 p-1.5 rounded-full transition-all duration-300"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.75)', // Increased opacity
                                    backdropFilter: 'blur(40px)', // Stronger blur
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)', // Subtle ambient shadow
                                    border: '1px solid rgba(255, 255, 255, 0.5)', // More visible border
                                }}
                            >
                                {navItems.map((item) => (
                                    <div
                                        key={item.path}
                                        onMouseEnter={() => setHoveredItem(item.label)}
                                        className="relative"
                                    >
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${isActive || hoveredItem === item.label
                                                    ? 'text-slate-900 bg-white/90 shadow-sm'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/30'
                                                }`
                                            }
                                        >
                                            {item.label}
                                            {item.children && (
                                                <ChevronDown size={14} className={`transition-transform duration-300 opacity-70 ${hoveredItem === item.label ? 'rotate-180' : ''}`} />
                                            )}
                                        </NavLink>

                                        {/* Dropdown */}
                                        <AnimatePresence>
                                            {hoveredItem === item.label && item.children && (
                                                <NavDropdown items={item.children} active={true} />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className={`hidden lg:flex items-center gap-6 relative z-50 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            {/* <Link
                                to="/login"
                                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                            >
                                Sign In
                            </Link>
                            */}
                            <Button
                                to="/contact"
                                variant="primary"
                                size="sm"
                                className="rounded-full"
                                icon={<ArrowRight className="w-4 h-4" />}
                                iconPosition="right"
                                iconEffect="slide"
                            >
                                Get Started
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-600 hover:bg-slate-100' : mobileMenuColor}`}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-xl lg:hidden overflow-hidden"
                    >
                        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                            {navItems.map((item) => (
                                <div key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between p-4 rounded-xl transition-colors ${isActive
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-slate-600 hover:bg-slate-50'
                                            }`
                                        }
                                    >
                                        <span className="font-medium">{item.label}</span>
                                        {!item.children && <ChevronRight size={16} className="opacity-50" />}
                                    </NavLink>

                                    {/* Mobile Submenu */}
                                    {item.children && (
                                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100 ml-4">
                                            {item.children.map((child, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={child.path}
                                                    className="block p-3 rounded-lg text-sm text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                                                >
                                                    <div className="font-medium">{child.label}</div>
                                                    <div className="text-xs opacity-70">{child.desc}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t border-slate-100 grid gap-3">
                                {/* <Link
                                    to="/contact"
                                    className="flex items-center justify-center w-full p-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                                >
                                    Sign In
                                </Link> */}
                                <Button
                                    to="/contact"
                                    variant="primary"
                                    className="w-full justify-center"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}