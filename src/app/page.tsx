// app/page.tsx (Homepage for Clothing E-commerce)
'use client';

import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import TrendingLooks from "@/components/TrendingLooks";
import NewArrivals from "@/components/NewArrivals";
import Bestsellers from "@/components/Bestsellers";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading gradient-text mb-4">
              Shop by Category
            </h2>
            <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
              Discover our curated collections designed for every style and occasion
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Trending Looks Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900/50 to-blue-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              Trending Now
            </h2>
            <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
              Stay ahead of the curve with our most popular styles
            </p>
          </div>
          <TrendingLooks />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading gradient-text mb-4">
              New Arrivals
            </h2>
            <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
              Fresh styles just dropped - be the first to wear them
            </p>
          </div>
          <NewArrivals />
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900/30 to-pink-900/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              Bestsellers
            </h2>
            <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
              Customer favorites that never go out of style
            </p>
          </div>
          <Bestsellers />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading gradient-text mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
              Real reviews from real customers who love our products
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-padding bg-gradient-to-br from-gray-800/30 to-blue-800/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              Follow Our Style
            </h2>
            <p className="text-xl font-body text-gray-300 max-w-2xl mx-auto">
              Get inspired by our community and share your own looks
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>
    </main>
  );
}