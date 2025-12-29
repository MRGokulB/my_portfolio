import React from 'react';
import { Calendar, Clock, Share2, User, Bookmark, Twitter, Linkedin, Link as LinkIcon, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Breadcrumbs from '../ui/Breadcrumbs';
import { fetchResources } from '../../services/resources';
import { useEffect, useState } from 'react';
import SEO from '../SEO';

const ArticleViewer = ({ resource }) => {
    const navigate = useNavigate();
    const [relatedResources, setRelatedResources] = useState([]);

    useEffect(() => {
        const loadRelated = async () => {
            const all = await fetchResources();
            // Filter out current resource and limit to 3
            const filtered = all.filter(r => r.id !== resource.id).slice(0, 3);
            setRelatedResources(filtered);
        };
        loadRelated();
    }, [resource.id]);

    return (
        <article className="bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white min-h-screen pb-20">
            <SEO
                title={`${resource.title} | IntraIntel.ai`}
                description={resource.description}
                ogImage={resource.image}
                schemaType="Article"
                author="IntraIntel.AI"
            />
            {/* Header / Breadcrumbs */}
            <header className="max-w-7xl mx-auto px-6 py-4 pt-24">
                <Breadcrumbs />
            </header>

            {/* Hero Section - Refined for Page Feel */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
                    <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                        fetchPriority="high"
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

                        <div dangerouslySetInnerHTML={{ __html: resource.content }} />
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
                            <button
                                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(resource.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                className="flex-1 py-2 px-3 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                            >
                                <Twitter size={16} />
                                Tweet
                            </button>
                            <button
                                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                className="flex-1 py-2 px-3 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                            >
                                <Linkedin size={16} />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Table of Contents - Removed as per request due to hardcoded nature */}


                    {/* CTA */}
                    <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 text-white text-center">
                        <h4 className="font-bold text-lg mb-2">Ready to scale?</h4>
                        <p className="text-white/80 text-sm mb-6">Get a demo of our high-scale retrieval engine.</p>
                        <Button variant="primary" className="w-full justify-center" onClick={() => navigate('/contact')}>Get a Demo</Button>
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
                    {relatedResources.map((item) => (
                        <div key={item.id} className="group cursor-pointer" onClick={() => navigate(`/resources/${item.type}/${item.id}`)}>
                            <div className="aspect-[16/9] rounded-xl bg-slate-100 mb-4 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
                                <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

// Helper for animation to avoid import issues if motion isn't passed
const motion_div = ({ children, ...props }) => <div {...props}>{children}</div>;

export default ArticleViewer;
