import React from 'react';

const recommendations = [
  { id: '1', title: 'Oversized Hoodie', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80' },
  { id: '2', title: 'Slim Jeans', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80' },
  { id: '3', title: 'Canvas Tote', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80' },
  { id: '4', title: 'Chunky Sneakers', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80' },
];

export default function PersonalizedRecommendations() {
  if (recommendations.length === 0) {
    return <div className="text-gray-500">No recommendations yet. Add items to your wishlist to get personalized picks!</div>;
  }
  return (
    <div className="flex gap-6 overflow-x-auto pb-2">
      {recommendations.map((item) => (
        <div key={item.id} className="min-w-[180px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded mb-2" />
          <div className="font-semibold text-base mb-1">{item.title}</div>
        </div>
      ))}
    </div>
  );
} 