import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Navigation, Shield, Users, MapPin, Plus, AlertTriangle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Dashboard() {
  const navigate = useNavigate();
  const [slideProgress, setSlideProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging && e.type === 'mousemove') return;
    
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let clientX: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const progress = Math.max(0, Math.min(1, x / rect.width));
    setSlideProgress(progress);

    if (progress > 0.85) {
      // Trigger SOS
      triggerSOS();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (slideProgress < 0.85) {
      setSlideProgress(0);
    }
  };

  const triggerSOS = () => {
    setSlideProgress(1);
    // Navigate to emergency alert page
    setTimeout(() => {
      navigate('/emergency-alert');
      setSlideProgress(0);
    }, 300);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => {
        handleTouchMove(e as any);
      };
      const handleMouseUp = () => {
        handleTouchEnd();
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, slideProgress]);

  return (
    <div className="relative w-full h-full bg-[#1a1a1d] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 bg-gradient-to-b from-[#1a1a1d] to-transparent z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-xl tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm">Connected</span>
          </div>
        </div>
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#252528] rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-white/90 text-sm">Mumbai City</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative px-6 pb-6">
        <div className="w-full h-full bg-[#252528] rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Safe Path - Glowing Green Line */}
          <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))' }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 60 80 Q 120 150, 180 200 T 280 320 Q 300 360, 260 420"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-pulse"
            />
          </svg>

          {/* Points of Interest */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute left-12 top-16 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[10px] text-white whitespace-nowrap">
              Police Station
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute left-32 bottom-32 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[10px] text-white whitespace-nowrap">
              Hospital
            </div>
          </motion.div>

          {/* You Are Here - Center Point */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
              <div className="relative w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl border-3 border-white">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-[#1a1a1d]/95 rounded-lg shadow-lg border border-emerald-400/30">
              <span className="text-white text-xs">You Are Here</span>
            </div>
          </motion.div>

          {/* Safe Zone Indicator */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/20 rounded-lg border border-emerald-400/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-emerald-400 text-xs">Safe Zone</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => navigate('/safe-route')} className="flex flex-col items-center gap-2 p-4 bg-[#252528] rounded-xl border border-white/5 hover:bg-[#2a2a2d] transition-all">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Navigation className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-white/90 text-xs">Safe Route</span>
          </button>

          <button onClick={() => navigate('/digital-id')} className="flex flex-col items-center gap-2 p-4 bg-[#252528] rounded-xl border border-white/5 hover:bg-[#2a2a2d] transition-all">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-white/90 text-xs">Digital ID</span>
          </button>

          <button onClick={() => navigate('/family-hub')} className="flex flex-col items-center gap-2 p-4 bg-[#252528] rounded-xl border border-white/5 hover:bg-[#2a2a2d] transition-all">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-white/90 text-xs">Family Hub</span>
          </button>
        </div>
      </div>

      {/* SOS Slider */}
      <div className="px-6 pb-8">
        <div
          ref={containerRef}
          className="relative h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden shadow-2xl border border-red-400/30"
          style={{
            boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Progress Fill */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
            style={{
              width: `${slideProgress * 100}%`,
              transition: isDragging ? 'none' : 'width 0.3s ease-out',
            }}
          />

          {/* Shine Effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              transform: 'skewX(-20deg)',
              animation: 'shine 3s infinite',
            }}
          />

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white text-sm tracking-wider select-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {slideProgress > 0.5 ? 'RELEASE TO SEND SOS' : 'SLIDE TO SOS'}
            </span>
          </div>

          {/* Slider Handle */}
          <motion.div
            ref={sliderRef}
            className="absolute left-0 top-0 h-full w-20 cursor-grab active:cursor-grabbing flex items-center justify-center p-1"
            style={{
              x: `${slideProgress * (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth - 80 : 0)}px`,
            }}
            onMouseDown={handleTouchStart}
            onTouchStart={handleTouchStart}
          >
            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-xl">
              <ChevronRight className="w-6 h-6 text-red-600" />
              <ChevronRight className="w-6 h-6 text-red-600 -ml-4" />
            </div>
          </motion.div>
        </div>

        {/* SOS Helper Text */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span className="text-white/60 text-xs">Emergency alert will notify authorities</span>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 200%;
          }
        }
      `}</style>
    </div>
  );
}