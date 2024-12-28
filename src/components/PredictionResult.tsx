import React from 'react';

interface PredictionResultProps {
  prediction: string;
}

export function PredictionResult({ prediction }: PredictionResultProps) {
  return (
    <div 
      className="backdrop-blur-[10px] border-2 border-white/10 rounded-xl p-6 animate-slideUp mb-6"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.13)',
        boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
      }}
    >
      <h2 className="text-xl font-semibold text-green-400 mb-2">Result</h2>
      <p className="text-white animate-fadeIn whitespace-pre-wrap">
        {prediction.split(/(\s+)/).map((char, index) => (
          <span
            key={index}
            className="inline-block animate-fadeInChar"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}