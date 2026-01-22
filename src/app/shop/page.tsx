'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import productsData from '../../data/products.json';
import { useCart } from '../../components/CartContext';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [showMsg, setShowMsg] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState<'relevance' | 'priceAsc' | 'priceDesc' | 'ratingDesc'>('relevance');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(productsData.map(p => p.category)))];

  // Hydrate from URL on mount and when params change
  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    const cat = searchParams.get('cat') ?? 'All';
    const srt = (searchParams.get('sort') as typeof sort) ?? 'relevance';
    const pmin = searchParams.get('min') ?? '';
    const pmax = searchParams.get('max') ?? '';
    setSearch(q);
    setCategory(categories.includes(cat) ? cat : 'All');
    setSort(['relevance','priceAsc','priceDesc','ratingDesc'].includes(srt) ? srt : 'relevance');
    setPriceMin(pmin);
    setPriceMax(pmax);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const updateUrl = (next: { q?: string; cat?: string; sort?: string; min?: string; max?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next.q !== undefined) params.set('q', next.q);
    if (next.cat !== undefined) params.set('cat', next.cat);
    if (next.sort !== undefined) params.set('sort', next.sort);
    if (next.min !== undefined) next.min ? params.set('min', next.min) : params.delete('min');
    if (next.max !== undefined) next.max ? params.set('max', next.max) : params.delete('max');
    router.replace(`/shop?${params.toString()}`);
  };

  // Filter + sort products
  const filteredProducts = useMemo(() => {
    const min = priceMin ? parseFloat(priceMin) : undefined;
    const max = priceMax ? parseFloat(priceMax) : undefined;
    let list = productsData.filter(product => {
      const matchesCategory = category === 'All' || product.category === category;
      const q = search.trim().toLowerCase();
      const matchesSearch = !q || product.name.toLowerCase().includes(q) || product.description.toLowerCase().includes(q);
      const matchesMin = min === undefined || product.price >= min;
      const matchesMax = max === undefined || product.price <= max;
      return matchesCategory && matchesSearch && matchesMin && matchesMax;
    });
    switch (sort) {
      case 'priceAsc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'ratingDesc':
        list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default:
        break;
    }
    return list;
  }, [category, search, priceMin, priceMax, sort]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
  };

  // Helper for image fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/150?text=No+Image';
  };

  return (
    <div className="min-h-screen">
      {showMsg && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
          Added to cart!
        </div>
      )}
      
      {/* Meesho-style Header */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-heading text-white">All Products</h1>
            <div className="text-sm font-body text-gray-400">{filteredProducts.length} products found</div>
          </div>
          
          {/* Search and Filters Bar */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  updateUrl({ q: e.target.value });
                }}
              />
            </div>
            <select
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white md:w-48"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
                updateUrl({ cat: e.target.value });
              }}
            >
              {categories.map(cat => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <select
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white md:w-48"
              value={sort}
              onChange={(e) => {
                const v = e.target.value as typeof sort;
                setSort(v);
                updateUrl({ sort: v });
              }}
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="ratingDesc">Rating: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="hidden md:block w-64 card p-4 h-fit">
            <h3 className="font-semibold text-white mb-4">Filters</h3>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="number"
                  min="0"
                  placeholder="Min Price"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-400"
                  value={priceMin}
                  onChange={(e) => {
                    setPriceMin(e.target.value);
                    updateUrl({ min: e.target.value });
                  }}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Max Price"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-400"
                  value={priceMax}
                  onChange={(e) => {
                    setPriceMax(e.target.value);
                    updateUrl({ max: e.target.value });
                  }}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.slice(1).map(cat => (
                  <label key={cat} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={category === cat}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        updateUrl({ cat: e.target.value });
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-300">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <div className="text-lg text-white">No products found</div>
                  <div className="text-sm text-gray-400">Try adjusting your filters</div>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.id}`}
                    className="card hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-2xl"
                        onError={handleImageError}
                      />
                      {product.stock < 10 && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Only {product.stock} left
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <button className="w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 transition">
                          ♥
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-medium text-white text-sm mb-1 line-clamp-2 group-hover:text-blue-400">
                        {product.name}
                      </h3>
                      <div className="text-xs text-gray-400 mb-2">{product.category}</div>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 text-xs">
                          {'★'.repeat(Math.floor(product.rating))}
                        </div>
                        <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-white">${product.price.toFixed(2)}</div>
                          {product.price > 50 && (
                            <div className="text-xs text-green-400">Free Shipping</div>
                          )}
                        </div>
                        <button
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded text-xs font-medium hover:from-blue-600 hover:to-purple-600 transition"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}