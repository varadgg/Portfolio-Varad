import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Eye } from 'lucide-react';

export default function InteractiveAvatar({ imageSrc, alt = "Varad Gursalkar" }) {
  const containerRef = useRef(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const avatarCenterX = rect.left + rect.width / 2;
      const avatarCenterY = rect.top + rect.height / 2;

      // Distance from mouse to avatar center
      const deltaX = e.clientX - avatarCenterX;
      const deltaY = e.clientY - avatarCenterY;

      // Calculate angle and distance
      const distance = Math.hypot(deltaX, deltaY);
      const maxDistance = 600;
      const clampedDist = Math.min(distance, maxDistance);

      // Pupil / Eye tracking offset (max 8px movement in direction of pointer)
      const angle = Math.atan2(deltaY, deltaX);
      const intensity = (clampedDist / maxDistance) * 12;
      const moveX = Math.cos(angle) * intensity;
      const moveY = Math.sin(angle) * intensity;

      setPupilOffset({ x: moveX, y: moveY });

      // Subtle 3D Card tilt towards mouse
      const tiltX = -(deltaY / window.innerHeight) * 16;
      const tiltY = (deltaX / window.innerWidth) * 16;
      setTilt({ x: tiltX, y: tiltY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center justify-center p-6 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        perspective: '1000px'
      }}
    >
      {/* Background Animated Pulse Rings */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-gold-500/20 via-gold-600/5 to-transparent blur-2xl animate-pulse -z-10" />
      <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-gold-500/20 animate-spin-slow -z-10 pointer-events-none" />
      
      {/* 3D Tilted Avatar Container */}
      <div 
        className="relative rounded-3xl p-2 bg-gradient-to-b from-gold-500/30 via-white/5 to-gold-900/40 shadow-2xl shadow-gold-950/80 transition-transform duration-150 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Outer Glass Bezel */}
        <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-dark-900 border border-gold-500/40">
          
          {/* Main User Portrait Image */}
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] transition-transform duration-500"
            style={{
              transform: `translate(${pupilOffset.x * 0.3}px, ${pupilOffset.y * 0.3}px) scale(1.05)`
            }}
          />

          {/* Interactive Dynamic Cyber Eye Overlays (Gaze Tracker) */}
          <div 
            className="absolute top-[28%] left-[37%] pointer-events-none"
            style={{
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
              transition: 'transform 0.08s ease-out'
            }}
          >
            {/* Left Eye Gaze Indicator */}
            <div className="w-2.5 h-2.5 rounded-full bg-gold-400/80 shadow-[0_0_12px_#efb333] blur-[0.5px]" />
          </div>

          <div 
            className="absolute top-[28%] right-[37%] pointer-events-none"
            style={{
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
              transition: 'transform 0.08s ease-out'
            }}
          >
            {/* Right Eye Gaze Indicator */}
            <div className="w-2.5 h-2.5 rounded-full bg-gold-400/80 shadow-[0_0_12px_#efb333] blur-[0.5px]" />
          </div>

          {/* Luxury Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80 pointer-events-none" />

          {/* Floating Live Indicator Badge */}
          <div className="absolute bottom-3 left-3 right-3 glass-panel px-3 py-2 rounded-xl border border-gold-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-gray-200">Interactive Focus</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gold-400 font-mono">
              <Eye size={12} />
              <span>Tracking Pointer</span>
            </div>
          </div>

        </div>

        {/* Floating Decorative Gold Chips */}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-dark-800 border border-gold-500/50 flex items-center justify-center text-gold-400 shadow-lg shadow-gold-950">
          <Sparkles size={16} />
        </div>
      </div>
    </div>
  );
}
