import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/shared/HeroSection';
import GalleryGrid from '../components/gallery/GalleryGrid';
import content from '../data/content';

const GalleryPage: React.FC = () => {
  const { hero } = content.gallery;

  return (
    <PageWrapper>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />
      
      <GalleryGrid />
    </PageWrapper>
  );
};

export default GalleryPage;