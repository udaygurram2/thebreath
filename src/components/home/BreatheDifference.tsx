import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Recycle, HelpingHand, ChevronDown, ChevronUp } from 'lucide-react';
import content from '../../data/content';

const BreatheDifference: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { breatheDifference } = content.home;
  
  const iconMap: Record<string, JSX.Element> = {
    award: <Award size={24} />,
    recycle: <Recycle size={24} />,
    'helping-hand': <HelpingHand size={24} />
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-12 text-center"
        >
          {breatheDifference.title}
        </motion.h2>

        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {breatheDifference.items.map((item, index) => (
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
                className="w-full p-4 flex items-center justify-between md:block md:p-8"
              >
                <div className="flex items-center md:block md:text-center">
                  <div className="text-green-600 mr-4 md:mr-0 md:mb-4">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
                </div>
                <div className="md:hidden">
                  {expandedIndex === index ? (
                    <ChevronUp size={20} className="text-neutral-400" />
                  ) : (
                    <ChevronDown size={20} className="text-neutral-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {(expandedIndex === index || window.innerWidth >= 768) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:block"
                  >
                    <div className="p-4 pt-0 md:px-8 md:pt-0">
                      <p className="text-neutral-600 text-sm md:text-base">
                        {item.description}
                      </p>
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

export default BreatheDifference;