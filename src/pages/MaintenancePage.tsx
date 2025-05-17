import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/shared/HeroSection';
import PlanCard from '../components/maintenance/PlanCard';
import FaqSection from '../components/maintenance/FaqSection';
import content from '../data/content';

const MaintenancePage: React.FC = () => {
  const { hero, intro, plans } = content.maintenance;

  return (
    <PageWrapper>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-16">
            {intro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <FaqSection />
    </PageWrapper>
  );
};

export default MaintenancePage;