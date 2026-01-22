'use client';
import { useState } from 'react';
import products from '../../../data/products.json';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../../../components/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [showMsg, setShowMsg] = useState(false);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link href="/shop" className="text-blue-600 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
      {showMsg && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
          Added to cart!
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-96 h-96 object-cover rounded-xl shadow"
      />
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <div className="text-gray-500 mb-2">{product.category}</div>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-600">{product.rating}</span>
        </div>
        <div className="text-2xl font-semibold text-blue-700 mb-4">${product.price.toFixed(2)}</div>
        <p className="mb-4 text-gray-700">{product.description}</p>
        <div className="mb-2 text-gray-700">
          <span className="font-semibold">Sizes:</span> {product.sizes.join(', ')}
        </div>
        <div className="mb-2 text-gray-700">
          <span className="font-semibold">Colors:</span> {product.colors.join(', ')}
        </div>
        <div className="mb-4 text-gray-700">
          <span className="font-semibold">Stock:</span> {product.stock}
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto"
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            });
            setShowMsg(true);
            setTimeout(() => setShowMsg(false), 1500);
          }}
        >
          Add to Cart
        </button>
        <Link href="/shop" className="mt-4 text-blue-600 hover:underline text-sm">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}