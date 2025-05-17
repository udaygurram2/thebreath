import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

interface Plan {
  title: string;
  frequency: string;
  services: string[];
  description: string;
  image: string;
}

interface PlanCardProps {
  plan: Plan;
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={plan.image} 
          alt={plan.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-medium">{plan.title}</h3>
          <div className="text-green-600 font-medium mt-1">{plan.frequency}</div>
        </div>
        
        <p className="text-neutral-600 mb-4">{plan.description}</p>
        
        <div className="mb-6">
          <h4 className="font-medium mb-2">Includes:</h4>
          <ul className="space-y-2">
            {plan.services.map((service, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 shrink-0" />
                <span className="text-neutral-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button variant="outline" fullWidth>
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default PlanCard;