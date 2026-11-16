import React from 'react';
import { MapPin } from 'lucide-react';

export default function CleanPhotoFrame({ imageSrc, alt = "Varad Gursalkar" }) {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Soft dark ambient depth that melts seamlessly into the page (#050505) */}
      <div className="absolute -inset-6 rounded-3xl bg-radial from-dark-800/40 via-dark-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Borderless Portrait Container */}
      <div className="group relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden bg-dark-950 shadow-2xl transition-all duration-500 hover:scale-[1.01]">
        
        {/* Real Portrait Photo */}
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover object-top filter brightness-[0.96] contrast-[1.03] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
        />

        {/* Natural Vignette & Edge Dissolve: photo fades gently into dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(5,5,5,0.9)] pointer-events-none" />

        {/* Floating Minimalist Status & Location Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-dark-900/80 backdrop-blur-md px-3.5 py-2.5 rounded-2xl flex items-center justify-between shadow-lg pointer-events-auto">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono font-medium text-gray-200">Varad Gursalkar</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
            <MapPin size={11} className="text-gray-400" />
            <span>Pune, IN</span>
          </div>
        </div>

      </div>
    </div>
  );
}
