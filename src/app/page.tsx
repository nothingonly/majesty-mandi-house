'use client';
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { CanvasHero } from '@/components/layout/CanvasHero';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { MenuGrid } from '@/components/sections/MenuGrid';
import { AmbianceGallery } from '@/components/sections/AmbianceGallery';
import { PhysicalMenuCTA } from '@/components/sections/PhysicalMenuCTA';
import { CartItem, MenuItem } from '@/types';

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart Functions
  const addToCart = (item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const exists = prev.find(i => i.name === item.name);
      if (exists) return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increaseQty = (name: string) => {
    setCart(prev => prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i));
  };

  const decreaseQty = (name: string) => {
    setCart(prev => prev.map(i => {
      if (i.name === name && i.qty > 1) return { ...i, qty: i.qty - 1 };
      return i;
    }).filter(i => i.name !== name || i.qty > 0)); // Filter out items that drop to 0
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white font-sans overflow-clip relative selection:bg-[#DFB15B] selection:text-[#0A0A0B]">
      {/* ═══════════════ TOP BANNER ═══════════════ */}
      <div className="w-full bg-gradient-to-r from-[#DFB15B] via-[#F3A833] to-[#DFB15B] text-black text-center py-2.5 font-bold text-xs sm:text-sm tracking-wide z-50 relative border-b border-[#0A0A0B]">
        🎓 Exclusive Offer: 10% Discount available with a valid Student ID (Dine-in only).
      </div>

      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
      />

      <CanvasHero />

      {/* ═══════════════ THE MAJESTY EXPERIENCE ═══════════════ */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0A0A0B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#DFB15B] text-xs sm:text-sm tracking-[0.4em] uppercase font-bold mb-4">The Legacy</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-8">The Majesty Experience</h3>
          <div className="w-12 h-[2px] bg-[#DFB15B]/50 mx-auto mb-10" />
          
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-6">
            Majesty Mandi House is a popular dining destination in Hanumakonda that specializes in authentic Arabian-style mandi and traditional Middle Eastern flavors. Known for its fragrant rice, tender meat preparations, and generous portions, the restaurant offers a unique culinary experience for mandi lovers in Greater Warangal.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-6">
            The restaurant serves a variety of chicken, mutton, and special mandi dishes prepared using aromatic spices and traditional cooking techniques. With its comfortable seating, family-friendly atmosphere, and flavorful menu, Majesty Mandi House has become a preferred choice for families, friends, and food enthusiasts looking to enjoy authentic Arabian cuisine.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {["Authentic Arabian Mandi", "Family-Friendly Dining", "Freshly Prepared Food", "Large Sharing Platters"].map((feature, idx) => (
              <span key={idx} className="border border-[#161618] bg-[#161618] text-neutral-300 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MenuGrid 
        cart={cart} 
        onIncrease={increaseQty} 
        onDecrease={decreaseQty} 
        onAdd={addToCart} 
      />

      <PhysicalMenuCTA />
      <AmbianceGallery />

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer id="contact" className="w-full bg-[#0A0A0B] py-12 px-4 sm:px-6 md:px-12 border-t border-neutral-900 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-serif font-bold text-[#DFB15B] tracking-widest uppercase mb-4">Majesty</h2>
          <p className="text-neutral-500 text-sm mb-8 max-w-sm">Experience the ultimate authentic Arabian dining right here in Hanamkonda.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-400 mb-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Directions</a>
          </div>
          <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} Majesty Mandi House. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
