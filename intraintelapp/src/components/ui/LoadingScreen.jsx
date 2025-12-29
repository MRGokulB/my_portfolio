import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';

const LoadingScreen = ({ showProgressBar = true }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF9F5] overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Container with Pulse Effect */}
                <div className="relative mb-8">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl"
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-24 h-24 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl flex items-center justify-center"
                    >
                        <img src={logo} alt="IntraIntel.AI" className="w-14 h-14" />
                    </motion.div>
                </div>

                {/* Text Animation */}
                <div className="text-center space-y-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-2xl font-light text-slate-900 tracking-tight"
                    >
                        IntraIntel<span className="font-semibold text-blue-600">.AI</span>
                    </motion.h1>


                    {/* Loading Animation    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex items-center gap-2 justify-center"
                    >
                        <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">Initializing</span>
                        <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -4, 0],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className="w-1 h-1 rounded-full bg-blue-600"
                                />
                            ))}
                        </div>
                    </motion.div>*/}
                </div>

                {/* Progress Bar */}
                {showProgressBar && (
                    <motion.div
                        className="mt-12 w-48 h-1 bg-slate-100 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
