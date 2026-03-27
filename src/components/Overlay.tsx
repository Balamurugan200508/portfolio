'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Map scroll progress to opacity and translateY for parallax effects
  // Section 1 (0% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2 (30% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3 (60% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="w-full h-full relative max-w-7xl mx-auto px-6 font-sans">
      
      {/* Section 1: Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">S Balamurugan</h1>
        <p className="text-xl md:text-3xl font-light text-gray-300">AI & Software Developer.</p>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-white"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
          I build intelligent digital experiences.
        </h2>
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right text-white"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
          Bridging Machine Learning & Web Development.
        </h2>
      </motion.div>

    </div>
  );
}
