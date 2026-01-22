'use client';

import { useWishlist } from '../../components/WishlistContext';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <div className="font-semibold text-lg mb-2">{product.title}</div>
              {/* Add product image and other details as needed */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 