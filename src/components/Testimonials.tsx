import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: '1',
    name: 'Ava Smith',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Absolutely love the quality and fit! Will shop again.'
  },
  {
    id: '2',
    name: 'Liam Chen',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4,
    text: 'Trendy styles and fast shipping. Highly recommend.'
  },
  {
    id: '3',
    name: 'Maya Patel',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
    rating: 5,
    text: 'The summer collection is amazing. Got so many compliments!'
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {testimonials.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <Image src={review.avatar} alt={review.name} width={64} height={64} className="rounded-full mb-2 object-cover" />
            <div className="font-semibold text-lg mb-1">{review.name}</div>
            <StarRating rating={review.rating} />
            <p className="text-gray-600 mt-2">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 