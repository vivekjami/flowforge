import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Brain, BarChart3 } from 'lucide-react';
import WorkflowDiagram from './WorkflowDiagram';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-blue-600/10 to-purple-600/10 animate-gradient"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">AI-Powered Workflow Intelligence</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Where Process Meets{' '}
              <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intelligence
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              FlowForge automatically discovers, optimizes, and predicts workflow bottlenecks using AI. 
              Transform chaotic processes into intelligent, self-optimizing workflows.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">40%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2-3 Days</div>
                <div className="text-sm text-gray-600">Early Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">200+</div>
                <div className="text-sm text-gray-600">Integrations</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 text-center lg:text-left"
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                {['TechFlow', 'DataCore', 'ScaleUp', 'Rompit'].map((company) => (
                  <div key={company} className="text-lg font-semibold text-gray-400">
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <WorkflowDiagram />
            
            {/* Floating Demo Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200/50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Live Demo</div>
                  <div className="text-xs text-gray-600">See AI in action</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;