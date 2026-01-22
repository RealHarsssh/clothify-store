#!/bin/bash
# Download all required images for the homepage into public/dummy/

mkdir -p public/dummy

# Hero Banner
curl -L https://images.unsplash.com/photo-1512436991641-6745cdb1723f -o public/dummy/hero-fashion.jpg

# Category Grid
curl -L https://images.unsplash.com/photo-1517841905240-472988babdf9 -o public/dummy/tshirts.jpg
curl -L https://images.unsplash.com/photo-1503342217505-b0a15ec3261c -o public/dummy/denim-cat.jpg
curl -L https://images.unsplash.com/photo-1465101046530-73398c7f28ca -o public/dummy/accessories.jpg
curl -L https://images.unsplash.com/photo-1519864600265-abb23847ef2c -o public/dummy/footwear.jpg

# New Arrivals
curl -L https://images.unsplash.com/photo-1515378791036-0648a3ef77b2 -o public/dummy/linen.jpg
curl -L https://images.unsplash.com/photo-1512436991641-6745cdb1723f -o public/dummy/cargo.jpg
curl -L https://images.unsplash.com/photo-1465101178521-c1a9136a3b41 -o public/dummy/hat.jpg
curl -L https://images.unsplash.com/photo-1512436991641-6745cdb1723f -o public/dummy/slip.jpg

# Bestsellers
curl -L https://images.unsplash.com/photo-1503342217505-b0a15ec3261c -o public/dummy/denim.jpg
curl -L https://images.unsplash.com/photo-1519864600265-abb23847ef2c -o public/dummy/sneakers.jpg
curl -L https://images.unsplash.com/photo-1515378791036-0648a3ef77b2 -o public/dummy/dress.jpg
curl -L https://images.unsplash.com/photo-1517841905240-472988babdf9 -o public/dummy/tee.jpg

# Trending Looks
curl -L https://images.unsplash.com/photo-1512436991641-6745cdb1723f -o public/dummy/trending1.jpg
curl -L https://images.unsplash.com/photo-1503342217505-b0a15ec3261c -o public/dummy/trending2.jpg
curl -L https://images.unsplash.com/photo-1465101046530-73398c7f28ca -o public/dummy/trending3.jpg
curl -L https://images.unsplash.com/photo-1519864600265-abb23847ef2c -o public/dummy/trending4.jpg

# Testimonials (Avatars)
curl -L https://randomuser.me/api/portraits/women/44.jpg -o public/dummy/ava.jpg
curl -L https://randomuser.me/api/portraits/men/45.jpg -o public/dummy/liam.jpg
curl -L https://randomuser.me/api/portraits/women/46.jpg -o public/dummy/maya.jpg

# Instagram Feed
curl -L https://images.unsplash.com/photo-1512436991641-6745cdb1723f -o public/dummy/insta1.jpg
curl -L https://images.unsplash.com/photo-1503342217505-b0a15ec3261c -o public/dummy/insta2.jpg
curl -L https://images.unsplash.com/photo-1465101046530-73398c7f28ca -o public/dummy/insta3.jpg
curl -L https://images.unsplash.com/photo-1519864600265-abb23847ef2c -o public/dummy/insta4.jpg

echo "All images downloaded to public/dummy/" 