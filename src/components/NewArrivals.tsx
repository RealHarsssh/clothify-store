import React from 'react';

const newArrivals = [
  { id: '1', title: 'Linen Shirt', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=240&q=80', tag: 'Just Dropped' },
  { id: '2', title: 'Cargo Pants', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=240&q=80', tag: 'Back in Stock' },
  { id: '3', title: 'Bucket Hat', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=240&q=80', tag: 'Editor’s Pick' },
  { id: '4', title: 'Slip Dress', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=240&q=80', tag: 'Just Dropped' },
];

export default function NewArrivals() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {newArrivals.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center relative">
          <img src={item.image} alt={item.title} className="w-28 h-28 object-cover rounded mb-2" />
          <div className="font-semibold text-base mb-1">{item.title}</div>
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">{item.tag}</span>
        </div>
      ))}
    </div>
  );
} 