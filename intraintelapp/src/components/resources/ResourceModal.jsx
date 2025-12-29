import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ResourceModal = ({ isOpen, onClose, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-slate-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: '100%' }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: '100%' }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                            className="relative w-full max-w-6xl h-[95vh] sm:h-[90vh] bg-white sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                        >
                            {/* Close Button - Floating on Desktop, Fixed Header on Mobile */}
                            <div className="absolute top-0 left-0 right-0 z-20 flex justify-end p-4 pointer-events-none">
                                <button
                                    onClick={onClose}
                                    className="pointer-events-auto p-2 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full text-slate-800 transition-all duration-200"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content Scroll Area */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResourceModal;
