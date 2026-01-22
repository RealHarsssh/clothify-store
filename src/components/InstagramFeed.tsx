import React from 'react';

const posts = [
  { id: '1', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80', user: '@fashionista1' },
  { id: '2', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=300&q=80', user: '@trendsetter' },
  { id: '3', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80', user: '@clothifyfan' },
  { id: '4', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80', user: '@ootdqueen' },
];

export default function InstagramFeed() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">#MyClothifyLook</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        {posts.map((post) => (
          <div key={post.id} className="relative group rounded-lg overflow-hidden shadow">
            <img src={post.image} alt={post.user} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{post.user}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-2">
        <span className="text-lg font-semibold">Share your style with </span>
        <span className="text-blue-600 font-bold">#MyClothifyLook</span>
      </div>
    </div>
  );
} 