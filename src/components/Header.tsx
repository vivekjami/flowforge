import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

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

  const navItems = [
    { name: 'Product', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-premium' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-primary-600 to-electric-500 rounded-xl flex items-center justify-center shadow-glow"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
              </motion.div>
            </div>
            <span className="text-2xl font-inter font-bold bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
              FlowForge
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-electric-600 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-electric-600 text-white px-6 py-3 rounded-xl font-semibold shadow-premium hover:shadow-glow-lg transition-all duration-300"
            >
              <span className="relative z-10">Request Beta Access</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-electric-600 to-primary-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-2xl shadow-premium"
            >
              <nav className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    href="#"
                    className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-gray-200 space-y-3"
                >
                  <button className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2">
                    Sign In
                  </button>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-electric-600 text-white px-6 py-3 rounded-xl font-semibold shadow-premium">
                    Request Beta Access
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;