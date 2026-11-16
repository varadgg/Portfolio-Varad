import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <GraduationCap size={13} />
            <span>Academic Qualifications</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Educational Background
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            A solid technical grounding across Computer Science Engineering, Electrical Systems, and foundational sciences.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Gold gradient top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-amber-400 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-gold-400 font-semibold tracking-wider uppercase block mb-1">
                    {item.institution}
                  </span>
                  <h2 className="font-display font-bold text-2xl text-white group-hover:text-gold-300 transition-colors">
                    {item.degree}
                  </h2>
                </div>

                {/* Grade Badge */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-block px-3.5 py-1.5 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-300 font-display font-bold text-lg shadow-sm shadow-gold-500/20">
                    {item.grade}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 mt-1 uppercase">
                    Cumulative Score
                  </div>
                </div>
              </div>

              {/* Location and Date */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mb-4 pb-4 border-b border-white/5">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Calendar size={13} className="text-gold-400" />
                  <span>{item.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-gold-400" />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.details}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
