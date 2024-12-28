import React from 'react';

interface ImagePreviewProps {
  imageUrl: string;
}

export function ImagePreview({ imageUrl }: ImagePreviewProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">Preview</h2>
      <div 
        className="rounded-xl p-6 backdrop-blur-[10px] border-2 border-white/10 max-w-md mx-auto"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
        }}
      >
        <img
          src={imageUrl}
          alt="Preview"
          className="w-full h-auto rounded-lg animate-fadeIn"
        />
      </div>
    </div>
  );
}