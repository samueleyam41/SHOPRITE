import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, FEATURED_DEPARTMENTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, SlidersHorizontal, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryFilter, sortBy, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4">Shop Departments</h1>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${categoryFilter === 'All' ? 'bg-shoprite-red text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              All
            </button>
            {FEATURED_DEPARTMENTS.map(dept => (
              <button 
                key={dept.id}
                onClick={() => setSearchParams({ category: dept.name })}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${categoryFilter === dept.name ? 'bg-shoprite-red text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-shoprite-dark font-bold uppercase tracking-wider text-sm">
              <Filter size={16} />
              <span>Filters</span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-4 flex items-center justify-between">
                  <span>Categories</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </h4>
                <div className="space-y-3">
                  {['Produce', 'Bakery', 'Meat & Seafood', 'Dairy', 'Frozen', 'Beverages'].map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={categoryFilter === cat}
                        onChange={() => setSearchParams(categoryFilter === cat ? {} : { category: cat })}
                        className="w-5 h-5 rounded border-gray-300 text-shoprite-red focus:ring-shoprite-red"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-shoprite-dark transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-bold mb-4">Price Range</h4>
                <input type="range" className="w-full accent-shoprite-red" min="0" max="20" />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold uppercase">
                  <span>$0</span>
                  <span>$20+</span>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-bold mb-4">Dietary Needs</h4>
                <div className="space-y-3">
                  {['Organic', 'Gluten-Free', 'Vegan', 'Keto'].map(tag => (
                    <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-shoprite-red focus:ring-shoprite-red" />
                      <span className="text-sm text-gray-600 group-hover:text-shoprite-dark transition-colors">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Promotion Card */}
          <div className="bg-shoprite-red rounded-2xl p-6 text-white overflow-hidden relative">
            <h3 className="text-xl font-black mb-2 relative z-10">New Customers Save Big!</h3>
            <p className="text-sm opacity-80 mb-6 relative z-10">Use code FIRST10 for 10% off your first delivery.</p>
            <button className="w-full bg-white text-shoprite-red py-3 rounded-xl font-bold relative z-10">
              Claim Now
            </button>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <SlidersHorizontal size={80} />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-card border border-gray-100">
            <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search within departments..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none px-3 w-full text-sm"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium hidden md:inline">{filteredProducts.length} results</span>
              <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap">Sort By:</label>
                <select 
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-transparent text-sm font-bold border-none outline-none focus:ring-0 cursor-pointer"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>New Arrivals</option>
                </select>
              </div>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="py-20 text-center">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => {
                    setSearchParams({});
                    setSearchQuery('');
                  }}
                  className="mt-6 text-shoprite-red font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-400 font-bold hover:border-shoprite-red hover:text-shoprite-red transition-all">1</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400 font-bold border border-transparent">2</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400 font-bold border border-transparent">3</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-400 font-bold hover:border-shoprite-red hover:text-shoprite-red transition-all">
                <ChevronDown className="-rotate-90" size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
