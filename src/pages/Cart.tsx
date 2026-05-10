import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.06;
  const finalTotal = totalPrice + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any groceries yet. Browse our aisles to find the freshest food!</p>
        <Link to="/shop" className="bg-shoprite-red text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-red-200 hover:scale-105 transition-transform">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map(item => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-card border border-gray-100 flex items-center gap-4 md:gap-8"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900 md:text-lg">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{item.weight} • ${item.price.toFixed(2)} / ea</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-500"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-500"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-black text-shoprite-dark md:text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 text-shoprite-red font-bold hover:underline py-4"
            >
              <span>Continue Shopping</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-shoprite-dark">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Estimated Tax (6%)</span>
                  <span className="text-shoprite-dark">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                   <div className="flex items-center gap-2">
                    <span>Delivery Fee</span>
                    {totalPrice > 50 && <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase">FREE</span>}
                   </div>
                  <span className={totalPrice > 50 ? 'line-through text-gray-300' : 'text-shoprite-dark'}>
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                {totalPrice < 50 && (
                  <div className="p-3 bg-red-50 rounded-xl text-xs text-shoprite-red font-medium border border-red-100">
                    Add ${(50 - totalPrice).toFixed(2)} more for <b>FREE Delivery</b>!
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8 pt-6 border-t font-medium">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2 uppercase tracking-widest font-bold">
                  <CreditCard size={14} />
                  <span>Promo Code</span>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-shoprite-red" 
                  />
                  <button className="bg-shoprite-dark text-white px-6 rounded-xl font-bold hover:bg-black transition-colors">Apply</button>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8 pt-6 border-t">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-black text-shoprite-red">${finalTotal.toFixed(2)}</span>
              </div>

              <button className="w-full bg-shoprite-red text-white py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-red-200 mb-6">
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
