import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Cart drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingBag size={24} className="text-green-600 mr-2" />
                <h2 className="text-xl font-medium">Your Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Cart items */}
            {items.length > 0 ? (
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-green-600">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-100 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-100 rounded"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 text-red-500 rounded"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-neutral-500">
                <ShoppingBag size={48} className="mb-4" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-sm text-center">Add some plants to your cart and they will appear here.</p>
              </div>
            )}
            
            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-medium">${getTotal().toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="text"
                    fullWidth
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;