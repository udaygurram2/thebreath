import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import ProductCard from '../../components/shop/ProductCard';
import ProductFilters from '../../components/shop/ProductFilters';
import { categories, getProductsByCategory } from '../../data/shop';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const category = categories.find(c => c.id === categoryId);
  const products = getProductsByCategory(categoryId || '');

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <PageWrapper>
      <div className="pt-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="py-8">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">{category.name}</h1>
            <p className="text-neutral-600">{category.productCount} Products</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24">
                <ProductFilters
                  isOpen={true}
                  onClose={() => {}}
                  onFilterChange={() => {}}
                />
              </div>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFiltersOpen(true)}
              className="md:hidden flex items-center text-green-600 hover:text-green-700"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <ProductFilters
          isOpen={isFiltersOpen}
          onClose={() => setIsFiltersOpen(false)}
          onFilterChange={() => {}}
        />
      </div>
    </PageWrapper>
  );
};

export default CategoryPage;