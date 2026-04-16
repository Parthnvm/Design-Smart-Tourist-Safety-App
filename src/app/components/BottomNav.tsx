import { useLocation, useNavigate } from 'react-router';
import { Home, Navigation, Shield, Users } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/safe-route', icon: Navigation, label: 'Safe Route' },
    { path: '/digital-id', icon: Shield, label: 'Digital ID' },
    { path: '/family-hub', icon: Users, label: 'Family Hub' },
  ];

  return (
    <div className="h-20 bg-[#1a1a1d] border-t border-white/5 px-4 pb-safe">
      <div className="h-full flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px] transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isActive 
                  ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30' 
                  : 'bg-transparent'
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/50'}`} />
              </div>
              <span className={`text-[10px] ${isActive ? 'text-emerald-400' : 'text-white/40'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
