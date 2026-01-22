import React from 'react';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center bg-gray-200 overflow-hidden rounded-xl shadow">
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80"
        alt="Seasonal Style Drop"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      <div className="relative z-10 text-center text-white flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Shop Summer ‘25</h1>
        <p className="text-lg md:text-2xl font-medium drop-shadow">New Drop Just Landed</p>
        <div className="flex gap-4 mt-4">
          <a href="/shop?category=men" className="bg-white/90 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-blue-600 hover:text-white transition">Shop Men</a>
          <a href="/shop?category=women" className="bg-white/90 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-pink-600 hover:text-white transition">Shop Women</a>
          <a href="/shop?category=accessories" className="bg-white/90 text-gray-900 px-6 py-2 rounded font-semibold hover:bg-gray-800 hover:text-white transition">Shop Accessories</a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
    </section>
  );
} 