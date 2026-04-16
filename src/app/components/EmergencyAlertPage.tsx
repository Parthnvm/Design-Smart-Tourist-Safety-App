import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle, Phone, Shield, MapPin, Clock, X, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function EmergencyAlertPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive || countdown === 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, countdown]);

  const handleCancel = () => {
    setIsActive(false);
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-red-900 to-[#1a1a1d] flex flex-col overflow-y-auto animate-pulse-slow" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Alert Header */}
      <div className="px-6 pt-6 pb-2 relative">
        <button
          onClick={handleCancel}
          className="absolute top-8 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center mb-3"
        >
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-white text-3xl mb-2">Emergency SOS</h1>
          <p className="text-white/80 text-center">Alert has been sent to authorities</p>
        </motion.div>

        {/* Countdown Circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-3"
        >
          <div className="relative w-24 h-24 mb-2">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 128 128">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#ef4444"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - countdown / 30)}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-3xl">{countdown}</span>
            </div>
          </div>
          <p className="text-white/60 text-sm">Emergency services responding</p>
        </motion.div>
      </div>

      {/* Alert Status */}
      <div className="flex-1 px-6 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#252528] rounded-2xl p-4 border border-red-400/30 mb-4"
        >
          <h3 className="text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-400" />
            Alert Status
          </h3>
          
          <div className="space-y-3">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">Police notified</div>
                <div className="text-white/50 text-xs">Mumbai Police - 2 units dispatched</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">Family members alerted</div>
                <div className="text-white/50 text-xs">3 contacts notified</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">Live location shared</div>
                <div className="text-white/50 text-xs">GPS coordinates transmitted</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-spin">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white text-sm">Medical services on standby</div>
                <div className="text-white/50 text-xs">Nearest hospital: 1.2 km</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Current Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#252528] rounded-2xl p-4 border border-white/5 mb-4"
        >
          <h3 className="text-white mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Your Location
          </h3>
          
          <div className="bg-[#1a1a1d] rounded-xl p-3 mb-3">
            <div className="text-white">Colaba Causeway</div>
            <div className="text-white/50 text-sm">Mumbai, Maharashtra 400001</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1a1a1d] rounded-xl p-3">
              <div className="text-white/50 text-xs mb-1">Latitude</div>
              <div className="text-white text-sm">18.9220° N</div>
            </div>
            <div className="bg-[#1a1a1d] rounded-xl p-3">
              <div className="text-white/50 text-xs mb-1">Longitude</div>
              <div className="text-white text-sm">72.8347° E</div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#252528] rounded-2xl p-4 border border-white/5 mb-4"
        >
          <h3 className="text-white mb-3">Quick Contacts</h3>
          
          <div className="space-y-2">
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">Call Police - 100</span>
            </button>
            <button className="w-full h-12 bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">Call Ambulance - 102</span>
            </button>
            <button className="w-full h-12 bg-purple-500 hover:bg-purple-600 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">Call Tourist Helpline - 1800</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cancel Alert Button */}
      <div className="px-6 pb-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          onClick={handleCancel}
          className="w-full h-14 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all"
        >
          I'm Safe - Cancel Alert
        </motion.button>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
