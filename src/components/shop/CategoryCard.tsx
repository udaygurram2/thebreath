import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../../data/shop';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/shop/${category.id}`}
        className="block group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-medium mb-1">{category.name}</h3>
          <p className="text-sm text-white/80">{category.productCount} Products</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;