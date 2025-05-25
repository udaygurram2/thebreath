import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import CategoryCard from '../../components/shop/CategoryCard';
import ProductCard from '../../components/shop/ProductCard';
import ProductFilters from '../../components/shop/ProductFilters';
import { categories, products } from '../../data/shop';

const ShopPage: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageWrapper>
      <div className="pt-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8 sticky top-20 z-30">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              </div>
              <button
                onClick={() => setIsFiltersOpen(true)}
                className="md:hidden flex items-center justify-center px-4 py-2 border rounded-md text-green-600 hover:bg-green-50"
              >
                <Filter size={20} className="mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="sticky top-40">
                <ProductFilters
                  isOpen={true}
                  onClose={() => {}}
                  onFilterChange={() => {}}
                />
              </div>
            </div>

            {/* Products */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-neutral-600">No products found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <ProductFilters
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onFilterChange={() => {}}
      />
    </PageWrapper>
  );
};

export default ShopPage;