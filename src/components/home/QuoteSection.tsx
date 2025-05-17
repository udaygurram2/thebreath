import React from 'react';
import { motion } from 'framer-motion';
import content from '../../data/content';

const QuoteSection: React.FC = () => {
  const { quote } = content.home;

  return (
    <section className="py-24 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed mb-6">
              "{quote.text}"
            </p>
            <cite className="not-italic font-medium text-lg">— {quote.author}</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;