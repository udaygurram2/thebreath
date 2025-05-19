import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Send, Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';
import content from '../../data/content';

const Footer: React.FC = () => {
  const { footer, brand, navigation } = content;
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xldbvbww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          type: 'newsletter_subscription'
        })
      });

      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
        setTimeout(() => setSubscribeStatus('idle'), 3000);
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };
  
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf size={24} className="text-green-400" />
              <span className="text-xl font-semibold">{brand.name}</span>
            </div>
            <p className="text-neutral-300 mb-4 text-sm md:text-base">{footer.tagline}</p>
            <div className="flex space-x-4">
              {footer.socialMedia?.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-green-400 transition-colors"
                  aria-label={social.platform}
                >
                  {social.platform === 'Instagram' && <Instagram size={20} />}
                  {social.platform === 'Facebook' && <Facebook size={20} />}
                  {social.platform === 'Pinterest' && <Pinterest size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className="text-neutral-300 hover:text-green-400 transition-colors text-sm md:text-base"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                {footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-neutral-300 hover:text-green-400 transition-colors text-sm md:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">{footer.newsletter.title}</h4>
            <p className="text-neutral-300 mb-4">{footer.newsletter.description}</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.placeholder}
                className="px-4 py-2 rounded-l-md bg-neutral-800 border-neutral-700 text-white w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 rounded-r-md px-4 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={subscribeStatus === 'submitting'}
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Failed to subscribe. Please try again.</p>
            )}
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 text-center text-neutral-400 text-sm">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;