import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, MapPin, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Ticker Strip */}
      <div className="bg-shoprite-dark text-white text-xs py-2 px-4 flex justify-between items-center overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 animate-[marquee_20s_linear_infinite]">
          <span>Free delivery on orders over $50</span>
          <span>Open 7 days: 7 AM - 10 PM</span>
          <span>Loyalty card savings on every aisle</span>
          <span>Join the Price Plus Club today!</span>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-shoprite-red text-white py-1 px-3 font-black italic transform -skew-x-12">
              ShopRite
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <Link to="/shop" className={`hover:text-shoprite-red transition-colors ${location.pathname === '/shop' ? 'text-shoprite-red' : ''}`}>Departments</Link>
            <Link to="/weekly-ad" className={`hover:text-shoprite-red transition-colors ${location.pathname === '/weekly-ad' ? 'text-shoprite-red' : ''}`}>Weekly Deals</Link>
            <Link to="/about" className={`hover:text-shoprite-red transition-colors ${location.pathname === '/about' ? 'text-shoprite-red' : ''}`}>About Us</Link>
            <Link to="/contact" className={`hover:text-shoprite-red transition-colors ${location.pathname === '/contact' ? 'text-shoprite-red' : ''}`}>Store Locator</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search size={18} className="text-gray-400" />
              <input type="text" placeholder="Search groceries..." className="bg-transparent border-none outline-none px-2 text-sm w-32 md:w-48" />
            </div>
            
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-shoprite-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="hidden sm:flex items-center gap-1 hover:text-shoprite-red transition-colors font-medium">
              <User size={20} />
              <span>Login</span>
            </button>

            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <div className="p-4 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="bg-shoprite-red text-white py-1 px-3 font-black italic transform -skew-x-12">
                  ShopRite
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-xl font-bold">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop Departments</Link>
                <Link to="/weekly-ad" onClick={() => setIsMobileMenuOpen(false)}>Weekly Ad</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact & Location</Link>
              </div>

              <div className="mt-auto pt-8 border-t space-y-4">
                <button className="w-full bg-shoprite-red text-white py-4 rounded-xl font-bold">Sign In / Register</button>
                <div className="flex items-center gap-2 text-gray-500 justify-center">
                  <MapPin size={18} />
                  <span>Your Store: Brookdale, NJ</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
