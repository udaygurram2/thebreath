import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flower, Palmtree, LayoutPanelLeft, Sprout, PencilRuler } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const iconMap: Record<string, JSX.Element> = {
    flower: <Flower size={36} />,
    palmtree: <Palmtree size={36} />,
    'layout-panel-left': <LayoutPanelLeft size={36} />,
    sprout: <Sprout size={36} />,
    'pencil-ruler': <PencilRuler size={36} />
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden group">
        <motion.img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      </div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="text-green-600 mr-4 transform transition-transform duration-300 hover:scale-110"
          >
            {iconMap[service.icon]}
          </motion.div>
          <h3 className="text-2xl font-medium">{service.title}</h3>
        </div>
        <p className="text-neutral-600 leading-relaxed">{service.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 text-green-600 font-medium flex items-center group"
        >
          Learn More
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-2"
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;