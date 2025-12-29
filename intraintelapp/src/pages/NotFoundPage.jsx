// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { seoData } from '../data/intraintel';

export default function NotFoundPage() {
    return (
        <>
            <SEO {...seoData.notFound} />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 flex items-center justify-center px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* 404 Number */}
                        <div className="mb-8">
                            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                                404
                            </h1>
                        </div>

                        {/* Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Page Not Found
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Home className="w-5 h-5" />
                                Back to Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Go Back
                            </button>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-16"
                        >
                            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                                <span>Lost?</span>
                                <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                                    Contact us for help
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Background Decoration */}
                    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </>
    );
}
