'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Header({ cartCount, onOpenCart }: HeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navLinks = [
    ['Home', '#top'],
    ['Our Menu', '#menu'],
    ['Royal Ambiance', '#ambiance'],
    ['Contact', '#contact']
  ];

  return (
    <>
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#0B0B0C]/95 backdrop-blur-md z-[200] flex flex-col items-center justify-center gap-10 lg:hidden"
          >
            <button
              onClick={() => setIsMobileNavOpen(false)}
              className="absolute top-4 right-4 text-[#DFB15B] text-3xl font-bold p-2"
            >✕</button>
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMobileNavOpen(false)}
                className="text-3xl font-serif text-white hover:text-[#DFB15B] transition-colors tracking-widest"
              >{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <header id="top" className="w-full px-3 sm:px-4 md:px-8 py-3 flex justify-between items-center gap-2 border-b border-neutral-800 bg-[#0B0B0C]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="relative h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-[#DFB15B] shrink-0 overflow-hidden">
            <Image src="/logo.jpg" alt="Logo" fill className="object-contain" sizes="44px" />
          </div>
          <h1 className="text-base sm:text-lg md:text-2xl font-serif font-bold text-[#DFB15B] tracking-widest uppercase truncate">Majesty</h1>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-400">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-[#DFB15B] transition-colors tracking-wide">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="bg-neutral-800 px-3 sm:px-5 py-2 rounded-lg text-[#DFB15B] font-bold text-sm border border-neutral-700 hover:border-[#DFB15B] transition-all flex items-center gap-1 sm:gap-2 shadow-[0_0_15px_rgba(223,177,91,0.1)]"
          >
            CART <span className="bg-[#DFB15B] text-black px-2 py-0.5 rounded-full text-xs">{cartCount}</span>
          </button>
          
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-[#DFB15B] rounded transition-all" />
            <span className="block w-4 h-0.5 bg-[#DFB15B] rounded transition-all group-hover:w-6" />
            <span className="block w-6 h-0.5 bg-[#DFB15B] rounded transition-all" />
          </button>
        </div>
      </header>
    </>
  );
}
