import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building, Users, Download } from 'lucide-react';
import { experience, personalInfo } from '../data/portfolioData';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <Briefcase size={13} />
            <span>Professional Career History</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Work Experience
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Detailed career timeline highlighting enterprise business analysis, stakeholder orchestration, BI automation, and digital consulting initiatives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-gold-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-dark-950 border-2 border-gold-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className={`w-2 h-2 rounded-full ${exp.type === 'Current' ? 'bg-emerald-400 animate-ping' : 'bg-gold-400'}`} />
              </div>

              {/* Main Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {exp.role}
                      </h2>
                      {exp.type === 'Current' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gold-400 font-semibold text-base mt-1">
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-gray-400 space-y-1">
                    <span className="flex items-center gap-1.5 text-gold-300">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {exp.overview}
                </p>

                {/* Key Client Callout for Dentsu */}
                {exp.clients && (
                  <div className="mb-5 p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <div className="text-xs font-mono text-gold-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                      <Users size={14} />
                      <span>Direct Enterprise Clients Managed:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.clients.map((client, cIdx) => (
                        <span 
                          key={cIdx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-dark-900 border border-gold-500/40 text-white"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Projects Callout for Ciena */}
                {exp.highlightProjects && (
                  <div className="mb-5 p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <div className="text-xs font-mono text-gold-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                      <Briefcase size={14} />
                      <span>Pre-Sales Algorithms & Analysis Built:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlightProjects.map((proj, pIdx) => (
                        <span 
                          key={pIdx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-dark-900 border border-gold-500/40 text-gold-300"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Detailed Accomplishments */}
                <div className="space-y-2.5">
                  <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                    Core Responsibilities & Impact:
                  </h3>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Resume Download CTA */}
        <div className="mt-16 text-center glass-panel p-8 rounded-2xl border border-gold-500/20">
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Want a Complete Printable Copy of My Work History?
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-6 max-w-lg mx-auto">
            Download the official verified two-page resume PDF with comprehensive project breakdowns and references.
          </p>
          <a
            href="/varad-resume.pdf"
            download="Varad_Gursalkar_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gold-500 hover:bg-gold-400 text-dark-950 transition-all shadow-lg shadow-gold-500/20"
          >
            <Download size={16} className="stroke-[2.5]" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
