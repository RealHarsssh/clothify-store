import React from 'react';

const bestsellers = [
  { id: '1', title: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=260&q=80', badge: '🔥 Selling Fast' },
  { id: '2', title: 'White Sneakers', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=260&q=80', badge: '500+ bought' },
  { id: '3', title: 'Summer Dress', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=260&q=80', badge: 'Only 2 left' },
  { id: '4', title: 'Graphic Tee', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=260&q=80', badge: 'Editor’s Pick' },
];

export default function Bestsellers() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-2">
      {bestsellers.map((item) => (
        <div key={item.id} className="min-w-[200px] bg-white rounded-lg shadow p-4 flex flex-col items-center relative">
          <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded mb-2" />
          <div className="font-semibold text-lg mb-1">{item.title}</div>
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{item.badge}</span>
        </div>
      ))}
    </div>
  );
} 