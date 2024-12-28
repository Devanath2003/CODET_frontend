import React from 'react';

interface HistoryItem {
  id: string;
  imageUrl: string;
  prediction: string;
  timestamp: Date;
}

interface HistoryProps {
  items: HistoryItem[];
}

export function History({ items }: HistoryProps) {
  const getMaturityStatus = (prediction: string) => {
    // Extract the first two words from the prediction
    const words = prediction.split(' ');
    if (words.length >= 2) {
      return `${words[0]} ${words[1]}`;
    }
    return 'Unknown';
  };

  return (
    <div 
      className="backdrop-blur-[10px] border-2 border-white/10 rounded-xl p-6"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.13)',
        boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
      }}
    >
      <h2 className="text-xl font-semibold text-white mb-4">History</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id}
            className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <img 
              src={item.imageUrl} 
              alt="Historical coconut" 
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="text-green-400 font-medium">
                {getMaturityStatus(item.prediction)}
              </p>
              <p className="text-white/60 text-sm">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-white/60 text-center py-4">No history yet</p>
        )}
      </div>
    </div>
  );
}