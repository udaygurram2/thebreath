import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, products } from '../../data/shop';
import Button from '../ui/Button';

const ShopSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredCategories = categories.slice(0, 4);
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-medium"
          >
            Shop Our Collection
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={() => navigate('/shop')}
              className="flex items-center"
            >
              View All
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => navigate(`/shop/${category.id}`)}
            >
              <div className="aspect-square">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-medium text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/shop/product/${product.id}`)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className={`text-sm ${
                    product.stockStatus === 'in_stock' ? 'text-green-600' :
                    product.stockStatus === 'low_stock' ? 'text-orange-500' :
                    'text-red-500'
                  }`}>
                    {product.stockStatus === 'in_stock' ? 'In Stock' :
                     product.stockStatus === 'low_stock' ? 'Low Stock' :
                     'Out of Stock'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;