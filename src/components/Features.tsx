import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, Workflow, Shield, Globe, Eye, Cpu, Network } from 'lucide-react';

const Features = () => {
  const [inView, setInView] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
      description: 'Automatically detects workflows from tool usage patterns and identifies optimization opportunities with machine learning.',
      color: 'from-purple-500 to-purple-700',
      stats: '40% faster discovery',
      preview: 'Workflow mapping in progress...',
      benefits: ['Zero manual setup', 'Pattern recognition', 'Smart recommendations'],
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'Live visibility into all workflow processes with instant alerts when bottlenecks are detected.',
      color: 'from-blue-500 to-blue-700',
      stats: '99.9% uptime monitoring',
      preview: 'All systems operational',
      benefits: ['Instant notifications', 'Performance tracking', 'Health scoring'],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'ML models predict process failures 2-3 days in advance with detailed ROI calculations and impact analysis.',
      color: 'from-green-500 to-green-700',
      stats: '2-3 days early warning',
      preview: 'Analyzing trends...',
      benefits: ['Proactive alerts', 'ROI calculations', 'Trend analysis'],
    },
    {
      icon: Workflow,
      title: 'Visual Flow Builder',
      description: 'Intuitive drag-and-drop interface with 200+ pre-built integrations and advanced conditional logic.',
      color: 'from-orange-500 to-orange-700',
      stats: '200+ integrations',
      preview: 'Building workflow...',
      benefits: ['Drag & drop', 'Pre-built templates', 'Conditional logic'],
    },
    {
      icon: Zap,
      title: 'Auto-Optimization',
      description: 'Intelligent automation that continuously learns from team behavior and automatically optimizes workflows.',
      color: 'from-yellow-400 to-orange-500',
      stats: '50% faster execution',
      preview: 'Optimizing performance...',
      benefits: ['Self-learning', 'Auto-scaling', 'Performance tuning'],
    },
    {
      icon: Network,
      title: 'Universal Integration',
      description: 'Connect any tool with smart webhook routing, bi-directional data sync, and conflict resolution.',
      color: 'from-indigo-500 to-indigo-700',
      stats: 'Zero maintenance',
      preview: 'Syncing data...',
      benefits: ['Smart routing', 'Conflict resolution', 'Real-time sync'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-6">
            Intelligent Workflow{' '}
            <span className="bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
              Automation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform chaotic business processes into intelligent, self-optimizing workflows 
            with our AI-powered platform that learns and adapts to your team's unique patterns.
          </p>
        </motion.div>

        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-primary-50 to-electric-50 border-2 border-primary-200 shadow-premium'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-2`}></div>
                        {feature.stats}
                      </div>
                      
                      {activeFeature === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-green-500 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-premium border border-gray-700">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-gray-400 text-sm font-mono">FlowForge AI Terminal</div>
              </div>

              {/* Preview Content */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className={`w-8 h-8 bg-gradient-to-r ${features[activeFeature].color} rounded-lg flex items-center justify-center`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <features[activeFeature].icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <div className="text-green-400 font-mono text-sm">
                    {features[activeFeature].preview}
                  </div>
                </div>

                <div className="space-y-2">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-gray-300 text-sm"
                    >
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Processing</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${features[activeFeature].color} rounded-full`}
                      initial={{ width: '0%' }}
                      animate={{ width: '87%' }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-electric-500 rounded-2xl flex items-center justify-center shadow-glow"
            >
              <Cpu className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-gray-100 hover:shadow-glow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="inline-flex items-center bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-2`}></div>
                  {feature.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-electric-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-premium hover:shadow-glow-lg transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;