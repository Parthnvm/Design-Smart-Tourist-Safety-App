import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Lock, User, Mail, Eye, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="w-full h-full bg-[#1a1a1d] flex flex-col items-center justify-center px-6 overflow-y-auto">
      {/* Logo & Brand */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8"
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-white text-3xl mb-2 tracking-tight">Tourist Safety</h1>
        <p className="text-white/60 text-sm">Your safety companion</p>
      </motion.div>

      {/* Login Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleLogin}
        className="w-full max-w-sm space-y-4"
      >
        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-white/80 text-sm pl-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tourist@example.com"
              className="w-full h-14 bg-[#252528] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:bg-[#2a2a2d] transition-all"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label className="text-white/80 text-sm pl-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-14 bg-[#252528] border border-white/10 rounded-xl pl-12 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:bg-[#2a2a2d] transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button type="button" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Logging in...</span>
            </div>
          ) : (
            <>
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-white/40 text-sm">or</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <span className="text-white/60 text-sm">Don't have an account? </span>
          <button type="button" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
            Sign Up
          </button>
        </div>
      </motion.form>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-3 gap-4 mt-12 w-full max-w-sm"
      >
        <div className="flex flex-col items-center gap-2 p-3 bg-[#252528]/50 rounded-xl border border-white/5">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-white/70 text-xs text-center">Secure</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 bg-[#252528]/50 rounded-xl border border-white/5">
          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-white/70 text-xs text-center">Private</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 bg-[#252528]/50 rounded-xl border border-white/5">
          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
            <Lock className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-white/70 text-xs text-center">Trusted</span>
        </div>
      </motion.div>
    </div>
  );
}
