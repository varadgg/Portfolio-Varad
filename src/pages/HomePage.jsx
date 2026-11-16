import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  TrendingUp, 
  Briefcase, 
  FileText, 
  CheckCircle2, 
  Award,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import CleanPhotoFrame from '../components/CleanPhotoFrame';
import { personalInfo, experience, projects, caseStudies } from '../data/portfolioData';

export default function HomePage() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for professional taglines
  useEffect(() => {
    const fullText = personalInfo.taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      } else {
        setDisplayText(
          fullText.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTaglineIndex]);

  // Featured 4 case studies for preview
  const featuredStudies = caseStudies.slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
        
        {/* Subtle Background Radial Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-gold-500/10 via-amber-600/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call-To-Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono tracking-wide">
              <Sparkles size={13} className="text-gold-400 animate-spin-slow" />
              <span>Business Analysis · Systems Consulting · Data Strategy</span>
            </div>

            {/* Main Hero Header */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
                Hi, I'm <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">Varad Gursalkar</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl text-gray-300 font-medium">
                  {displayText}
                  <span className="inline-block w-2.5 h-6 bg-gold-400 ml-1 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Bio summary excerpt */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/varad-resume.pdf"
                download="Varad_Gursalkar_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-950 shadow-xl shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download size={16} className="stroke-[2.5]" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold glass-panel border border-gold-500/30 text-white hover:text-gold-300 hover:border-gold-500/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore 16 Case Studies</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-xl border border-white/5">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Professional Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <CleanPhotoFrame 
              imageSrc={personalInfo.photo} 
              alt={personalInfo.name} 
            />
          </div>

        </div>
      </section>

      {/* CORE EXPERTISE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold block mb-2">
            Value Proposition
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Bridging Business Strategy with Technical Delivery
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3">
            Translating complex client requirements into structured engineering specifications and high-impact BI visualization architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Briefcase size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Business & Requirements Analysis
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              End-to-end BRD and FRD authoring, stakeholder interviews, user journey mapping, and translating ambiguous business problems into granular Agile user stories with clear acceptance criteria.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>BRD & FRD Authoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>BPMN Process Modeling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>Root-Cause & Gap Analysis</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Enterprise BI & Data Analytics
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Building automated Power BI executive reporting suites, complex DAX telemetry models, and Python scripts that turn disconnected operational logs into real-time decision dashboards.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>Power BI & DAX Formulations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>Python (Pandas, ETL Pipelines)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>SQL Data Modeling & Auditing</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl relative group">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Digital Transformation Consulting
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Guiding Agile engineering squads through digital modernizations, pre-sales RFP responses, solution architectures, and cross-functional project coordination.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>Agile / Scrum Sprint Leadership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>Pre-Sales RFP Solutioning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                <span>Enterprise Client Management</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* FEATURED CASE STUDIES TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold block mb-2">
              In-Depth Research
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Macroeconomic & Geopolitical Case Studies
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              16 extensively researched analyses evaluating AI unit economics, the petrodollar pact, sovereign elections, and corporate restructuring.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 group shrink-0"
          >
            <span>View All 16 Case Studies</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-dark-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base text-white group-hover:text-gold-400 transition-colors line-clamp-2 mb-2">
                  {study.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-3 mb-4 flex-1">
                  {study.abstract}
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gold-500">
                  <span>{study.readTime}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Analysis &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUICK WORK EXPERIENCE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/20 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-semibold block">
                Track Record & Client Engagements
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Proven Delivery Across Global Brands & Consultancies
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                From pre-sales telecom proposals at <span className="text-gold-400 font-semibold">Ciena</span> to campaign BI dashboards at <span className="text-gold-400 font-semibold">Dentsu India</span> for enterprise clients like <span className="text-white font-medium">Classic Legends</span>, <span className="text-white font-medium">Emami</span>, and <span className="text-white font-medium">Yara International</span>.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                <span className="px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10">Inspacco (Current)</span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-900 border border-gold-500/30 text-gold-300">Dentsu India</span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10">Ciena</span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10">ProAzure Software</span>
                <span className="px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10">Venture Technologies</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gold-500 hover:bg-gold-400 text-dark-950 transition-all text-center"
              >
                <span>View Full Career Timeline</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold glass-panel border border-white/10 text-white hover:text-gold-300 transition-all text-center"
              >
                <span>Inspect Client Projects</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
