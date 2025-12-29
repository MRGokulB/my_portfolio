import React from 'react';
import { FileText, Download, CheckCircle, ArrowRight, Shield, Star, Users } from 'lucide-react';
import Button from '../ui/Button';
import Breadcrumbs from '../ui/Breadcrumbs';
import SEO from '../SEO';

const GuideViewer = ({ resource }) => {
    return (
        <article className="flex flex-col min-h-screen bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white pt-24">
            <SEO
                title={`${resource.title} | IntraIntel.ai`}
                description={resource.description}
                ogImage={resource.image}
                schemaType="TechArticle"
                author="IntraIntel.AI"
            />
            <div className="max-w-7xl mx-auto w-full px-6 py-4">
                <Breadcrumbs />
            </div>
            <div className="flex flex-col lg:flex-row flex-1">
                {/* Left: Preview/Cover Section */}
                <div className="w-full lg:w-[45%] bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200">
                    {/* Abstract Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]" />
                    </div>

                    {/* 3D Book Cover Effect */}
                    <div className="relative group perspective-1000">
                        <div className="relative w-56 md:w-72 aspect-[3/4] shadow-2xl rounded-r-lg rounded-l-sm transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-105 z-10 bg-white">
                            <img
                                src={resource.image}
                                alt={resource.title}
                                className="w-full h-full object-cover rounded-r-lg rounded-l-sm"
                                fetchPriority="high"
                            />
                            {/* Gloss Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/10 to-transparent pointer-events-none rounded-r-lg rounded-l-sm" />

                            {/* Spine Shadow */}
                            <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/20 to-transparent" />

                            {/* Badge */}
                            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
                                NEW
                            </div>
                        </div>

                        {/* Reflection/Shadow */}
                        <div className="absolute -bottom-8 left-4 right-4 h-4 bg-black/20 blur-xl rounded-[100%] transform scale-x-90 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-slate-400">
                        <div className="flex flex-col items-center gap-1">
                            <Star size={20} className="text-yellow-400 fill-current" />
                            <span className="text-xs font-medium uppercase tracking-wider">{resource.rating || '4.9/5 Rating'}</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="flex flex-col items-center gap-1">
                            <Users size={20} />
                            <span className="text-xs font-medium uppercase tracking-wider">{resource.downloads || '2k+ Downloads'}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Details & Action */}
                <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-20 flex flex-col justify-center overflow-y-auto">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100">
                                {resource.category}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">{resource.meta}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {resource.title}
                        </h1>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            {resource.description}
                        </p>

                        {/* Dynamic Learnings List */}
                        {resource.learnings && (
                            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Shield size={18} className="text-blue-600" />
                                    What you'll learn
                                </h3>
                                <ul className="grid grid-cols-1 gap-3">
                                    {resource.learnings.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button
                                variant="primary"
                                size="lg"
                                href={resource.downloadUrl || "#"}
                                icon={<Download size={20} />}
                                className="justify-center w-full sm:w-auto shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30"
                                onClick={(e) => {
                                    if (!resource.downloadUrl) {
                                        e.preventDefault();
                                        alert("Download started! (Demo)");
                                    }
                                }}
                            >
                                Download PDF
                            </Button>
                            <Button
                                variant="secondary"
                                size="lg"
                                icon={<ArrowRight size={20} />}
                                className="justify-center w-full sm:w-auto"
                            >
                                Read Online
                            </Button>
                        </div>

                        {/* Integrated Long-Form Content */}
                        {resource.content && (
                            <div className="prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-li:marker:text-blue-500 prose-strong:text-slate-900 border-t border-slate-100 pt-10">
                                {/* Render HTML content safely */}
                                <div dangerouslySetInnerHTML={{ __html: resource.content }} />
                            </div>
                        )}

                        <p className="mt-6 text-xs text-slate-400 text-center sm:text-left">
                            By downloading, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default GuideViewer;
