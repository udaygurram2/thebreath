import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Send, Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';
import content from '../../data/content';

const Footer: React.FC = () => {
  const { footer, brand, navigation } = content;
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf size={24} className="text-green-400" />
              <span className="text-xl font-semibold">{brand.name}</span>
            </div>
            <p className="text-neutral-300 mb-4">{footer.tagline}</p>
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
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-neutral-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-neutral-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">{footer.newsletter.title}</h4>
            <p className="text-neutral-300 mb-4">{footer.newsletter.description}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="px-4 py-2 rounded-l-md bg-neutral-800 border-neutral-700 text-white w-full focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 rounded-r-md px-4 flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
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