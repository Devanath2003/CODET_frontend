import React from 'react';
import { ScanLine } from 'lucide-react';

export function AnalyzingAnimation() {
  return (
    <div className="relative p-6 bg-black/20 backdrop-blur-sm rounded-xl">
      <div className="flex items-center justify-center">
        <div className="relative">
          <ScanLine className="w-16 h-16 text-green-500" />
          <div className="absolute inset-0 animate-ping bg-green-500/20 rounded-full" />
          <div className="absolute inset-0 border-t-2 border-green-500 rounded-full animate-[scan_2s_linear_infinite]" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-green-500 font-medium">Analyzing Image</p>
        <div className="flex justify-center gap-1 mt-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-green-500 rounded-full animate-[bounce_1s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}