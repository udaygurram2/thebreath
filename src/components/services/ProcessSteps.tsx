import React from 'react';
import { motion } from 'framer-motion';
import content from '../../data/content';

const ProcessSteps: React.FC = () => {
  const { process } = content.services;

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium mb-12 text-center"
        >
          {process.title}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-6">
                <span className="font-semibold text-lg">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;