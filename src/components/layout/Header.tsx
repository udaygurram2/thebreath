import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import content from '../../data/content';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-3'
      } bg-white`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="relative z-50">
            <img 
              src="https://res.cloudinary.com/udaygurram/image/upload/c_crop,ar_16:9,e_improve,e_sharpen/v1747667558/WhatsApp_Image_2025-04-30_at_10.22.35__1_-removebg-preview_boef7k.png"
              alt="Breathe Logo"
              className="w-24 md:w-32 transition-opacity"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {content.navigation.links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-green-600'
                      : 'text-neutral-700 hover:text-green-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-neutral-700 hover:text-green-600" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <NavLink to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-neutral-700" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </NavLink>
            <button
              className="relative z-50 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-neutral-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-neutral-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-20"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-6">
                {content.navigation.links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-lg font-medium ${
                        isActive
                          ? 'text-green-600'
                          : 'text-neutral-700 hover:text-green-600'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;