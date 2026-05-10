import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-4 shadow-card border border-gray-100 flex flex-col relative group h-full"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.tags?.map(tag => (
          <span key={tag} className={`text-[10px] font-bold px-2 py-1 rounded-full text-white ${tag === 'New' ? 'bg-blue-500' : 'bg-orange-500'}`}>
            {tag.toUpperCase()}
          </span>
        ))}
        {product.isLowStock && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-red-100 text-red-600 border border-red-200">
            LOW STOCK
          </span>
        )}
      </div>

      <button className="absolute top-3 right-3 z-10 text-gray-400 hover:text-shoprite-red transition-colors opacity-0 group-hover:opacity-100">
        <Heart size={20} />
      </button>

      {/* Image */}
      <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider font-medium">{product.category}</p>
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{product.weight}</p>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-black text-shoprite-red">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-shoprite-red text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-100 active:scale-95"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
