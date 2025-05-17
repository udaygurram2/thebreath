import React from 'react';
import { motion } from 'framer-motion';
import { 
  Recycle, 
  BadgeCheck, 
  Palette, 
  HeartHandshake 
} from 'lucide-react';
import content from '../../data/content';

const Values: React.FC = () => {
  const { values, mission } = content.about;
  
  const iconMap: Record<string, JSX.Element> = {
    recycle: <Recycle size={32} />,
    badge: <BadgeCheck size={32} />,
    palette: <Palette size={32} />,
    'heart-handshake': <HeartHandshake size={32} />
  };

  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{mission.title}</h2>
          <p className="text-xl text-white/90">{mission.text}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-white mb-4 flex justify-center">
                {iconMap[value.icon]}
              </div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;