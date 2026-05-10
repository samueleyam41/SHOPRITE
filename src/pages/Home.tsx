import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Star, Mail, X, MessageCircle } from 'lucide-react';
import { FEATURED_DEPARTMENTS, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const weeklyProducts = PRODUCTS.filter(p => p.originalPrice).slice(0, 6);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !localStorage.getItem('shoprite_popup_dismissed')) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080?text=Fresh+Produce+Hero+Image" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block bg-shoprite-red text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              Now Serving Brookdale, NJ
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-shoprite-dark mb-6 leading-tight">
              Fresh Food. <br />
              <span className="text-shoprite-red italic">Unbeatable</span> Prices.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Serving our community since 1946. Get the best of local produce, premium meats, and bakery favorites delivered straight to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-shoprite-red text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-200">
                <span>Shop Online</span>
                <ChevronRight size={20} />
              </Link>
              <Link to="/weekly-ad" className="bg-white text-shoprite-dark border-2 border-shoprite-dark px-8 py-4 rounded-xl font-bold hover:bg-shoprite-dark hover:text-white transition-all">
                View Weekly Ad
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Fresh Daily', desc: 'Sourced from local farms' },
            { title: 'Price Match', desc: 'Guaranteed best value' },
            { title: 'Loyalty Rewards', desc: 'Price Plus® savings' },
            { title: 'Curbside Pickup', desc: 'Ready in 2 hours or less' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center border border-gray-100"
            >
              <div className="w-12 h-12 bg-red-50 text-shoprite-red rounded-full flex items-center justify-center mb-4">
                <Star size={24} fill="currentColor" />
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black mb-2">Shop by Department</h2>
            <p className="text-gray-500">Everything you need for your pantry and beyond.</p>
          </div>
          <Link to="/shop" className="text-shoprite-red font-bold flex items-center gap-1 hover:underline group">
            <span>View All</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_DEPARTMENTS.map((dept, i) => (
            <Link key={dept.name} to={`/shop?category=${dept.name}`} className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100">
              <img 
                src={dept.image} 
                alt={dept.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-black mb-1">{dept.name}</h3>
                <span className="text-xs uppercase tracking-widest font-bold text-shoprite-red group-hover:text-white transition-colors">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly Deals */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-shoprite-red font-black uppercase tracking-tighter text-2xl mb-2">
                <span className="bg-shoprite-red text-white px-2 py-1">HOT</span>
                <h2>Weekly Deals</h2>
              </div>
              <p className="text-gray-500">Urgent savings! These offers end this Saturday.</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200">
              <p className="text-sm font-bold text-gray-400 uppercase">Ends In:</p>
              <div className="flex gap-4">
                <div className="text-center"><span className="block font-black text-xl">03</span><span className="text-[10px] text-gray-400 uppercase">Days</span></div>
                <div className="text-center"><span className="block font-black text-xl">14</span><span className="text-[10px] text-gray-400 uppercase">Hrs</span></div>
                <div className="text-center"><span className="block font-black text-xl">25</span><span className="text-[10px] text-gray-400 uppercase">Min</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {weeklyProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/weekly-ad" className="inline-block bg-shoprite-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-colors">
              Browse Full Digital Circular
            </Link>
          </div>
        </div>
      </section>

      {/* Loyalty Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-shoprite-dark rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-12 lg:p-20 relative z-10 text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Join ShopRite Price Plus® Club
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Unlock exclusive weekly discounts, digital coupons, and personalized rewards. Members saved over $1,200 on average last year!
            </p>
            <button className="bg-shoprite-red text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              Join for Free Today
            </button>
          </div>
          <div className="md:w-1/2 h-full min-h-[400px]">
            <img 
              src="https://placehold.co/800x800?text=Price+Plus+Rewards" 
              alt="Loyalty Card" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          {/* Geometric Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-shoprite-red/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-shoprite-red">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-4xl font-black text-center mb-16">What Our Neighbors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah J.', text: 'The curbside pickup is a lifesaver. Everything is always fresh and correctly picked.' },
              { name: 'Mike L.', text: 'ShopRite has the best meat counter in town. The butchers are always helpful with custom cuts.' },
              { name: 'Emily D.', text: 'Price Plus savings really add up. I save at least $30 every visit just from the coupons.' }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-lg italic mb-6">"{t.text}"</p>
                <p className="font-bold opacity-70">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-gray-100 rounded-3xl p-12 text-center">
          <Mail size={48} className="mx-auto text-shoprite-red mb-6" />
          <h2 className="text-3xl font-black mb-4">Get Weekly Deals in Your Inbox</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">Sign up for our newsletter to receive the digital circular every week and exclusive "Friday Flash Sale" alerts.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-shoprite-red bg-white"
            />
            <button className="bg-shoprite-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
            By subscribing, you agree to our Terms & Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Exit Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowExitPopup(false);
                localStorage.setItem('shoprite_popup_dismissed', 'true');
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-110 bg-white rounded-3xl p-8 max-w-lg w-full overflow-hidden"
            >
              <button 
                onClick={() => {
                  setShowExitPopup(false);
                  localStorage.setItem('shoprite_popup_dismissed', 'true');
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-shoprite-dark"
              >
                <X size={24} />
              </button>
              
              <div className="relative z-10 text-center">
                <div className="bg-shoprite-red text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-black italic transform -skew-x-12">
                  10%
                </div>
                <h2 className="text-3xl font-black mb-4">Wait! Don't Go Hungry</h2>
                <p className="text-gray-500 mb-8">Get <span className="text-shoprite-red font-bold">10% OFF</span> your first online order when you sign up today.</p>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none"
                  />
                  <button className="w-full bg-shoprite-red text-white py-4 rounded-xl font-bold text-lg">
                    Claim Discount
                  </button>
                </form>
                <button 
                   onClick={() => {
                     setShowExitPopup(false);
                     localStorage.setItem('shoprite_popup_dismissed', 'true');
                   }}
                   className="mt-6 text-gray-400 text-sm hover:underline"
                >
                  No thanks, I'll pay full price
                </button>
              </div>

              {/* Accent Image behind */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 translate-y-8">
                <img src="https://placehold.co/200x200?text=Apple" alt="" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-[80]">
        <button className="bg-shoprite-dark text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group">
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-shoprite-dark px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            How can we help?
          </span>
        </button>
      </div>
    </div>
  );
}
