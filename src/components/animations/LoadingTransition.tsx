import React from 'react';

interface LoadingTransitionProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export function LoadingTransition({ children, isLoading }: LoadingTransitionProps) {
  return (
    <div className={`transition-all duration-1000 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95">
          <div className="relative">
            <svg className="w-24 h-24" viewBox="0 0 100 100">
              <circle
                className="stroke-green-500/20"
                strokeWidth="8"
                fill="none"
                cx="50"
                cy="50"
                r="40"
              />
              <circle
                className="stroke-green-500 animate-[dash_1.5s_ease-in-out_infinite]"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                cx="50"
                cy="50"
                r="40"
                style={{
                  strokeDasharray: '251.2',
                  strokeDashoffset: '251.2',
                }}
              />
            </svg>
            <div className="mt-4 text-green-500 text-center font-medium">Loading...</div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}