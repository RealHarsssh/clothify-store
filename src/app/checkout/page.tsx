'use client';
import { useCart } from '../../components/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [card, setCard] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Thank you for your order!</h1>
      <p className="mb-6 text-gray-800">Your order has been placed and will be shipped soon.</p>
      <Link href="/shop" className="text-blue-600 hover:underline">Continue Shopping</Link>
    </div>
  );
}

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border">
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Shipping Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">Card Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
            value={card}
            onChange={e => setCard(e.target.value)}
            required
            maxLength={19}
            pattern="^(\d{4} ?){4}$"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="mb-6 bg-gray-50 p-4 rounded">
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-800">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition shadow"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}