'use client';
import { useCart } from '../../components/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p className="mb-4 text-gray-700">Your cart is empty.</p>
          <Link href="/shop" className="text-blue-600 hover:underline">Go to Shop</Link>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 mb-6 bg-white p-4 rounded shadow">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-gray-700">${item.price.toFixed(2)}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-white p-6 rounded shadow">
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
            <Link href="/checkout">
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </Link>
            <button
              className="mt-2 w-full bg-gray-200 text-gray-700 py-2 rounded font-semibold hover:bg-gray-300 transition"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}