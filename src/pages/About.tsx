import React from 'react';
import { Users, Heart, Target, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-shoprite-dark py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-20 h-2 bg-shoprite-red mx-auto mb-8 rounded-full"></div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Serving Our Neighborhoods Since 1946</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            ShopRite is more than just a grocery store. We are a family of independent retailers who are committed to helping our neighbors live better lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-shoprite-red font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl font-black mb-8">From a Tiny Store to a Community Anchor</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                ShopRite began in 1946 when a small group of independent grocers in New Jersey joined together to create a cooperative. Their goal was simple: provide the best food at the most affordable prices by leveraging their collective buying power.
              </p>
              <p>
                Today, ShopRite is the largest retailer-owned cooperative in the United States, with over 300 locations throughout the Northeast. Each store is locally owned and operated, often by families who have been in the grocery business for generations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-black text-shoprite-red mb-2">300+</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Local Stores</div>
              </div>
              <div>
                <div className="text-4xl font-black text-shoprite-red mb-2">75+</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years of Service</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://placehold.co/800x1000?text=Vintage+ShopRite+Store" 
              alt="Vintage ShopRite" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <StarIcon />
              <p className="font-bold mt-4 italic text-shoprite-dark">"We treat our customers like family because they are our neighbors."</p>
              <p className="text-sm text-gray-400 mt-2">— The ShopRite Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart size={32} />, title: 'Community First', desc: 'We support hundreds of local food banks and community organizations every year.' },
              { icon: <Target size={32} />, title: 'Freshness Guaranteed', desc: 'We source the highest quality products from farmers we know and trust.' },
              { icon: <Users size={32} />, title: 'Family Owned', desc: 'Many of our stores have been run by the same families for over three generations.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-card border border-gray-100 group hover:bg-shoprite-red transition-all duration-500">
                <div className="w-16 h-16 bg-red-50 text-shoprite-red rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{value.title}</h3>
                <p className="text-gray-500 group-hover:text-white/80 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-shoprite-red rounded-3xl p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-3/5 text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">ShopRite Partners In Caring</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Since 1999, our Partners In Caring program has donated more than $50 million to local food banks that help feed the hungry. We believe that nobody in our community should go to bed hungry.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 flex items-center gap-3">
                  <Award size={20} />
                  <span className="font-bold">Fighting Hunger</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 flex items-center gap-3">
                  <Heart size={20} />
                  <span className="font-bold">Local Partnerships</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl border-8 border-white/20">
                <img src="https://placehold.co/400x400?text=Partners+in+Caring" alt="Partners in Caring" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="flex gap-1 text-shoprite-red">
      <Award size={20} />
    </div>
  );
}
