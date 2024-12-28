import React, { useState, useCallback } from 'react';
import { LoginForm } from './auth/LoginForm';
import { Hero } from './layout/Hero';
import { ImageUpload } from './ImageUpload';
import { ImagePreview } from './ImagePreview';
import { PredictionResult } from './PredictionResult';
import { ErrorMessage } from './ErrorMessage';
import { History } from './History';
import { LoadingTransition } from './animations/LoadingTransition';
import { AnalyzingAnimation } from './animations/AnalyzingAnimation';
import { detectCoconutMaturity } from '../api/coconutApi';

interface HistoryItem {
  id: string;
  imageUrl: string;
  prediction: string;
  timestamp: Date;
}

export function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleLogin = (email: string, password: string) => {
    setIsPageLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setTimeout(() => setIsPageLoading(false), 500);
    }, 1500);
  };

  const handleImageUpload = useCallback(async (file: File) => {
    try {
      setError(null);
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);
      setPrediction(null);
      setIsLoading(true);

      const result = await detectCoconutMaturity(file);
      setPrediction(result);
      
      // Add to history
      setHistory(prev => [{
        id: Date.now().toString(),
        imageUrl: previewUrl,
        prediction: result,
        timestamp: new Date()
      }, ...prev]);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <LoadingTransition isLoading={isPageLoading}>
      <div className="min-h-screen bg-[#080710]">
        <div className="fixed inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom right, #000000, #002200, #004400)',
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560960378-36e8052b4d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
              mixBlendMode: 'overlay',
            }}
          />
        </div>
        
        <div className="relative z-10">
          <Hero />
          
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto space-y-6">
              <div 
                className="rounded-xl p-6 backdrop-blur-[10px] border-2 border-white/10"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.13)',
                  boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
                }}
              >
                <ImageUpload onImageSelect={handleImageUpload} />
                {error && <ErrorMessage message={error} />}
                {selectedImage && <ImagePreview imageUrl={selectedImage} />}
                {isLoading && <AnalyzingAnimation />}
                {prediction && <PredictionResult prediction={prediction} />}
              </div>
              
              <History items={history} />
            </div>
          </div>
        </div>
      </div>
    </LoadingTransition>
  );
}