import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: 'How do I place an online order for delivery?', a: 'You can browse our online store, add items to your cart, and choose "Delivery" at checkout. We offer same-day delivery for orders placed before 3 PM.' },
    { q: 'What is the ShopRite Price Plus® Card?', a: 'Our loyalty card provides exclusive weekly discounts, digital coupons, and personalized rewards. You can sign up for free online or at any customer service desk.' },
    { q: 'Do you offer curbside pickup?', a: 'Yes! Simply select "Curbside Pickup" as your fulfillment method. We will notify you when your order is ready, and you can pull into a designated space for us to load your car.' },
    { q: 'What is your return policy?', a: 'We stand behind the quality of our food. If you are not satisfied, please bring the item and your receipt back to the customer service desk for a full refund or exchange.' },
    { q: 'Can I use digital coupons in the app?', a: 'Absolutely. Clip coupons on our website or mobile app, and they will be applied automatically when you scan your Price Plus® card at checkout.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-6">Contact Your Local ShopRite</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Have a question or feedback? We are here to help. Reach out to our team at the Brookdale ShopRite.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-8">Store Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-shoprite-red rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-gray-400 mb-1">Address</h4>
                    <p className="font-bold text-shoprite-dark">123 Market St, Brookdale, NJ 07003</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-shoprite-red rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-gray-400 mb-1">Phone</h4>
                    <p className="font-bold text-shoprite-dark">(973) 555-0123</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-shoprite-red rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-gray-400 mb-1">Email</h4>
                    <p className="font-bold text-shoprite-dark">brookdale@shoprite.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 text-shoprite-red rounded-xl flex items-center justify-center shrink-0">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-gray-400 mb-1">Support</h4>
                    <p className="font-bold text-shoprite-dark">Help Center Online</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden aspect-video relative group">
              <img 
                src="https://placehold.co/800x450?text=Google+Maps+Placeholder+NJ" 
                alt="Store Location Map" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                  <div className="bg-shoprite-red text-white p-2 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-black">Brookdale ShopRite</p>
                    <p className="text-xs text-gray-400">Open until 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-black mb-8 text-center lg:text-left">Send us a Message</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-shoprite-red" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-shoprite-red" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-shoprite-red appearance-none cursor-pointer">
                  <option>Customer Feedback</option>
                  <option>Online Order Issue</option>
                  <option>Price Plus Card Question</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-shoprite-red resize-none"></textarea>
              </div>
              <button className="w-full bg-shoprite-red text-white py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-red-200">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center text-shoprite-dark">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-500 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours Table Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-shoprite-dark rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter italic text-shoprite-red">Store Hours</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 max-w-5xl mx-auto">
                {[
                    { d: 'MON', h: '7AM-10PM' },
                    { d: 'TUE', h: '7AM-10PM' },
                    { d: 'WED', h: '7AM-10PM' },
                    { d: 'THU', h: '7AM-10PM' },
                    { d: 'FRI', h: '7AM-10PM' },
                    { d: 'SAT', h: '7AM-10PM' },
                    { d: 'SUN', h: '7AM-9PM' },
                ].map((item, i) => (
                    <div key={i} className="space-y-2">
                        <div className="text-shoprite-red text-sm font-black italic tracking-widest">{item.d}</div>
                        <div className="font-bold text-lg">{item.h}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
