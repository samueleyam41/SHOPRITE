import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Calendar, Tag, ChevronRight, Clock } from 'lucide-react';

export default function WeeklyAd() {
  const deals = PRODUCTS.filter(p => p.originalPrice);
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + (6 - today.getDay())); // Ends this Saturday

  const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="bg-shoprite-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4 text-shoprite-red text-2xl font-black italic transform -skew-x-12">
              <Tag size={28} />
              <span>SHOPRITE CIRCULAR</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">This Week's Best Deals</h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">Valid: {today.toLocaleDateString('en-US', dateOptions)} - {endDate.toLocaleDateString('en-US', dateOptions)}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm font-bold uppercase tracking-widest text-shoprite-red">Ends Saturday!</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center flex-shrink-0">
            <p className="text-sm font-bold uppercase opacity-60 mb-2">My Preferred Store</p>
            <p className="text-xl font-bold">Brookdale ShopRite</p>
            <p className="text-xs opacity-60 mt-1">123 Market St, Brookdale, NJ</p>
            <button className="text-shoprite-red text-sm font-bold mt-4 hover:underline flex items-center gap-1 mx-auto">
              Change Store <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Deals Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Circular Layout - Real deal circular feel */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
              {deals.map(product => (
                <ProductCard key={`${product.id}-copy`} product={product} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-gray-100 rounded-3xl p-8 sticky top-32">
              <h3 className="text-2xl font-black mb-6">Digital Coupons</h3>
              <p className="text-gray-500 mb-8 text-sm">Clip coupons to your Price Plus® card and save automatically at checkout.</p>
              
              <div className="space-y-6">
                {[
                  { name: 'Paper Towels', discount: '$1.50 OFF', qty: 'Any 1 Pack' },
                  { name: 'Cereal Boxes', discount: '2 FOR $5', qty: 'Must buy 2' },
                  { name: 'Laundry Detergent', discount: '$3.00 OFF', qty: 'Large size only' }
                ].map((coupon, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-dashed border-gray-300 relative group">
                    <div className="text-shoprite-red font-black text-xl mb-1">{coupon.discount}</div>
                    <div className="font-bold text-sm mb-1">{coupon.name}</div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-4">{coupon.qty}</div>
                    <button className="w-full bg-shoprite-dark text-white py-2 rounded-lg text-xs font-bold group-hover:bg-shoprite-red transition-colors">
                      Clip to Card
                    </button>
                    {/* Scalloped edge visual */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-100 rounded-full"></div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-100 rounded-full"></div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="w-full bg-shoprite-red text-white py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                  View All {deals.length * 2}+ Deals
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
