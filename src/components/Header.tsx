import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              FlowForge
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Pricing', 'Demo', 'Docs'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 py-4"
          >
            <nav className="flex flex-col space-y-4">
              {['Features', 'Pricing', 'Demo', 'Docs'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-primary-600 font-medium px-4 py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-primary-600 font-medium text-left">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                  Start Free Trial
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;