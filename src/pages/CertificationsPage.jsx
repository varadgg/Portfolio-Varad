import React from 'react';
import { Award, CheckCircle2, Calendar, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <Award size={13} />
            <span>Professional Credentials</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Industry Certifications
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Verified job simulations and certifications from global tier-1 strategy consultancies, investment banks, and enterprise tech corporations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                
                {/* Issuer Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r border ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{cert.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display font-bold text-lg text-white group-hover:text-gold-300 transition-colors mb-3 leading-snug">
                  {cert.title}
                </h2>

                {/* Skills Learned */}
                <div className="p-3 rounded-xl bg-dark-900 border border-white/5 mb-4">
                  <span className="text-[10px] font-mono text-gold-400/80 uppercase tracking-wider block mb-1">
                    Verified Competencies
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed font-mono">
                    {cert.skills}
                  </p>
                </div>

              </div>

              {/* Verified Status */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Credential Verified</span>
                </span>
                <span className="text-[10px] text-gray-400">Forage / Corporate</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
