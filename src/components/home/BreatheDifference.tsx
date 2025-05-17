import React from 'react';
import { motion } from 'framer-motion';
import { Award, Recycle, HelpingHand } from 'lucide-react';
import content from '../../data/content';

const BreatheDifference: React.FC = () => {
  const { breatheDifference } = content.home;
  
  const iconMap: Record<string, JSX.Element> = {
    award: <Award size={36} />,
    recycle: <Recycle size={36} />,
    'helping-hand': <HelpingHand size={36} />
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium mb-12 text-center"
        >
          {breatheDifference.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breatheDifference.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 mb-4">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreatheDifference;