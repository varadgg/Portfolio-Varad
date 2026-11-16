import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, FileText, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-gold-500/10 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center font-display font-bold text-dark-950 text-base shadow-md shadow-gold-500/20">
                VG
              </div>
              <span className="font-display font-bold text-xl text-white">
                Varad Gursalkar
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Business Analyst & Data Strategist specializing in requirements engineering, enterprise BI dashboards, process transformation, and macroeconomic research.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 hover:border-gold-500/40 text-gray-300 hover:text-gold-400 flex items-center justify-center transition-all font-mono text-xs font-bold"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 hover:border-gold-500/40 text-gray-300 hover:text-gold-400 flex items-center justify-center transition-all"
                title="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="/varad-resume.pdf"
                download="Varad_Gursalkar_Resume.pdf"
                className="px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono flex items-center gap-1.5 hover:bg-gold-500/20 transition-all"
              >
                <FileText size={13} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4 font-semibold">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/experience" className="hover:text-gold-300 transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gold-300 transition-colors">
                  Client & Personal Projects
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-gold-300 transition-colors">
                  Deep-Dive Case Studies
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-gold-300 transition-colors">
                  Educational Background
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-gold-300 transition-colors">
                  Skills & Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4 font-semibold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-gold-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold-500 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors truncate">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gold-500 shrink-0" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Relocation & Roles
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} Varad Gursalkar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with React, Tailwind CSS & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}
