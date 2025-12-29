import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Calendar, User, X, Volume2, ShieldCheck, Zap } from 'lucide-react';

const TokenSuccessModal = ({ onClose, subscriber, planName, scanTime, audioEnabled = true }) => {
    const timestamp = scanTime ? new Date(scanTime) : new Date();
    const timeString = timestamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = timestamp.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });

    // Auto-close safety
    useEffect(() => {
        if (scanTime) return;

        // Play Audio Feedback
        const playAudio = () => {
            if (audioEnabled && 'speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance("Token Swikarle. Jevanacha Anand Ghya.");
                utterance.lang = 'hi-IN'; // Attempt Hindi/Indian accent
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            }
        };
        playAudio();

        const timer = setTimeout(onClose, 15000); // 15s is enough for a quick glance
        return () => {
            clearTimeout(timer);
            window.speechSynthesis.cancel();
        }
    }, [onClose, scanTime, audioEnabled]);

    return (
        <div className="fixed inset-0 z-[100] bg-green-600 flex flex-col items-center justify-center p-6 text-white overflow-hidden perspective-1000">
            {/* Background Animation: Subtle Gradient Flow */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 50% 50%, #16a34a 0%, #15803d 100%)',
                        'radial-gradient(circle at 50% 50%, #15803d 0%, #16a34a 100%)',
                        'radial-gradient(circle at 50% 50%, #16a34a 0%, #15803d 100%)'
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
            />

            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-30 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md"
            >
                <X size={24} />
            </button>

            {/* Live Indicator (Premium Tech Look) */}
            <div className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                </span>
                <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-white drop-shadow-sm">LIVE VERIFIED</span>
            </div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="relative z-20 w-full max-w-sm flex flex-col items-center"
            >
                {/* Rotating Authenticity Ring (Premium) */}
                <div className="relative mb-8">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed border-white/30 w-32 h-32 -m-2"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dotted border-white/20 w-40 h-40 -m-6"
                    />

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] relative overflow-hidden"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            <CheckCircle size={70} className="text-green-600 drop-shadow-lg" />
                        </motion.div>

                        {/* Glossy Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-extrabold mb-2 tracking-tight text-white drop-shadow-lg"
                    >
                        टोकन स्वीकारले ✅
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-2 bg-green-800/30 px-4 py-1.5 rounded-full border border-green-400/20 backdrop-blur-sm"
                    >
                        <ShieldCheck size={14} className="text-green-300" />
                        <p className="text-green-50 text-sm font-semibold tracking-wide">
                            Verified Transaction
                        </p>
                    </motion.div>
                </div>

                {/* Ticket / Card (Glass + Floating Effect) */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl relative overflow-hidden group"
                >
                    {/* Shimmer Effect */}
                    <motion.div
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
                    />

                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/10 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 shadow-inner">
                            <User size={22} />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] text-green-200 uppercase font-bold tracking-wider mb-0.5">Member Name</p>
                            <p className="font-bold text-xl leading-tight text-white truncate">{subscriber?.name || 'Guest'}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-5 relative z-10">
                        <div className="text-left p-3 rounded-lg bg-black/10 border border-white/5">
                            <p className="text-[10px] text-green-200 uppercase font-bold mb-1">Date</p>
                            <div className="flex items-center gap-1.5 text-white">
                                <Calendar size={14} className="opacity-80" />
                                <span className="font-semibold text-sm">{dateString}</span>
                            </div>
                        </div>
                        <div className="text-left p-3 rounded-lg bg-black/10 border border-white/5">
                            <p className="text-[10px] text-green-200 uppercase font-bold mb-1">Logged Time</p>
                            <div className="flex items-center gap-1.5 text-white">
                                <Clock size={14} className="opacity-80" />
                                <span className="font-semibold text-sm">{timeString}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-4 flex justify-between items-center border border-white/10 relative z-10">
                        <div className="text-left">
                            <p className="text-[10px] text-green-100 uppercase font-bold tracking-widest mb-0.5">MEAL PLAN</p>
                            <div className="flex items-center gap-2">
                                <p className="font-bold text-white text-lg tracking-wide">{planName || 'Standard Plan'}</p>
                            </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shadow-lg border border-white/10">
                            <Zap size={20} className="text-yellow-300 drop-shadow-md" fill="currentColor" />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-8 flex items-center gap-3 opacity-60">
                    <span className="h-1 w-1 bg-white rounded-full"></span>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-green-50">Official Digital Receipt</p>
                    <span className="h-1 w-1 bg-white rounded-full"></span>
                </div>

            </motion.div>
        </div>
    );
};

export default TokenSuccessModal;
