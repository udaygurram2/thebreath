import React, { useState } from 'react';
import { motion } from 'framer-motion';
import content from '../../data/content';

const TeamMembers: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const { team } = content.about;

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
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredMember === member.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center p-6"
                >
                  <p className="text-white text-center">{member.bio}</p>
                </motion.div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;