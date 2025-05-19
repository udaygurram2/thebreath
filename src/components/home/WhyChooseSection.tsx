import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import content from '../../data/content';

const WhyChooseSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { whyChoose } = content.home;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-12 text-center"
        >
          {whyChoose.title}
        </motion.h2>

        <div className="space-y-4 md:space-y-8">
          {whyChoose.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex items-center p-4 md:hidden"
              >
                <h3 className="text-lg font-medium flex-grow text-left">{item.title}</h3>
                {expandedIndex === index ? (
                  <ChevronUp size={20} className="text-neutral-400" />
                ) : (
                  <ChevronDown size={20} className="text-neutral-400" />
                )}
              </button>

              <div className="hidden md:flex md:flex-row gap-6 p-6">
                <div className="w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden"
                  >
                    <div className="p-4 pt-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="text-neutral-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;