import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Truck, MapPin } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle the payment processing
    // For now, we'll just simulate a successful order
    
    toast.success('Order placed successfully!');
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <PageWrapper>
        <div className="min-h-screen pt-24 bg-neutral-50">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
              <p className="text-neutral-600 mb-8">Add some items to your cart before checking out.</p>
              <Button variant="primary" onClick={() => navigate('/shop')}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24 bg-neutral-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div>
              <h1 className="text-2xl font-medium mb-8">Checkout</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <MapPin size={20} className="text-green-600 mr-2" />
                    <h2 className="text-lg font-medium">Shipping Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <CreditCard size={20} className="text-green-600 mr-2" />
                    <h2 className="text-lg font-medium">Payment Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">CVC</label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="primary" fullWidth>
                  Place Order (${getTotal().toFixed(2)})
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-neutral-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg mt-4 pt-4 border-t">
                    <span>Total</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Truck size={16} className="mr-2" />
                    <span>Free shipping on all orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CheckoutPage;