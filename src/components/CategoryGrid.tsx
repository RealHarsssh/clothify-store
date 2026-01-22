import React from 'react';

const categories = [
  { id: 'tshirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', count: 120 },
  { id: 'denim', name: 'Denim', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', count: 80 },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', count: 60 },
  { id: 'footwear', name: 'Footwear', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', count: 45 },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`/shop?category=${cat.id}`}
          className="group relative block card overflow-hidden hover:scale-105 transition-all duration-300"
        >
          <div className="aspect-square relative overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="text-white text-lg font-bold drop-shadow-lg mb-1">{cat.name}</div>
              <div className="text-white/90 text-sm font-medium">{cat.count} products</div>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
} 