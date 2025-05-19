import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import content from '../../data/content';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          subject: '',
          message: ''
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
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
      
      {formStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}
      
      {formStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
        >
          There was a problem sending your message. Please try again.
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {content.contact.formFields.map((field) => (
            field.type !== 'textarea' ? (
              <div key={field.id}>
                <label htmlFor={field.id} className="form-label">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formState[field.id as keyof typeof formState] || ''}
                  onChange={handleChange}
                  className="form-input"
                  required={field.required}
                />
              </div>
            ) : null
          ))}
        </div>
        
        {content.contact.formFields
          .filter(field => field.type === 'textarea')
          .map(field => (
            <div key={field.id} className="mb-6">
              <label htmlFor={field.id} className="form-label">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <textarea
                id={field.id}
                value={formState[field.id as keyof typeof formState] || ''}
                onChange={handleChange}
                className="form-input min-h-[150px]"
                required={field.required}
              ></textarea>
            </div>
          ))}
        
        <Button
          type="submit"
          variant="primary"
          disabled={formStatus === 'submitting'}
          fullWidth
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;