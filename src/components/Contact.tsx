'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <section className="bg-[#121212] pt-32 pb-0 px-6 relative z-20 text-white min-h-[80vh] flex flex-col items-center justify-between overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow mt-10">
        
        {/* Quote */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-xl md:text-2xl font-mono mb-16 text-center tracking-wide"
        >
          &quot;Keep Learning. Keep Living. Keep Winning.&quot;
        </motion.p>

        {/* GetInTouch(); */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <span className="text-[#a855f7] font-mono text-3xl md:text-5xl font-bold tracking-tight">:: Ping me</span>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-6 md:gap-8 mb-16"
        >
          {/* Instagram */}
          <a href="https://www.instagram.com/_bala___murugan_?igsh=dzRvMTF2ZGNieHNz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaInstagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/balamurugan007/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/Balamurugan200508" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </a>
          {/* Email */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=balamurugan.suresh2015@gmail.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#a855f7] flex items-center justify-center hover:bg-[#9333ea] transition-colors shadow-lg shadow-purple-500/30">
            <MdEmail className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </a>
        </motion.div>
      </div>


    </section>
  );
}
