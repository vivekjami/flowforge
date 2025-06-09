import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'API', href: '#api' },
      { name: 'Security', href: '#security' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Partners', href: '#partners' },
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Templates', href: '#templates' },
      { name: 'Status', href: '#status' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-red-500' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'San Francisco, CA' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'hello@flowforge.ai' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-electric-600/20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-4xl md:text-5xl font-inter font-bold mb-6">
              Stay ahead of the{' '}
              <span className="bg-gradient-to-r from-primary-400 to-electric-400 bg-clip-text text-transparent">
                AI revolution
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Get exclusive insights on AI-powered workflow optimization, early access to new features, 
              and proven strategies from industry leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-2xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-electric-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Join 50,000+ professionals. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-600 to-electric-600 rounded-2xl flex items-center justify-center shadow-glow"
                >
                  <Zap className="w-7 h-7 text-white" />
                </motion.div>
                <span className="text-3xl font-inter font-bold bg-gradient-to-r from-primary-400 to-electric-400 bg-clip-text text-transparent">
                  FlowForge
                </span>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                The world's first AI-powered workflow intelligence platform. 
                Transform chaotic processes into intelligent, self-optimizing workflows 
                that scale with your business.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <contact.icon className="w-5 h-5 text-primary-400" />
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-electric-600 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-6 text-lg">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-all duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FlowForge AI, Inc. All rights reserved. Built with ❤️ by{' '}
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="text-primary-400 hover:underline font-medium"
              >
                Vivek Jami
              </motion.a>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;