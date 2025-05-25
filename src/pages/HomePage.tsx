import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/shared/HeroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import GreenGoals from '../components/home/GreenGoals';
import BreatheDifference from '../components/home/BreatheDifference';
import WhyChooseSection from '../components/home/WhyChooseSection';
import QuoteSection from '../components/home/QuoteSection';
import ShopSection from '../components/home/ShopSection';
import content from '../data/content';

const HomePage: React.FC = () => {
  const { hero } = content.home;
  
  return (
    <PageWrapper>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        ctaText={hero.cta}
      />
      <FeaturedProjects />
      <GreenGoals />
      <ShopSection />
      <QuoteSection />
      <BreatheDifference />
      <WhyChooseSection />
    </PageWrapper>
  );
};

export default HomePage;