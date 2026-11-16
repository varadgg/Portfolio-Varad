import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Download, Menu, X, ArrowUpRight, ShieldCheck, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Education', path: '/education' },
    { name: 'Skills & Tools', path: '/skills' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/85 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center font-display font-bold text-dark-950 text-lg shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform duration-200">
              VG
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-gold-400 transition-colors">
                Varad Gursalkar
              </span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-500/80 -mt-1">
                Business Analyst
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-sm shadow-gold-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/varad-resume.pdf"
              download="Varad_Gursalkar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-950 transition-all duration-200 shadow-md shadow-gold-500/20 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={14} className="stroke-[2.5]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="/varad-resume.pdf"
              download="Varad_Gursalkar_Resume.pdf"
              className="sm:hidden p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/30"
              title="Download Resume"
            >
              <Download size={16} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-dark-800 text-gray-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-b border-gold-500/20 mt-3 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-xs font-medium block transition-all ${
                    isActive
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10">
            <a
              href="/varad-resume.pdf"
              download="Varad_Gursalkar_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950"
            >
              <Download size={15} />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
