'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [term, setTerm] = useState('');
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800">Clothify</span>
            </Link>
          </div>
          {/* Search */}
          <form
            className="hidden md:flex flex-1 mx-6 max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              const query = term.trim();
              router.push(query ? `/shop?q=${encodeURIComponent(query)}` : '/shop');
            }}
          >
            <input
              type="search"
              placeholder="Search Clothify"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md text-gray-800"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
              aria-label="Search"
            >
              Search
            </button>
          </form>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium">Shop</Link>
            <Link href="/cart" className="text-gray-700 hover:text-blue-600 font-medium">Cart</Link>
            <Link href="/wishlist" className="text-gray-700 hover:text-blue-600 font-medium">Wishlist</Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login/Signup</Link>
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <form
            className="px-2 pt-2 pb-1 flex"
            onSubmit={(e) => {
              e.preventDefault();
              const query = term.trim();
              router.push(query ? `/shop?q=${encodeURIComponent(query)}` : '/shop');
              setMenuOpen(false);
            }}
          >
            <input
              type="search"
              placeholder="Search Clothify"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-gray-800"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded-r-md">Go</button>
          </form>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Shop</Link>
            <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Cart</Link>
            <Link href="/wishlist" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Wishlist</Link>
            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Login/Signup</Link>
            <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;