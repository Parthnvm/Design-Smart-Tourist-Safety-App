import { QrCode, Download, Share2, Camera, Phone, Mail, MapPin, User, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function DigitalIDPage() {
  return (
    <div className="w-full h-full bg-[#1a1a1d] flex flex-col overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Header */}
      <div className="px-6 pt-8 pb-4 bg-gradient-to-b from-[#1a1a1d] to-transparent sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-xl tracking-tight">Digital ID</h1>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 bg-[#252528] rounded-lg flex items-center justify-center border border-white/5 hover:bg-[#2a2a2d] transition-all">
              <Share2 className="w-4 h-4 text-white/70" />
            </button>
            <button className="w-9 h-9 bg-[#252528] rounded-lg flex items-center justify-center border border-white/5 hover:bg-[#2a2a2d] transition-all">
              <Download className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>
      </div>

      {/* ID Card */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-6 shadow-2xl overflow-hidden border border-emerald-400/30"
          style={{
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="idPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#idPattern)" />
            </svg>
          </div>

          {/* Header */}
          <div className="relative flex items-center justify-between mb-6">
            <div>
              <div className="text-white/80 text-xs mb-1">Tourist Safety ID</div>
              <div className="text-white text-2xl">Mumbai, India</div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-white text-2xl mb-1">Rahul Sharma</div>
              <div className="text-white/80 text-sm">Tourist Visitor</div>
            </div>
          </div>

          {/* ID Number */}
          <div className="relative bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20 mb-4">
            <div className="text-white/70 text-xs mb-1">ID Number</div>
            <div className="text-white text-lg tracking-wider">TSS-2026-MUM-47892</div>
          </div>

          {/* Details Grid */}
          <div className="relative grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20">
              <div className="text-white/70 text-xs mb-1">Valid Until</div>
              <div className="text-white">Apr 30, 2026</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20">
              <div className="text-white/70 text-xs mb-1">Emergency ID</div>
              <div className="text-white">E-9847</div>
            </div>
          </div>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 bg-[#252528] rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg">Quick Access QR</h3>
            <QrCode className="w-5 h-5 text-emerald-400" />
          </div>

          {/* QR Code */}
          <div className="flex items-center justify-center p-6 bg-white rounded-xl">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <defs>
                <pattern id="qrPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="8" height="8" fill="#1a1a1d" />
                </pattern>
              </defs>
              <rect width="180" height="180" fill="white" />
              <rect x="10" y="10" width="160" height="160" fill="url(#qrPattern)" />
              {/* Corner markers */}
              <rect x="15" y="15" width="40" height="40" fill="#1a1a1d" />
              <rect x="22" y="22" width="26" height="26" fill="white" />
              <rect x="27" y="27" width="16" height="16" fill="#1a1a1d" />
              
              <rect x="125" y="15" width="40" height="40" fill="#1a1a1d" />
              <rect x="132" y="22" width="26" height="26" fill="white" />
              <rect x="137" y="27" width="16" height="16" fill="#1a1a1d" />
              
              <rect x="15" y="125" width="40" height="40" fill="#1a1a1d" />
              <rect x="22" y="132" width="26" height="26" fill="white" />
              <rect x="27" y="137" width="16" height="16" fill="#1a1a1d" />
            </svg>
          </div>

          <p className="text-white/60 text-sm text-center mt-4">
            Scan this code for instant verification
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-[#252528] rounded-2xl p-6 border border-white/5"
        >
          <h3 className="text-white text-lg mb-4">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-white/50 text-xs">Phone Number</div>
                <div className="text-white">+91 98765 43210</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-white/50 text-xs">Email Address</div>
                <div className="text-white">rahul.sharma@email.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-white/50 text-xs">Current Location</div>
                <div className="text-white">Colaba, Mumbai 400001</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-white/50 text-xs">Date of Entry</div>
                <div className="text-white">April 1, 2026</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg mt-6 transition-all"
        >
          Update Profile Information
        </motion.button>
      </div>
    </div>
  );
}
