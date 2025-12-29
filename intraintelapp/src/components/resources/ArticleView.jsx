import React from 'react';
import { Calendar, Clock, Share2, User, Bookmark, Twitter, Linkedin, Link as LinkIcon, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const ArticleViewer = ({ resource }) => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header / Back Link */}
            <div className="max-w-7xl mx-auto px-6 py-4 pt-24">
                <Link to="/resources" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
                    <ArrowLeft size={16} /> Back to Resources
                </Link>
            </div>

            {/* Hero Section - Refined for Page Feel */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
                    <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <motion_div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-4xl"
                        >
                            <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded mb-6 inline-block shadow-lg">
                                {resource.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
                                {resource.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-slate-200 text-sm md:text-base font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                                        <User size={14} />
                                    </div>
                                    <span>Sarah Chen</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-blue-400" />
                                    <span>Oct 15, 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-blue-400" />
                                    <span>{resource.meta}</span>
                                </div>
                            </div>
                        </motion_div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* Main Article Content */}
                <div className="flex-1 lg:max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl prose-img:shadow-lg">
                        <p className="lead text-xl md:text-2xl text-slate-600 mb-8 font-light leading-relaxed">
                            {resource.description}
                        </p>

                        <p>
                            In the rapidly evolving landscape of artificial intelligence, the ability to retrieve accurate and relevant information is just as critical as the generation capabilities of the models themselves. As enterprises scale their AI operations, they often hit a wall: <strong>latency</strong> and <strong>accuracy</strong> at scale.
                        </p>

                        <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Challenge of Scale</h2>
                        <p>
                            When dealing with millions of documents, traditional keyword search falls short. Semantic search offers a solution, but it introduces its own set of complexities. How do you maintain sub-second response times when querying a vector database containing billions of embeddings?
                        </p>

                        <figure className="my-10 p-8 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                            <blockquote className="text-xl italic text-slate-800 font-serif leading-relaxed">
                                "The future of enterprise AI lies not just in model size, but in the efficiency of retrieval systems. Context is king, and speed is queen."
                            </blockquote>
                            <figcaption className="mt-4 text-sm text-slate-500 font-medium uppercase tracking-wide">
                                — Dr. Emily Zhang, Chief AI Architect
                            </figcaption>
                        </figure>

                        <h2 className="text-2xl md:text-3xl mt-12 mb-6">Implementing the Solution</h2>
                        <p>
                            We found that a hybrid approach yields the best results. By combining dense vector retrieval with sparse keyword search (BM25), we can capture both semantic meaning and exact keyword matches.
                        </p>

                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 mb-1">Vector Database Optimization</strong>
                                    <span className="text-slate-600">Using HNSW indexes for approximate nearest neighbor search to speed up queries by 100x.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 mb-1">Semantic Caching</strong>
                                    <span className="text-slate-600">Storing common queries and their embeddings to bypass model inference.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 mb-1">Reranking</strong>
                                    <span className="text-slate-600">Using a cross-encoder to re-score the top K results for higher precision.</span>
                                </div>
                            </li>
                        </ul>

                        <p>
                            This architecture allowed us to scale to 10 million documents while keeping P99 latency under 200ms.
                        </p>
                    </div>

                    {/* Author Box */}
                    <div className="mt-16 p-8 bg-slate-50 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-slate-100">
                        <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-4 ring-white shadow-md">
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-2xl">👩‍💻</div>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-bold text-slate-900">Written by Sarah Chen</h3>
                            <p className="text-blue-600 text-sm font-medium mb-3">Senior AI Researcher</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Sarah leads the Retrieval Augmented Generation team at IntraIntel. She specializes in vector database optimization and huge-scale semantic search systems.
                            </p>
                            <div className="flex justify-center sm:justify-start gap-3">
                                <button className="p-2 rounded-full bg-white text-slate-500 hover:text-blue-600 border border-slate-200 transition-colors">
                                    <Twitter size={16} />
                                </button>
                                <button className="p-2 rounded-full bg-white text-slate-500 hover:text-blue-700 border border-slate-200 transition-colors">
                                    <Linkedin size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Desktop) */}
                <div className="hidden lg:block w-80 shrink-0 space-y-8 sticky top-32 h-fit">
                    {/* Share Widget */}
                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Share</h4>
                        <div className="flex gap-2">
                            <button className="flex-1 py-2 px-3 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                <Twitter size={16} />
                                Tweet
                            </button>
                            <button className="flex-1 py-2 px-3 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                <Linkedin size={16} />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Table of Contents - Clean Style */}
                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">On this page</h4>
                        <ul className="space-y-3 text-sm border-l-2 border-slate-100 ml-1">
                            <li className="pl-4 border-l-2 border-blue-600 -ml-[2px] text-blue-700 font-medium cursor-pointer">The Challenge of Scale</li>
                            <li className="pl-4 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Implementing the Solution</li>
                            <li className="pl-4 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Vector DB Optimization</li>
                            <li className="pl-4 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Results & Metrics</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 text-white text-center">
                        <h4 className="font-bold text-lg mb-2">Ready to scale?</h4>
                        <p className="text-white/80 text-sm mb-6">Get a demo of our high-scale retrieval engine.</p>
                        <Button variant="primary" className="w-full justify-center">Get a Demo</Button>
                    </div>
                </div>
            </div>

            {/* Related Articles - The 'Network' Effect */}
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-slate-200">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Related Articles</h2>
                    <Link to="/resources" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View all resources <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[16/9] rounded-xl bg-slate-100 mb-4 overflow-hidden">
                                <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Engineering</span>
                                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors leading-snug">
                                    Building Resilient LLM Pipelines for Financial Data
                                </h3>
                                <p className="text-slate-500 text-sm line-clamp-2">
                                    How we ensured 99.99% accuracy when processing sensitive financial documents using multi-stage verification.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper for animation to avoid import issues if motion isn't passed
const motion_div = ({ children, ...props }) => <div {...props}>{children}</div>;

export default ArticleViewer;
