import React, { useState, useEffect } from 'react';
import { Play, Calendar, Clock, Share2, ThumbsUp, MessageCircle, MoreHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Breadcrumbs from '../ui/Breadcrumbs';
import { fetchResources } from '../../services/resources';
import SEO from '../SEO';

const VideoViewer = ({ resource }) => {
    const navigate = useNavigate();
    const [upNextVideos, setUpNextVideos] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const loadVideos = async () => {
            const allResources = await fetchResources();
            // Filter: Type is video, and not the current one
            const filtered = allResources.filter(r => r.type === 'video' && r.id !== resource.id);
            setUpNextVideos(filtered);
        };
        loadVideos();
    }, [resource.id]);
    return (
        <article className="min-h-screen bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white pt-24 pb-12">
            <SEO
                title={`${resource.title} | IntraIntel.ai`}
                description={resource.description}
                ogImage={resource.image}
                schemaType="VideoObject"
                author={resource.author || "IntraIntel.AI"}
            />
            {/* Header / Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <Breadcrumbs />
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
                {/* Main Content: Video + Info */}
                <div className="flex-1">
                    {/* Video Player - Theater Mode */}
                    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                        {resource.videoUrl ? (
                            <iframe
                                src={resource.videoUrl}
                                title={resource.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : (
                            <>
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Video Meta & Description */}
                    <div className="prose prose-slate max-w-none">
                        <div className="flex flex-wrap items-center gap-3 mb-4 not-prose">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                {resource.category}
                            </span>
                            <span className="text-slate-400 text-sm">•</span>
                            <span className="text-slate-500 text-sm font-medium">{resource.meta}</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{resource.title}</h1>

                        <div className="flex items-center justify-between py-6 border-b border-slate-100 mb-8 not-prose">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                                    II
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">IntraIntel Team</p>
                                    <p className="text-xs text-slate-500">Published Nov 28, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-500 transition-colors"><ThumbsUp size={20} /></button>
                                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-500 transition-colors"><Share2 size={20} /></button>
                                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-500 transition-colors"><MoreHorizontal size={20} /></button>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            {resource.description || "In this session, we dive deep into the architecture that powers our latest generative AI models. Learn how to optimize your data pipelines for RAG (Retrieval-Augmented Generation) and ensure your enterprise data remains secure throughout the process."}
                        </p>
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>Understanding Vector Embeddings</li>
                            <li>Optimizing Context Windows</li>
                            <li>Security Best Practices for LLMs</li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar: Up Next */}
                <div className="w-full lg:w-80 shrink-0 transition-all duration-300">
                    <div className="sticky top-32 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                        >
                            <h3 className="font-bold text-slate-900 text-lg">Up Next</h3>
                            {isSidebarOpen ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
                        </button>

                        <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
                                {upNextVideos.length > 0 ? (
                                    upNextVideos.map((video) => (
                                        <div
                                            key={video.id}
                                            className="group cursor-pointer flex gap-3 items-start"
                                            onClick={() => navigate(`/resources/video/${video.id}`)}
                                        >
                                            <div className="relative w-32 aspect-video bg-slate-100 rounded-lg overflow-hidden shrink-0">
                                                <img
                                                    src={video.image}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                                <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/70 text-white text-[10px] rounded font-bold">
                                                    {video.meta.split(' ')[0]}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                                                    {video.title}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-1 truncate">{video.author || "IntraIntel Team"}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] text-slate-400">{video.views || '1k views'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-slate-500 text-center py-4">No other videos available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default VideoViewer;
