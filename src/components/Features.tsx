import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, Workflow, Shield, Globe } from 'lucide-react';

const Features = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Process Discovery',
      description: 'Automatically detects workflows from tool usage patterns and identifies optimization opportunities.',
      color: 'from-purple-500 to-purple-700',
      stats: '40% faster discovery',
    },
    {
      icon: Zap,
      title: 'Real-Time Orchestration',
      description: 'Live collaboration with multiple users editing workflows simultaneously and smart triggers.',
      color: 'from-yellow-400 to-orange-500',
      stats: '50% faster deployment',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'ML models predict process failures 2-3 days in advance with ROI calculations.',
      color: 'from-blue-500 to-blue-700',
      stats: '2-3 days early warning',
    },
    {
      icon: Workflow,
      title: 'Visual Flow Builder',
      description: 'Drag-and-drop interface with 200+ pre-built integrations and conditional logic.',
      color: 'from-green-500 to-green-700',
      stats: '200+ integrations',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'OAuth 2.0 with end-to-end encryption, audit trails, and compliance-ready features.',
      color: 'from-red-500 to-red-700',
      stats: 'SOC2 compliant',
    },
    {
      icon: Globe,
      title: 'Universal Integration',
      description: 'Connect any tool with smart webhook routing, data sync, and conflict resolution.',
      color: 'from-indigo-500 to-indigo-700',
      stats: 'Zero maintenance',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligent Workflow{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Automation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform chaotic business processes into intelligent, self-optimizing workflows 
            with our AI-powered platform that learns and adapts to your team's needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-2`}></div>
                  {feature.stats}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${feature.color} rounded-full opacity-20`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;