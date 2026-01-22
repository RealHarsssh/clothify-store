import React from 'react';

const trendingLooks = [
  { id: '1', title: 'Urban Explorer', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
  { id: '2', title: 'Minimalist Chic', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=200&q=80' },
  { id: '3', title: 'Retro Vibes', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80' },
  { id: '4', title: 'Summer Breeze', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80' },
];

export default function TrendingLooks() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trending Looks</h2>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {trendingLooks.map((item) => (
          <div key={item.id} className="min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded mb-2" />
            <div className="font-semibold text-base mb-1">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 