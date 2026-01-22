# PowerShell script to download all required images for the homepage into public/dummy/
$ErrorActionPreference = 'Stop'
$folder = "public/dummy"
if (!(Test-Path $folder)) { New-Item -ItemType Directory -Path $folder | Out-Null }

function Download-Image($url, $filename) {
    Invoke-WebRequest -Uri $url -OutFile $filename
}

# Hero Banner
Download-Image 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' "$folder/hero-fashion.jpg"

# Category Grid
Download-Image 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' "$folder/tshirts.jpg"
Download-Image 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' "$folder/denim-cat.jpg"
Download-Image 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' "$folder/accessories.jpg"
Download-Image 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c' "$folder/footwear.jpg"

# New Arrivals
Download-Image 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' "$folder/linen.jpg"
Download-Image 'https://images.unsplash.com/photo-1517841905240-472988babdf9' "$folder/cargo.jpg"
Download-Image 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' "$folder/hat.jpg"
Download-Image 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' "$folder/slip.jpg"

# Bestsellers
Download-Image 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' "$folder/denim.jpg"
Download-Image 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c' "$folder/sneakers.jpg"
Download-Image 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' "$folder/dress.jpg"
Download-Image 'https://images.unsplash.com/photo-1517841905240-472988babdf9' "$folder/tee.jpg"

# Trending Looks
Download-Image 'https://images.unsplash.com/photo-1517841905240-472988babdf9' "$folder/trending1.jpg"
Download-Image 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' "$folder/trending2.jpg"
Download-Image 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' "$folder/trending3.jpg"
Download-Image 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' "$folder/trending4.jpg"

# Testimonials (Avatars)
Download-Image 'https://randomuser.me/api/portraits/women/44.jpg' "$folder/ava.jpg"
Download-Image 'https://randomuser.me/api/portraits/men/45.jpg' "$folder/liam.jpg"
Download-Image 'https://randomuser.me/api/portraits/women/46.jpg' "$folder/maya.jpg"

# Instagram Feed
Download-Image 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' "$folder/insta1.jpg"
Download-Image 'https://images.unsplash.com/photo-1517841905240-472988babdf9' "$folder/insta2.jpg"
Download-Image 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' "$folder/insta3.jpg"
Download-Image 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' "$folder/insta4.jpg"

Write-Host "All images downloaded to public/dummy/" 