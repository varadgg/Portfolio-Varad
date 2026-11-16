import React from 'react';
import { 
  Wrench, 
  BarChart3, 
  Code2, 
  Compass, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function SkillsPage() {
  const categoryIcons = {
    "Business & Functional Analysis": Compass,
    "Data Analytics & BI": BarChart3,
    "Strategy & Consulting": Layers,
    "Technical Tools & Platforms": Code2,
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <Wrench size={13} />
            <span>Technical & Strategic Capabilities</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Skills & Competencies
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            A comprehensive matrix of analytical frameworks, BI dashboarding toolkits, software engineering proficiencies, and consultative methodologies.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => {
            const IconComponent = categoryIcons[category] || Cpu;

            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/5">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                        {category}
                      </h2>
                      <span className="text-[11px] font-mono text-gray-400">
                        {items.length} Core Competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3.5 py-2 rounded-xl text-xs font-mono bg-dark-900 border border-white/10 hover:border-gold-500/40 text-gray-200 hover:text-white transition-all flex items-center gap-2 group/pill shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80 group-hover/pill:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Sub-note */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>Applied across enterprise engagements</span>
                  <Sparkles size={13} className="text-gold-500/80" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
