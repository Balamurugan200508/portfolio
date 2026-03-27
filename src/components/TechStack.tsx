'use client';

import { motion } from 'framer-motion';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiTensorflow, SiScikitlearn, SiMysql, SiMongodb } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Icons combined from reference image and user's resume
const techIcons = [
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Java', Icon: FaJava, color: '#007396' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Scikit-Learn', Icon: SiScikitlearn, color: '#F7931E' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' }
];

export default function TechStack() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 text-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header matching the reference image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-16 relative"
        >
          <div className="flex items-center gap-4">
            {/* Optional Avatar Placeholder */}
            <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center overflow-hidden">
               <span className="text-sm font-bold leading-none">BS</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-center absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            Tech Stack
          </h2>
          {/* Hamburger Menu Icon Placeholder */}
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <div className="w-8 h-[2px] bg-white rounded-full"></div>
            <div className="w-8 h-[2px] bg-white rounded-full"></div>
            <div className="w-6 h-[2px] bg-white rounded-full self-end"></div>
          </div>
        </motion.div>

        {/* 2 Column Mobile, 3 or 4 Column Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {techIcons.map((tech, i) => (
             <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="aspect-[4/5] rounded-[2rem] bg-[#1a1a1e] border border-white/5 flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-[#1f1f24] transition-all duration-300 group"
            >
              <tech.Icon style={{ color: tech.color }} className="w-20 h-20 md:w-24 md:h-24 drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
