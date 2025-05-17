import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Heart, Leaf } from 'lucide-react';
import content from '../../data/content';
import Button from '../ui/Button';

const GreenGoals: React.FC = () => {
  const { greenGoals } = content.home;
  
  const iconMap: Record<string, JSX.Element> = {
    home: <Home size={24} />,
    building: <Building size={24} />,
    heart: <Heart size={24} />,
    leaf: <Leaf size={24} />
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium mb-4"
          >
            {greenGoals.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            {greenGoals.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {greenGoals.goals.map((goal, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-50 rounded-lg p-6 text-center hover:bg-green-50 transition-colors"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                {iconMap[goal.icon]}
              </div>
              <h3 className="font-medium text-neutral-800">{goal.text}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            {greenGoals.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GreenGoals;