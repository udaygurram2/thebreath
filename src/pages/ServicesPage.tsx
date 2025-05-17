import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/shared/HeroSection';
import ServiceCard from '../components/services/ServiceCard';
import ProcessSteps from '../components/services/ProcessSteps';
import content from '../data/content';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const { hero, intro, servicesList } = content.services;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <PageWrapper>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xl text-neutral-600 max-w-4xl mx-auto text-center mb-16 leading-relaxed"
          >
            {intro}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <ProcessSteps />
    </PageWrapper>
  );
};

export default ServicesPage;