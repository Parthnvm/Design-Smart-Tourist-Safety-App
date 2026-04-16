import { useState } from 'react';
import { Users, MapPin, Phone, Video, MessageCircle, Battery, Shield, Clock, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  status: 'safe' | 'warning' | 'alert';
  location: string;
  battery: number;
  lastSeen: string;
}

export function FamilyHubPage() {
  const [familyMembers] = useState<FamilyMember[]>([
    {
      id: 1,
      name: 'Priya Sharma',
      relation: 'Sister',
      status: 'safe',
      location: 'Marine Drive, Mumbai',
      battery: 85,
      lastSeen: '2 min ago',
    },
    {
      id: 2,
      name: 'Aarav Sharma',
      relation: 'Father',
      status: 'safe',
      location: 'Juhu Beach, Mumbai',
      battery: 62,
      lastSeen: '5 min ago',
    },
    {
      id: 3,
      name: 'Anita Sharma',
      relation: 'Mother',
      status: 'warning',
      location: 'Bandra West, Mumbai',
      battery: 28,
      lastSeen: '12 min ago',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'emerald';
      case 'warning':
        return 'orange';
      case 'alert':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getBatteryColor = (battery: number) => {
    if (battery > 50) return 'emerald';
    if (battery > 20) return 'orange';
    return 'red';
  };

  return (
    <div className="w-full h-full bg-[#1a1a1d] flex flex-col overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Header */}
      <div className="px-6 pt-8 pb-4 bg-gradient-to-b from-[#1a1a1d] to-transparent sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-xl tracking-tight">Family Hub</h1>
          <button className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-2">
            <div className="text-emerald-400 text-xl">2</div>
            <div className="text-emerald-400/80 text-xs">Safe</div>
          </div>
          <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-2">
            <div className="text-orange-400 text-xl">1</div>
            <div className="text-orange-400/80 text-xs">Warning</div>
          </div>
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-2">
            <div className="text-blue-400 text-xl">3</div>
            <div className="text-blue-400/80 text-xs">Total</div>
          </div>
        </div>
      </div>

      {/* Map Overview */}
      <div className="px-6 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#252528] rounded-2xl overflow-hidden border border-white/5 h-48 relative"
        >
          {/* Map Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="familyGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#familyGrid)" />
            </svg>
          </div>

          {/* Family Member Locations */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute left-1/4 top-1/4 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[8px] text-white">Priya</div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute right-1/3 top-1/2 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[8px] text-white">Aarav</div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute left-1/3 bottom-1/4 flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-1 px-2 py-0.5 bg-[#1a1a1d]/90 rounded text-[8px] text-white">Anita</div>
          </motion.div>

          {/* You marker */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-40"></div>
              <div className="relative w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Family Members List */}
      <div className="px-6 pb-6 space-y-3">
        <h3 className="text-white mb-2">Family Members</h3>
        
        {familyMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#252528] rounded-2xl p-4 border border-white/5"
          >
            {/* Member Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">{member.name.charAt(0)}</span>
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-${getStatusColor(member.status)}-500 rounded-full border-2 border-[#252528]`}></div>
                </div>
                <div>
                  <div className="text-white">{member.name}</div>
                  <div className="text-white/50 text-sm">{member.relation}</div>
                </div>
              </div>
              <div className={`px-2 py-1 bg-${getStatusColor(member.status)}-500/20 border border-${getStatusColor(member.status)}-400/30 rounded-lg`}>
                <span className={`text-${getStatusColor(member.status)}-400 text-xs capitalize`}>{member.status}</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mb-3 pl-1">
              <MapPin className="w-4 h-4 text-white/50" />
              <span className="text-white/70 text-sm">{member.location}</span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-3 pl-1">
              <div className="flex items-center gap-1.5">
                <Battery className={`w-4 h-4 text-${getBatteryColor(member.battery)}-400`} />
                <span className="text-white/70 text-sm">{member.battery}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-white/50" />
                <span className="text-white/70 text-sm">{member.lastSeen}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button className="h-10 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center gap-1.5 hover:bg-blue-500/30 transition-all">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs">Call</span>
              </button>
              <button className="h-10 bg-purple-500/20 border border-purple-400/30 rounded-lg flex items-center justify-center gap-1.5 hover:bg-purple-500/30 transition-all">
                <Video className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-xs">Video</span>
              </button>
              <button className="h-10 bg-emerald-500/20 border border-emerald-400/30 rounded-lg flex items-center justify-center gap-1.5 hover:bg-emerald-500/30 transition-all">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-xs">Chat</span>
              </button>
            </div>
          </motion.div>
        ))}

        {/* Emergency Group Alert */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full h-14 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all mt-4"
        >
          <Shield className="w-5 h-5" />
          <span>Send Group Alert</span>
        </motion.button>
      </div>
    </div>
  );
}
