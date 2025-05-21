import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../data/shop';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Link to={`/shop/product/${product.id}`} className="block relative group">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {product.newArrival && (
          <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-sm rounded">
            New
          </span>
        )}
        {product.stockStatus === 'low_stock' && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
            Low Stock
          </span>
        )}
      </Link>

      <div className="p-4">
        <Link to={`/shop/product/${product.id}`}>
          <h3 className="text-lg font-medium mb-2 hover:text-green-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-medium text-green-600">
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
        <Button
          variant="primary"
          fullWidth
          disabled={product.stockStatus === 'out_of_stock'}
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;