import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';
import content from '../../data/content';

const ContactInfo: React.FC = () => {
  const { info, socialMedia } = content.contact;

  return (
    <div className="bg-green-600 text-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
      
      <ul className="space-y-6 mb-8">
        <motion.li 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start"
        >
          <Mail className="w-6 h-6 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <a href={`mailto:${info.email}`} className="text-white/90 hover:text-white transition-colors">
              {info.email}
            </a>
          </div>
        </motion.li>
        
        <motion.li 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start"
        >
          <Phone className="w-6 h-6 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <a href={`tel:${info.phone}`} className="text-white/90 hover:text-white transition-colors">
              {info.phone}
            </a>
          </div>
        </motion.li>
        
        <motion.li 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-start"
        >
          <MapPin className="w-6 h-6 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Address</h4>
            <p className="text-white/90">
              {info.address}
            </p>
          </div>
        </motion.li>
        
        <motion.li 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-start"
        >
          <Clock className="w-6 h-6 mr-3 mt-1 shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Hours</h4>
            <p className="text-white/90">
              {info.hours}
            </p>
          </div>
        </motion.li>
      </ul>
      
      <h4 className="font-medium mb-3">Follow Us</h4>
      <div className="flex space-x-4">
        {socialMedia.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label={social.platform}
          >
            {social.platform === 'Instagram' && <Instagram size={18} />}
            {social.platform === 'Facebook' && <Facebook size={18} />}
            {social.platform === 'Pinterest' && <Pinterest size={18} />}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;