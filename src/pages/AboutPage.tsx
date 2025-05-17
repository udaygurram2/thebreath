import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/shared/HeroSection';
import Story from '../components/about/Story';
import Values from '../components/about/Values';
import TeamMembers from '../components/about/TeamMembers';
import content from '../data/content';

const AboutPage: React.FC = () => {
  const { hero } = content.about;

  return (
    <PageWrapper>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />
      
      <Story />
      <Values />
      <TeamMembers />
    </PageWrapper>
  );
};

export default AboutPage;