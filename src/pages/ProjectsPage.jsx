import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  UserCheck, 
  Terminal, 
  CheckCircle2, 
  Wrench, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Client Engagement (Dentsu)',
    'Corporate Project (Ciena)',
    'Personal Project'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <Layers size={13} />
            <span>Portfolio Deliverables</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Featured Projects
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Distinguished client projects delivered at Dentsu (Classic Legends, Emami, Yara International), telecom algorithmic solutions at Ciena, and cutting-edge personal AI/BI platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gold-500 text-dark-950 font-bold shadow-md shadow-gold-500/20'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-gold-500/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                
                {/* Category & Period Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium ${
                    project.category.includes('Dentsu')
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                      : project.category.includes('Ciena')
                      ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{project.period}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors mb-2">
                  {project.title}
                </h2>

                {/* Organization / Client attribution */}
                <div className="text-xs font-mono text-gold-400 font-semibold mb-4">
                  {project.client ? (
                    <span>Client: <span className="text-white">{project.client}</span> via {project.organization}</span>
                  ) : (
                    <span>Org: <span className="text-white">{project.organization}</span></span>
                  )}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircle2 size={13} className="text-gold-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Tools Tags Footer */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Wrench size={11} />
                  <span>Key Tools & Competencies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-900 border border-white/10 text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
