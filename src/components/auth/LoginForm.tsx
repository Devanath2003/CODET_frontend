import React, { useState, useEffect } from 'react';
import { Lock, Mail } from 'lucide-react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080710]">
      {/* Background shapes for additional visual effect */}
      <div className="absolute w-[430px] h-[520px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <div className="absolute h-[200px] w-[200px] -left-20 -top-20 rounded-full bg-gradient-to-br from-green-900 to-green-600" />
        <div className="absolute h-[200px] w-[200px] -right-8 -bottom-20 rounded-full bg-gradient-to-r from-green-800 to-green-500" />
      </div>

      {/* 3D transforming background with coconut image */}
      <div 
        className="absolute inset-0 bg-[#080710]"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transition: 'transform 0.1s ease-out',
          backgroundImage: 'url("https://images.unsplash.com/photo-1546662608-aec5228e9a74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <form 
          onSubmit={handleSubmit}
          className="w-[400px] p-[35px] rounded-[10px] backdrop-blur-[10px] border-2 border-white/10"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.13)',
            boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
          }}
        >
          <h2 className="text-4xl font-[500] text-center text-white mb-8 tracking-tight">COCODET</h2>
          
          <div className="space-y-6">
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[50px] bg-white/[0.07] rounded-[3px] px-10 
                         text-white placeholder-gray-300 border-none outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-5 w-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[50px] bg-white/[0.07] rounded-[3px] px-10 
                         text-white placeholder-gray-300 border-none outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-8 bg-white text-[#080710] py-[15px] rounded-[5px] font-semibold text-lg
                       hover:bg-gray-100 transition-colors duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}