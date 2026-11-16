import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  TrendingUp, 
  Globe2, 
  Clock, 
  ArrowRight, 
  Search,
  Filter,
  Sparkles
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Business & Economics', 'Political & Geopolitical'];

  const filteredStudies = caseStudies.filter((study) => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <FileText size={13} />
            <span>Analytical Publications & Research</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Case Studies
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Rigorous qualitative and macroeconomic research unpacking systemic corporate pivots, financialized healthcare, sovereign border water pacts, and geopolitical power shifts.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-gold-500/20 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold-500 text-dark-950 font-bold shadow-md shadow-gold-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search 16 case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-dark-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              
              {/* Cover Image Container */}
              <div className="relative h-52 overflow-hidden bg-dark-900">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  loading="lazy"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold backdrop-blur-md border ${
                    study.category.includes('Business')
                      ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                      : 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                  }`}>
                    {study.category}
                  </span>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-dark-950/80 text-gray-300 backdrop-blur-md flex items-center gap-1 border border-white/10">
                    <Clock size={10} />
                    <span>{study.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  
                  {/* Title */}
                  <h2 className="font-display font-bold text-lg text-white group-hover:text-gold-300 transition-colors leading-snug mb-2">
                    {study.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-xs font-mono text-gold-400/90 italic mb-3">
                    {study.subtitle}
                  </p>

                  {/* Abstract preview */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3 mb-5">
                    {study.abstract}
                  </p>

                </div>

                {/* Card Footer with Quick Metric Preview */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-gray-400">
                    Key Metric: <span className="text-gold-400 font-bold">{study.keyMetrics[0].value}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                    <span>Read Study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

              </div>

            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-20 glass-panel rounded-2xl border border-white/5">
            <p className="text-gray-400 text-sm">No case studies found matching your query.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-gold-500 text-dark-950 font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
