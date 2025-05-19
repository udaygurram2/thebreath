import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaAction?: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaAction,
  className = ''
}) => {
  const [ref, bounds] = useMeasure();
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, bounds.height], [0, bounds.height * 0.5]);
  const opacity = useTransform(scrollY, [0, bounds.height * 0.8], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section 
      ref={ref}
      className={`relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.1)'
          }}
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/40 to-neutral-900/60 z-10" />
      
      <div className="container mx-auto px-4 relative z-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
            >
              {subtitle}
            </motion.p>
          )}
          
          {ctaText && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={ctaAction}
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaText}
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;