import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import HeroSection from '../../components/shared/HeroSection';
import CategoryCard from '../../components/shop/CategoryCard';
import ProductFilters from '../../components/shop/ProductFilters';
import { categories } from '../../data/shop';

const ShopPage: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <PageWrapper>
      <HeroSection
        title="Shop Our Collection"
        subtitle="Discover our curated selection of plants and accessories"
        image="https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg"
      />

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-medium">Shop by Category</h2>
            <button
              onClick={() => setIsFiltersOpen(true)}
              className="flex items-center text-green-600 hover:text-green-700 md:hidden"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductFilters
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onFilterChange={() => {}}
      />
    </PageWrapper>
  );
};

export default ShopPage;