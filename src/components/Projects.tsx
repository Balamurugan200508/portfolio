'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'MarketSentinel AI',
    category: 'Machine Learning / Finance',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop',
    description: 'AI-powered market surveillance system to detect anomalous stock trading behavior using Isolation Forest. Real-time dashboard built with Streamlit.'
  },
  {
    id: 2,
    title: 'AI ThoughtPad',
    category: 'AI / Chrome Extension',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop',
    description: 'Chrome extension powered by Google Gemini AI for seamless note-taking, automated explanations, and right-click text capture.'
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    category: 'Experience / Zetheta Algorithms',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    description: 'Hands-on experience in data analysis, cleaning, and modeling to derive insights and support decision-making using Python and modern ML tools.'
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] text-white py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">Selected Work & Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative cursor-pointer"
            >
              <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden rounded-2xl bg-gray-900 border border-white/10 backdrop-blur-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/70" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col">
                  <span className="text-sm font-medium tracking-widest text-amber-400 mb-2 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
