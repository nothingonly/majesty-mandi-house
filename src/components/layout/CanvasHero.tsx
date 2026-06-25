'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const heroImages = ["/dishes/chicken juicy mandi.png", "/dishes/mutton juicy mandi.png", "/dishes/fish platter mandi.png"];

export function CanvasHero() {
  const TOTAL_FRAMES = 191;
  const FRAME_PREFIX = "frame_";
  const FRAME_PADDING = 4;
  const FRAME_EXTENSION = ".webp";
  const FRAME_START_INDEX = 0;

  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeFrameRef = useRef(0);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  const drawFrame = (frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = imagesRef.current[frameIdx];
    if (img && img.complete) {
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth || 1920;
        canvas.height = img.naturalHeight || 1080;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = FRAME_START_INDEX; i < FRAME_START_INDEX + TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const frameNum = String(i).padStart(FRAME_PADDING, '0');
      img.src = `/webp_frames/${FRAME_PREFIX}${frameNum}${FRAME_EXTENSION}`;
      
      const idx = i - FRAME_START_INDEX;
      img.onload = () => {
        if (activeFrameRef.current === idx) {
          drawFrame(idx);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth 60fps canvas scrubbing
      animationFrameId = requestAnimationFrame(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollRange = rect.height - window.innerHeight;
        if (scrollRange <= 0) return;

        let progress = -rect.top / scrollRange;
        progress = Math.max(0, Math.min(1, progress));

        const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
        if (activeFrameRef.current !== frameIndex) {
          activeFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ═══════════════ CINEMATIC PRELOADER (THE AURA) ═══════════════ */}
      {isLoading && (
        <div className="fixed inset-0 bg-[#0A0A0B] z-[999] flex items-center justify-center transition-opacity duration-700">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-32 h-32 rounded-full border-2 border-[#DFB15B] shadow-[0_0_50px_10px_rgba(223,177,91,0.6)] animate-pulse overflow-hidden">
              <Image src="/brand/logo.jpg" alt="Majesty Mandi House Logo" fill className="object-cover" sizes="128px" priority />
            </div>
            <span className="text-[#DFB15B] font-serif text-xl tracking-[0.3em] uppercase animate-pulse">Majesty</span>
          </div>
        </div>
      )}

      {/* ═══════════════ SCROLL-BOUND CANVAS SECTION ═══════════════ */}
      <div ref={scrollContainerRef} className="relative w-full h-[300vh] bg-[#0A0A0B]">
        <div className="sticky top-0 w-full h-[100dvh] flex items-center justify-center pointer-events-none">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain mix-blend-screen portrait:scale-[1.8] landscape:scale-100"
          />
        </div>
      </div>

      {/* ═══════════════ HERO TEXT SECTION ═══════════════ */}
      <section className="w-full py-12 md:py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 relative overflow-hidden bg-[#0A0A0B]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161618] pointer-events-none z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center z-20 w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-3 sm:mb-4 text-white leading-tight">...TASTE THE LEGACY...</h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-8 sm:mb-12 max-w-lg px-2">Experience the ultimate authentic Arabian dining right here in Hanamkonda.</p>
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl animate-[bounce_4s_ease-in-out_infinite] relative aspect-[4/3]">
            <Image 
              src={heroImages[currentHeroIdx]} 
              alt="Signature Mandi" 
              fill
              sizes="(max-width: 640px) 320px, (max-width: 768px) 448px, 672px"
              className="object-contain drop-shadow-[0_0_30px_rgba(223,177,91,0.3)] transition-opacity duration-700 ease-in-out" 
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
