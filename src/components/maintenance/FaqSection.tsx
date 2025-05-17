import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import content from '../../data/content';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);
  const { faq } = content.maintenance;

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faq.map((item: FaqItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                {openItemIndex === index ? (
                  <ChevronUp size={20} className="text-green-600" />
                ) : (
                  <ChevronDown size={20} className="text-neutral-600" />
                )}
              </button>
              
              {openItemIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white"
                >
                  <p className="text-neutral-600">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;