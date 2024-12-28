import React from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <label 
      htmlFor="image-upload"
      className="flex items-center justify-center w-full h-40 border-2 border-dashed border-green-300 rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <Upload className="w-8 h-8 text-green-500" />
        <div className="text-center">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG or JPEG (max. 5MB)</p>
        </div>
      </div>
      <input
        id="image-upload"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </label>
  );
}