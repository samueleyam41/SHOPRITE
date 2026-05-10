import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-shoprite-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="bg-shoprite-red text-white py-1 px-3 font-black italic transform -skew-x-12 w-fit mb-6">
            ShopRite
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Your neighborhood ShopRite is committed to helping you live your best life by providing the freshest food at unbeatable prices.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-shoprite-red transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-shoprite-red transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-shoprite-red transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-shoprite-red transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop All Products</Link></li>
            <li><Link to="/weekly-ad" className="hover:text-white transition-colors">Weekly Circular</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our History</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Store Locator</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Store Hours</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex justify-between"><span>Mon - Sat:</span> <span>7:00 AM - 10:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span>7:00 AM - 9:00 PM</span></li>
            <li className="flex justify-between text-white font-medium italic mt-2"><span>*Holiday hours may vary</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <MapPin size={20} className="text-shoprite-red shrink-0" />
              <span>123 Market St, Brookdale, NJ 07003</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-shoprite-red shrink-0" />
              <span>(973) 555-0123</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-shoprite-red shrink-0" />
              <span>support@shoprite.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} ShopRite Supermarkets. All rights reserved. Price Plus® Card required for some discounts.</p>
      </div>
    </footer>
  );
}
