import React from 'react';
import { PalmtreeIcon } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560960378-36e8052b4d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <PalmtreeIcon className="w-16 h-16 text-green-400" />
        </div>
        <h1 className="text-7xl font-bold text-white mb-4 tracking-tight animate-wave">
          {'COCODET'.split('').map((letter, index) => (
            <span 
              key={index}
              className="inline-block animate-float"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: 'translateY(0)',
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          Advanced Coconut Maturity Detection Using AI Technology
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce text-white">
          <p className="text-sm mb-2">Scroll to Start</p>
          <div className="w-1 h-8 bg-white/30 mx-auto rounded-full">
            <div className="w-full h-1/2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}