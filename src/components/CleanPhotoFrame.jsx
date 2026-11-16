import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CleanPhotoFrame({ imageSrc, alt = "Varad Gursalkar" }) {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Subtle ambient gold background glow */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-gold-500/15 via-amber-600/5 to-transparent blur-2xl pointer-events-none -z-10" />
      
      {/* Luxury Portrait Card Container */}
      <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-gold-500/30 via-white/5 to-gold-900/40 shadow-2xl shadow-gold-950/80 transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Bezel frame */}
        <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-dark-900 border border-gold-500/40">
          
          {/* Real Portrait Photo */}
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03]"
          />

          {/* Luxury Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-75 pointer-events-none" />

          {/* Bottom badge */}
          <div className="absolute bottom-3 left-3 right-3 glass-panel px-3 py-2 rounded-xl border border-gold-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-200">Varad Gursalkar</span>
            </div>
            <span className="text-[10px] font-mono text-gold-400">Pune, India</span>
          </div>

        </div>

        {/* Small corner accent */}
        <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-lg bg-dark-800 border border-gold-500/50 flex items-center justify-center text-gold-400 shadow-md">
          <Sparkles size={14} />
        </div>

      </div>
    </div>
  );
}
