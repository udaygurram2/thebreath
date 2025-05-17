import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/shared/HeroSection';
import BookingForm from '../components/book/BookingForm';
import ConsultationTypes from '../components/book/ConsultationTypes';
import content from '../data/content';

const BookPage: React.FC = () => {
  const { hero } = content.book;

  return (
    <PageWrapper>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />
      
      <ConsultationTypes />
      <BookingForm />
    </PageWrapper>
  );
};

export default BookPage;