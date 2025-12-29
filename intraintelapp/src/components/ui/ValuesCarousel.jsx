import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ValuesCarousel = ({ values }) => {
    const [currentIndex, setCurrentIndex] = useState(1);  
    const [isMoving, setIsMoving] = useState(false);

    const move = (direction) => {
        if (isMoving) return;
        setIsMoving(true);

        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % values.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
        }

        setTimeout(() => {
            setIsMoving(false);
        }, 600);
    };

    const getSlidePosition = (index) => {
        const diff = (index - currentIndex + values.length) % values.length;

        if (diff === 0) {
            // Center slide (active)
            return {
                transform: 'translateX(0) scale(1) translateY(-50px)',
                zIndex: 10,
                opacity: 1,
                showBackground: true,
                showContent: 'full'
            };
        } else if (diff === 1 || diff === -(values.length - 1)) {
            // Right slide
            return {
                transform: 'translateX(100%) scale(0.85)',
                zIndex: 1,
                opacity: 1,
                showBackground: false,
                showContent: 'title'
            };
        } else if (diff === values.length - 1 || diff === -1) {
            // Left slide
            return {
                transform: 'translateX(-100%) scale(0.85)',
                zIndex: 1,
                opacity: 1,
                showBackground: false,
                showContent: 'title'
            };
        } else {
            // Hidden slides
            return {
                transform: 'translateX(130%) scale(0.7)',
                zIndex: 0,
                opacity: 0,
                showBackground: false,
                showContent: 'none'
            };
        }
    };

    return (
        <div className="w-full py-10">
            {/* Slider Container */}
            <div className="max-w-[1100px] mx-auto px-5">
                {/* Slider Viewport */}
                <div className="relative h-[450px] flex justify-center items-center">
                    {/* Slides */}
                    {values.map((value, index) => {
                        const position = getSlidePosition(index);
                        const Icon = value.icon;

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-[35%] max-w-[360px] aspect-square rounded-[24px] overflow-hidden"
                                style={{
                                    backgroundColor: position.showBackground ? 'transparent' : '#e0eaff',
                                }}
                                animate={{
                                    transform: position.transform,
                                    opacity: position.opacity,
                                    zIndex: position.zIndex,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* Background Image/Gradient */}
                                {position.showBackground && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                )}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col justify-center items-center w-full h-full p-10 box-border">
                                    {/* Icon (always visible for center and side slides) */}
                                    {position.showContent !== 'none' && (
                                        <motion.div
                                            className="mb-6"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: position.showContent === 'full' ? 1 : 0.7,
                                                scale: position.showContent === 'full' ? 1 : 0.9
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className={`inline-flex p-4 rounded-2xl ${position.showContent === 'full'
                                                    ? 'bg-white border border-blue-200 shadow-lg'
                                                    : 'bg-white/80 border border-gray-200'
                                                }`}>
                                                <Icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Title */}
                                    {position.showContent !== 'none' && (
                                        <motion.h2
                                            className={`font-bold mb-4 w-full ${position.showContent === 'full'
                                                    ? 'text-[2.2rem] text-left text-gray-900'
                                                    : 'text-xl text-center text-blue-700'
                                                }`}
                                            style={{ lineHeight: 1.2 }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {value.title}
                                        </motion.h2>
                                    )}

                                    {/* Description (only for center slide) */}
                                    {position.showContent === 'full' && (
                                        <motion.p
                                            className="text-base leading-relaxed text-gray-600 mb-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                        >
                                            {value.desc}
                                        </motion.p>
                                    )}

                                    {/* Learn More Button (only for center slide) */}
                                    {position.showContent === 'full' && (
                                        <motion.button
                                            className="absolute bottom-8 bg-white border border-gray-200 rounded-full px-6 py-3 cursor-pointer text-gray-700 flex items-center gap-2 font-bold hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8 md:absolute md:top-[calc(50%+145px)] md:left-1/2 md:-translate-x-1/2 md:z-20 md:mt-0">
                    <button
                        onClick={() => move('prev')}
                        className="bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-blue-600 transition-colors p-2"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-4 text-xl font-bold text-blue-700">
                        {values.map((_, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer transition-colors ${index === currentIndex ? 'text-gray-900' : 'text-blue-700'
                                    }`}
                                onClick={() => {
                                    if (!isMoving) {
                                        setCurrentIndex(index);
                                    }
                                }}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={() => move('next')}
                        className="bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-blue-600 transition-colors p-2"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Accessibility announcement */}
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                    Slide {currentIndex + 1} of {values.length} shown.
                </div>
            </div>
        </div>
    );
};

export default ValuesCarousel;
