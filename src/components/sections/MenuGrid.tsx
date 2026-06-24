'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuCard } from '../ui/MenuCard';
import { CartItem } from '@/types';

interface MenuGridProps {
  cart: CartItem[];
  onIncrease: (name: string) => void;
  onDecrease: (name: string) => void;
  onAdd: (item: Omit<CartItem, 'qty'>) => void;
}

export function MenuGrid({ cart, onIncrease, onDecrease, onAdd }: MenuGridProps) {
  const categories = ["All", "Mandi", "Starters", "Main Course", "Breads", "Desserts"];
  const [activeCategory, setActiveCategory] = useState("All");

  const menuItems = [
    // ── Mandi ──
    { name: "Mutton Juicy Mandi",       img: "/mutton juicy mandi.png",        price: 650, category: "Mandi"       },
    { name: "Chicken Faham Mandi",       img: "/chicken faham Mandi.png",       price: 450, category: "Mandi"       },
    { name: "Fish Platter Mandi",        img: "/fish platter mandi.png",        price: 750, category: "Mandi"       },
    { name: "Chicken Madfoon",           img: "/chicken madfoon Mandi.png",     price: 480, category: "Mandi"       },
    { name: "Chicken Majestic",          img: "/chicken majestic.png",          price: 350, category: "Mandi"       },
    { name: "Chicken Juicy Mandi",       img: "/chicken juicy mandi.png",       price: 400, category: "Mandi"       },
    { name: "Chicken Broasted Mandi",    img: "/chicken broasted mandi.png",    price: 420, category: "Mandi"       },
    { name: "Chicken Crispy Mandi",      img: "/chicken crispy mandi.png",      price: 430, category: "Mandi"       },
    { name: "Chicken Fry Mandi",         img: "/chicken fry mandi.png",         price: 390, category: "Mandi"       },
    { name: "Chicken Lollipop Mandi",    img: "/chicken lollipop mandi.png",    price: 440, category: "Mandi"       },
    { name: "Chilli Chicken",            img: "/chilli chicken.png",            price: 320, category: "Mandi"       },
    { name: "Fish Fry Mandi",            img: "/fish fry mandi.png",            price: 550, category: "Mandi"       },
    { name: "Mutton Fry Mandi",          img: "/mutton fry mandi.png",          price: 700, category: "Mandi"       },
    // ── Starters ──
    { name: "Chicken 65",               img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=500&q=80", price: 280, category: "Starters"    },
    { name: "Paneer Tikka",             img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?auto=format&fit=crop&w=500&q=80", price: 260, category: "Starters"    },
    { name: "Seekh Kebab",              img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80", price: 320, category: "Starters"    },
    { name: "Hariyali Tikka",           img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80", price: 300, category: "Starters"    },
    { name: "Fish Tikka",               img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80", price: 360, category: "Starters"    },
    // ── Main Course ──
    { name: "Butter Chicken",           img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80", price: 380, category: "Main Course"  },
    { name: "Mutton Rogan Josh",        img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80", price: 480, category: "Main Course"  },
    { name: "Dal Makhani",              img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80", price: 220, category: "Main Course"  },
    { name: "Prawn Masala",             img: "https://images.unsplash.com/photo-1590167918070-87989c2b7b7b?auto=format&fit=crop&w=500&q=80", price: 520, category: "Main Course"  },
    { name: "Kadai Paneer",             img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80", price: 280, category: "Main Course"  },
    // ── Breads ──
    { name: "Butter Naan",              img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80", price:  60, category: "Breads"       },
    { name: "Garlic Naan",              img: "https://images.unsplash.com/photo-1591778751042-e9be44c15f31?auto=format&fit=crop&w=500&q=80", price:  80, category: "Breads"       },
    { name: "Laccha Paratha",           img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80", price:  70, category: "Breads"       },
    // ── Desserts ──
    { name: "Qubani Ka Meetha",         img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=500&q=80", price: 150, category: "Desserts"     },
    { name: "Double Ka Meetha",         img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80", price: 130, category: "Desserts"     },
    { name: "Kulfi Falooda",            img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80", price: 120, category: "Desserts"     },
  ];

  return (
    <section id="menu" className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0A0A0B]">
      <h3 className="text-3xl sm:text-4xl font-serif text-white text-center mb-8 sm:mb-12">The Royal Selection</h3>

      {/* ── Category Filter Bar ── */}
      <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mb-12 sm:mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#DFB15B] text-black shadow-[0_0_20px_rgba(223,177,91,0.3)]'
                : 'bg-[#161618] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Menu Grid (Masonry feel) ── */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
        <AnimatePresence mode="popLayout">
          {menuItems
            .filter(item => activeCategory === "All" || item.category === activeCategory)
            .map((item, idx) => {
              const cartItem = cart.find(i => i.name === item.name);
              const qty = cartItem ? cartItem.qty : 0;
              return (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                >
                  <MenuCard
                    item={item}
                    cartQty={qty}
                    onIncrease={() => onIncrease(item.name)}
                    onDecrease={() => onDecrease(item.name)}
                    onAdd={() => onAdd(item)}
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
