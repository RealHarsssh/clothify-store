'use client';
import React, { useState } from 'react';

const categories = [
  { name: 'Women', icon: '👗', color: 'bg-pink-500' },
  { name: 'Men', icon: '👔', color: 'bg-blue-500' },
  { name: 'Kids', icon: '👶', color: 'bg-green-500' },
  { name: 'Home', icon: '🏠', color: 'bg-purple-500' },
  { name: 'Beauty', icon: '💄', color: 'bg-rose-500' },
  { name: 'Electronics', icon: '📱', color: 'bg-indigo-500' },
  { name: 'Sports', icon: '⚽', color: 'bg-orange-500' },
  { name: 'Books', icon: '📚', color: 'bg-yellow-500' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      title: "Summer Collection 2024",
      subtitle: "Up to 70% OFF",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      buttonText: "Shop Now"
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh Styles Daily",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
      buttonText: "Explore"
    },
    {
      title: "Flash Sale",
      subtitle: "Limited Time Offers",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
      buttonText: "Grab Deals"
    }
  ];

  return (
    <div className="relative">
      {/* Category Carousel */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-30">
        <div className="container-custom py-6">
          <div className="flex overflow-x-auto gap-8 pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <div key={index} className="flex-shrink-0 text-center group cursor-pointer">
                <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  {category.icon}
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Banner Carousel */}
      <div className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={banners[currentSlide].image}
            alt={banners[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom w-full">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-6 leading-tight">
                  {banners[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl font-body text-white/90 mb-8 leading-relaxed">
                  {banners[currentSlide].subtitle}
                </p>
                <button className="btn-primary text-lg px-8 py-4">
                  {banners[currentSlide].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 