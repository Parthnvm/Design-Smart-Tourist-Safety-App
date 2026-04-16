import { useState } from 'react';
import { MapPin, Navigation, Clock, Shield, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function SafeRoutePage() {
  const [selectedRoute, setSelectedRoute] = useState<'safest' | 'fastest'>('safest');

  return (
    <div className="w-full h-full bg-[#1a1a1d] flex flex-col overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Header */}
      <div className="px-6 pt-8 pb-4 bg-gradient-to-b from-[#1a1a1d] to-transparent z-10">
        <h1 className="text-white text-xl tracking-tight mb-4">Safe Route Planner</h1>
        
        {/* Search Inputs */}
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full"></div>
            <input
              type="text"
              placeholder="Current Location"
              defaultValue="Colaba, Mumbai"
              className="w-full h-12 bg-[#252528] border border-white/10 rounded-xl pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full"></div>
            <input
              type="text"
              placeholder="Destination"
              defaultValue="Gateway of India"
              className="w-full h-12 bg-[#252528] border border-white/10 rounded-xl pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Map View */}
      <div className="flex-1 relative px-6">
        <div className="w-full h-full bg-[#252528] rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl">
          {/* Map Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="routeGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#routeGrid)" />
            </svg>
          </div>

          {/* Safe Route - Primary */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="safeRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="fastRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
            
            {/* Alternative Route (Faster but less safe) */}
            <path
              d="M 40 60 Q 140 80, 200 140 T 320 240"
              fill="none"
              stroke="url(#fastRoute)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10,5"
            />
            
            {/* Main Safe Route */}
            <path
              d="M 40 60 Q 100 120, 180 180 T 280 280 Q 320 320, 320 360"
              fill="none"
              stroke="url(#safeRoute)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))' }}
            />
          </svg>

          {/* Start Point */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute left-8 top-12 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[10px] text-white whitespace-nowrap">
              Start
            </div>
          </motion.div>

          {/* End Point */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute right-12 bottom-12 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[10px] text-white whitespace-nowrap">
              Gateway of India
            </div>
          </motion.div>

          {/* Safety Checkpoints */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute left-1/3 top-1/3"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute left-1/2 top-2/3"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* Real-time Safety Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500/20 rounded-lg border border-emerald-400/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-xs">Live Safety Data</span>
            </div>
          </div>
        </div>
      </div>

      {/* Route Options */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedRoute('safest')}
            className={`p-4 rounded-xl border transition-all ${
              selectedRoute === 'safest'
                ? 'bg-emerald-500/20 border-emerald-400'
                : 'bg-[#252528] border-white/5'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className={`w-5 h-5 ${selectedRoute === 'safest' ? 'text-emerald-400' : 'text-white/50'}`} />
              <span className={`text-sm ${selectedRoute === 'safest' ? 'text-emerald-400' : 'text-white/70'}`}>
                Safest
              </span>
            </div>
            <div className="text-white text-xl mb-1">18 min</div>
            <div className="text-white/50 text-xs">2.3 km • 95% safe</div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedRoute('fastest')}
            className={`p-4 rounded-xl border transition-all ${
              selectedRoute === 'fastest'
                ? 'bg-blue-500/20 border-blue-400'
                : 'bg-[#252528] border-white/5'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className={`w-5 h-5 ${selectedRoute === 'fastest' ? 'text-blue-400' : 'text-white/50'}`} />
              <span className={`text-sm ${selectedRoute === 'fastest' ? 'text-blue-400' : 'text-white/70'}`}>
                Fastest
              </span>
            </div>
            <div className="text-white text-xl mb-1">12 min</div>
            <div className="text-white/50 text-xs">1.8 km • 78% safe</div>
          </motion.button>
        </div>
      </div>

      {/* Route Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pb-6"
      >
        <div className="bg-[#252528] rounded-2xl p-4 border border-white/5">
          <h3 className="text-white mb-3">Route Features</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">Well-lit streets</div>
                <div className="text-white/50 text-xs">High visibility area</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">3 Police stations nearby</div>
                <div className="text-white/50 text-xs">Enhanced security</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">Peak safety hours</div>
                <div className="text-white/50 text-xs">Best time to travel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Navigation Button */}
        <button className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg mt-4 flex items-center justify-center gap-2 transition-all">
          <Navigation className="w-5 h-5" />
          <span>Start Navigation</span>
        </button>
      </motion.div>
    </div>
  );
}
