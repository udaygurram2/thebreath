import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import content from '../../data/content';

const BookingForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: '',
    referral: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xldbvbww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          details: '',
          referral: ''
        });
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium mb-4 text-center"
          >
            Book Your Consultation
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-neutral-600 mb-8"
          >
            {content.book.intro}
          </motion.p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
              >
                Thank you for booking a consultation! We'll contact you within 24 hours to confirm your appointment.
              </motion.div>
            )}
            
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
              >
                There was a problem with your booking. Please try again.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.book.formFields.map((field) => (
                  <div key={field.id} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                    <label htmlFor={field.id} className="form-label">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    
                    {field.type === 'text' || field.type === 'email' || field.type === 'tel' ? (
                      <input
                        type={field.type}
                        id={field.id}
                        value={formState[field.id as keyof typeof formState] || ''}
                        onChange={handleChange}
                        className="form-input"
                        required={field.required}
                      />
                    ) : field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        value={formState[field.id as keyof typeof formState] || ''}
                        onChange={handleChange}
                        className="form-input min-h-[150px]"
                        required={field.required}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={field.id}
                        value={formState[field.id as keyof typeof formState] || ''}
                        onChange={handleChange}
                        className="form-input"
                        required={field.required}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map((option, i) => (
                          <option key={i} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : null}
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={formStatus === 'submitting'}
                  fullWidth
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Book Your Consultation'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;