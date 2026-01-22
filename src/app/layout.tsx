import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../components/CartContext'
import { WishlistProvider } from '../components/WishlistContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-body">
        <CartProvider>
          <WishlistProvider>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs md:text-sm text-center py-2">Free shipping on orders over $49 · 30-day returns</div>
              <Navbar />
            </div>
            {children}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}