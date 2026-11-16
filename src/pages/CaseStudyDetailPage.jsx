import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  FileText, 
  TrendingUp, 
  Sparkles,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display font-bold text-2xl text-white mb-4">Case Study Not Found</h1>
        <p className="text-gray-400 text-sm mb-6">The requested publication could not be located.</p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500 text-dark-950 text-xs font-semibold"
        >
          <ArrowLeft size={14} />
          <span>Back to Case Studies</span>
        </Link>
      </div>
    );
  }

  // Related studies (same category, different item)
  const relatedStudies = caseStudies
    .filter((s) => s.id !== study.id && s.category === study.category)
    .slice(0, 3);

  return (
    <article className="min-h-screen pt-24 pb-24">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate('/case-studies')}
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-gold-400 transition-colors group mb-6"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Case Studies</span>
        </button>

        {/* Category & Meta Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
              study.category.includes('Business')
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
            }`}>
              {study.category}
            </span>
            <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
              <Clock size={12} />
              <span>{study.readTime}</span>
            </span>
            <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
              <Calendar size={12} />
              <span>{study.date}</span>
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-xl text-gold-400/90 font-mono italic leading-relaxed">
            {study.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Visual Image Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-gold-500/30 shadow-2xl h-72 sm:h-96">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-gray-300">
            <span className="glass-panel px-3 py-1.5 rounded-lg border border-white/10">
              Photographic Attribution: Editorial Archive via Unsplash
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics Dashboard Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
            <BarChart3 size={15} />
            <span>Key Quantitative Indicators & Data Points</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {study.keyMetrics.map((metric, idx) => (
              <div key={idx} className="bg-dark-900/80 p-3.5 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono text-gray-400 line-clamp-1">
                  {metric.label}
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-gold-300 mt-1">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Abstract */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gold-500/10 via-amber-900/10 to-transparent border-l-4 border-gold-500">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold mb-2">
            Executive Summary & Thesis
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans">
            {study.abstract}
          </p>
        </div>
      </div>

      {/* Core Case Study Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {study.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white border-b border-white/10 pb-3">
              {section.heading}
            </h2>
            <div className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal space-y-4 whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Related Studies Footer */}
      {relatedStudies.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-white/10">
          <h3 className="font-display font-bold text-2xl text-white mb-6">
            More Analyses in {study.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedStudies.map((rel) => (
              <Link
                key={rel.id}
                to={`/case-studies/${rel.slug}`}
                className="glass-card p-4 rounded-xl group flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-gold-300 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {rel.subtitle}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gold-500">
                  <span>{rel.readTime}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </article>
  );
}
