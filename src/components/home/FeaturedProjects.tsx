import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import content from '../../data/content';

const FeaturedProjects: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const projects = content.home.featuredProjects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5] transform transition-transform duration-500 ${
                hoveredItem === index ? 'scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  scale: hoveredItem === index ? 1.1 : 1
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === index ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 p-8 w-full"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hoveredItem === index ? 0 : 10,
                  opacity: hoveredItem === index ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredItem === index ? 1 : 0,
                    y: hoveredItem === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-white border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  View Project
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;