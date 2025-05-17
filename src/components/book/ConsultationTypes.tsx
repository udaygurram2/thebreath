import React from 'react';
import { motion } from 'framer-motion';
import { Video, Home, Building } from 'lucide-react';
import content from '../../data/content';

const ConsultationTypes: React.FC = () => {
  const { consultationTypes } = content.book;
  
  const iconMap: Record<string, JSX.Element> = {
    video: <Video size={32} />,
    home: <Home size={32} />,
    building: <Building size={32} />
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium mb-6 text-center"
        >
          Choose Your Consultation
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-600 text-center max-w-3xl mx-auto mb-12"
        >
          Select the consultation type that best fits your needs. All consultation fees will be credited toward your project if you decide to proceed.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 mb-4 flex justify-center">
                {iconMap[type.icon]}
              </div>
              <h3 className="text-xl font-medium mb-2">{type.title}</h3>
              <p className="text-neutral-600 mb-4">{type.description}</p>
              <div className="text-green-600 font-medium">{type.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;