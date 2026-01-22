'use client';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-16 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-300">
        <div>
          <div className="text-white font-semibold mb-3">Shop</div>
          <ul className="space-y-2">
            <li><a href="/shop" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
            <li><a href="/shop" className="hover:text-blue-400 transition-colors">Best Sellers</a></li>
            <li><a href="/shop" className="hover:text-blue-400 transition-colors">Sale</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Help</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Newsletter</div>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-400">
        © {currentYear} Clothify. All rights reserved.
      </div>
    </footer>
  );
}

