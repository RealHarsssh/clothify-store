'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    alert('Account created (demo only)');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up for Cloth Buster</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border w-full max-w-sm">
  <input
  type="email"
  placeholder="Email"
  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 placeholder-gray-400"
  value={email}
  onChange={e => setEmail(e.target.value)}
  required
/>
<input
  type="password"
  placeholder="Password"
  className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 placeholder-gray-400"
  value={password}
  onChange={e => setPassword(e.target.value)}
  required
/>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition shadow"
  >
    Sign Up
  </button>
 <div className="mt-4 text-center text-sm text-gray-700">
  Already have an account?{' '}
  <Link href="/login" className="text-blue-600 hover:underline">
    Login
  </Link>
</div>
      </form>
    </div>
  );
}