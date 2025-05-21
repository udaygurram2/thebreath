import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';
import PageWrapper from '../../components/layout/PageWrapper';
import ProductCard from '../../components/shop/ProductCard';
import Button from '../../components/ui/Button';
import { getProductById, getRelatedProducts } from '../../data/shop';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(productId || '');
  const relatedProducts = getRelatedProducts(productId || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart`);
    // Implement cart functionality
  };

  return (
    <PageWrapper>
      <div className="pt-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <h1 className="text-3xl font-medium mb-4">{product.name}</h1>
                <div className="text-2xl text-green-600 font-medium mb-4">
                  ${product.price.toFixed(2)}
                </div>
                <p className="text-neutral-600 mb-6">{product.description}</p>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Specifications:</h3>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="text-neutral-600">• {spec}</li>
                    ))}
                  </ul>
                </div>

                {/* Stock Status */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    product.stockStatus === 'in_stock' ? 'bg-green-100 text-green-800' :
                    product.stockStatus === 'low_stock' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stockStatus === 'in_stock' ? 'In Stock' :
                     product.stockStatus === 'low_stock' ? 'Low Stock' :
                     'Out of Stock'}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 border rounded-l-md hover:bg-neutral-100"
                  >
                    <Minus size={20} />
                  </button>
                  <div className="px-4 py-2 border-t border-b min-w-[60px] text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 border rounded-r-md hover:bg-neutral-100"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  disabled={product.stockStatus === 'out_of_stock'}
                  className="mb-4"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </Button>
              </motion.div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="py-12">
                <h2 className="text-2xl font-medium mb-6">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductDetailPage;