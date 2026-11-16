import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
            <Mail size={13} />
            <span>Connect & Collaborate</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Interested in discussing a Business Analyst role, consulting engagement, or deep-dive analysis? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              <h2 className="font-display font-bold text-xl text-white border-b border-white/5 pb-4">
                Direct Contact Information
              </h2>

              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-dark-900 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-gold-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-dark-900 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-gold-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-dark-900 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Current Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                    <span className="block text-xs font-mono text-emerald-400 mt-0.5">
                      Open to Relocate (National & Global)
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-dark-900 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 font-mono text-sm font-bold">
                    in
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Professional Network
                    </span>
                    <a 
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gold-400 hover:underline"
                    >
                      linkedin.com/in/varadgursalkar
                    </a>
                  </div>
                </div>

              </div>

              {/* Resume Download Callout */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href="/varad-resume.pdf"
                  download="Varad_Gursalkar_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 hover:from-gold-400 hover:to-gold-500 transition-all shadow-md shadow-gold-500/20"
                >
                  <Download size={15} />
                  <span>Download Verified Resume (PDF)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h2 className="font-display font-bold text-xl text-white mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill in your details and click submit to trigger a direct email draft.
              </p>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-6 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  <span>Thank you! Your email client has been opened with your inquiry.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-dark-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-dark-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Subject / Discussion Topic *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Business Analyst Opportunity / Consulting Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-dark-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Your Message / Project Requirements *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Briefly describe your requirements or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-dark-900 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-950 transition-all shadow-md shadow-gold-500/20 active:scale-[0.99]"
                >
                  <Send size={15} />
                  <span>Send Message via Email</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
