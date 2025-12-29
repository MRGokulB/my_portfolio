import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, BookOpen, FileText, ArrowUpRight, Sparkles, Filter, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { seoData } from '../data/intraintel';
import { fetchResources } from '../services/resources';

// Define a repeating pattern for the Bento Grid layout
const LAYOUT_PATTERN = ['large', 'normal', 'tall', 'normal', 'normal', 'wide', 'normal'];

const categories = [
  { id: 'all', label: 'View All' },
  { id: 'blog', label: 'Articles' },
  { id: 'video', label: 'Videos' },
  { id: 'guide', label: 'Guides' },
  { id: 'newsletter', label: 'Newsletters' }
];

// Text-Only Newsletter Component
const NewsletterArchive = ({ resources, onClick }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <h3 className="text-2xl font-light text-slate-400 uppercase tracking-[0.2em] mb-4">Archive</h3>
        <div className="w-12 h-px bg-slate-200 mx-auto"></div>
      </div>

      <div className="relative border-l border-slate-200 ml-4 md:ml-0 space-y-12 pb-12">
        {resources.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onClick(item)}
            className="group relative pl-8 md:pl-12 cursor-pointer"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300 z-10 box-content" />

            <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline">
              {/* Date */}
              <div className="min-w-[120px] shrink-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                  {item.publishedDate || 'Dec 2024'}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 pb-8 border-b border-slate-100 group-last:border-0 md:pr-12">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500 uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {item.meta || 'Issue'}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed font-light text-lg line-clamp-3 group-hover:text-slate-600 transition-colors">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                  Read Issue <ArrowUpRight className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ResourcesPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [resourcesData, setResourcesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate Data Fetching
  React.useEffect(() => {
    const loadResources = async () => {
      try {
        const data = await fetchResources();
        setResourcesData(data);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResources();
  }, []);

  // Update active category when URL param changes
  React.useEffect(() => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [category]);

  const filteredResources = resourcesData.filter(r => {
    const matchesCategory = activeCategory === 'all' || r.type === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO {...seoData.resources} />
      <div className="min-h-screen bg-gradient-to-b from-[#FFF9F5] via-[#F0F8FF] to-white pt-24 pb-20 px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative soft lights */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -left-20 -top-20 w-[36rem] h-[36rem] rounded-full filter blur-3xl opacity-70 hero-light-left"
            style={{ opacity: 0.07 }}
          />
          <div
            className="absolute right-8 top-24 w-64 h-64 rounded-full filter blur-2xl opacity-60 hero-light-right"
            style={{ opacity: 0.06 }}
          />
        </div>

        {/* Header & Search */}
        <div className="max-w-7xl mx-auto mb-16 space-y-8 relative">
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 -mx-6 -my-8 rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
          </div>

          <div className="text-center max-w-3xl mx-auto relative z-10 py-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg shadow-blue-500/10 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
                  Knowledge Center
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Resources <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Hub</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Insights, guides, and tutorials for the AI-first enterprise.
            </motion.p>
          </div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col   md:flex-row gap-4 items-center justify-between bg-white/70 backdrop-blur-xl p-2 rounded-2xl shadow-lg shadow-blue-900/5 border border-blue-100/50 max-w-4xl mx-auto"
          >
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-transparent outline-none text-slate-700 placeholder-slate-400"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-1 pr-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigate(cat.id === 'all' ? '/resources' : `/resources/${cat.id}`)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile Filter Dropdown (Simplified) */}
            <div className="md:hidden w-full flex gap-2 overflow-x-auto pb-2 px-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigate(cat.id === 'all' ? '/resources' : `/resources/${cat.id}`)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div id="docs" className="max-w-7xl mx-auto min-h-[600px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-slate-500 animate-pulse">Loading resources...</div>
            </div>
          ) : activeCategory === 'newsletter' ? (
            /* Text-Only Newsletter Archive */
            <NewsletterArchive
              resources={filteredResources}
              onClick={(item) => navigate(`/resources/${item.type}/${item.id}`)}
            />
          ) : (
            /* Standard Bento Grid */
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px] grid-flow-dense"
            >
              <AnimatePresence mode="popLayout">
                {filteredResources.map((item, index) => (
                  <BentoCard
                    key={item.id}
                    item={item}
                    index={index}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                    onClick={() => navigate(`/resources/${item.type}/${item.id}`)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Newsletter Signup Section */}
        <section id="newsletter" className="max-w-7xl mx-auto mt-24 mb-12 relative z-10">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-100 font-semibold tracking-wide uppercase text-xs">
                    Stay Intelligent
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Join 10,000+ AI Innovators
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Get exclusive insights, clinical trial simulations, and AI healthcare advancements delivered primarily to your inbox. No spam, just intelligence.
                </p>
              </div>

              <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Work Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5">
                    Subscribe Now
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    Join the IntraIntel ecosystem. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>




      </div>
    </>
  );
}

const BentoCard = ({ item, index, hoveredId, setHoveredId, onClick }) => {
  // Dynamically calculate size: Use item.size if explicitly set, otherwise fall back to pattern
  const size = item.size || LAYOUT_PATTERN[index % LAYOUT_PATTERN.length];

  const getSpanClasses = (size) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'tall': return 'md:col-span-1 md:row-span-2';
      case 'wide': return 'md:col-span-2 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  const isHovered = hoveredId === item.id;
  const isDimmed = hoveredId !== null && hoveredId !== item.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isDimmed ? 0.5 : 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer ${getSpanClasses(size)}`}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

          <div className="flex items-center justify-between mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -top-12 left-0 right-0">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
              {item.category}
            </span>
            <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mb-2 text-blue-400">
            {item.type === 'video' ? <Play className="w-6 h-6 fill-current" /> :
              item.type === 'guide' ? <BookOpen className="w-6 h-6" /> :
                item.type === 'newsletter' ? <Mail className="w-6 h-6" /> :
                  <FileText className="w-6 h-6" />}
          </div>

          <h3 className={`font-bold text-white mb-2 leading-tight ${size === 'large' ? 'text-3xl' : 'text-xl'
            }`}>
            {item.title}
          </h3>

          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <span>{item.meta}</span>
            {item.featured && (
              <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                Featured
              </span>
            )}
          </div>

          {(size === 'large' || size === 'wide') && (
            <p className="text-slate-300 text-sm mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
