import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface ProductFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ isOpen, onClose, onFilterChange }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-40 overflow-y-auto"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Filter size={20} className="mr-2" />
            <h2 className="text-xl font-medium">Filters</h2>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="200"
                className="w-full"
                onChange={(e) => onFilterChange({ price: e.target.value })}
              />
              <div className="flex justify-between text-sm text-neutral-600">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-medium mb-3">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                In Stock
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Low Stock
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Out of Stock
              </label>
            </div>
          </div>

          {/* New Arrivals */}
          <div>
            <h3 className="font-medium mb-3">Product Status</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                New Arrivals
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Featured Items
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFilters;