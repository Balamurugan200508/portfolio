'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 121;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const renderFrame = (frameIndex: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    
    const index = Math.min(Math.max(frameIndex - 1, 0), FRAME_COUNT - 1);
    const img = imagesRef.current[index];
    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    } else {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    }

    if (img.width === 0 || img.height === 0) return;
    
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = drawWidth / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      drawWidth = drawHeight * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      loadedImages.push(new Image());
    }
    
    imagesRef.current = loadedImages;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = loadedImages[i - 1];
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;
      img.onload = () => {
        const expectedFrame = Math.max(1, Math.min(FRAME_COUNT, Math.floor(scrollYProgress.get() * FRAME_COUNT) + 1));
        if (i === expectedFrame) {
          renderFrame(expectedFrame);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.floor(latest * FRAME_COUNT) + 1));
    if (imagesRef.current.length > 0) {
      renderFrame(currentFrame);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.floor(scrollYProgress.get() * FRAME_COUNT) + 1));
      renderFrame(currentFrame);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
}
