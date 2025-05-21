import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import Button from '../../components/ui/Button';

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, email } = location.state || {};

  if (!orderId) {
    navigate('/shop');
    return null;
  }

  return (
    <PageWrapper>
      <div className="pt-24 pb-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 mb-6 flex justify-center"
            >
              <CheckCircle size={64} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-medium mb-4"
            >
              Thank You for Your Order!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <p className="text-lg mb-4">
                Your order has been successfully placed and is being processed.
              </p>
              <p className="text-neutral-600 mb-4">
                Order Reference: <span className="font-medium">{orderId}</span>
              </p>
              <p className="text-neutral-600">
                We've sent a confirmation email to <span className="font-medium">{email}</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-neutral-100 rounded-lg p-6 mb-8"
            >
              <h2 className="text-xl font-medium mb-4">What's Next?</h2>
              <p className="text-neutral-600">
                Our team will review your order and contact you within 24 hours to confirm
                shipping details and estimated delivery time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-x-4"
            >
              <Button
                variant="primary"
                onClick={() => navigate('/shop')}
              >
                Continue Shopping
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ThankYouPage;