import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Brain, BarChart3, Users } from 'lucide-react';
import WorkflowAnimation from './WorkflowAnimation';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const stats = [
    { value: '10,000+', label: 'Teams Trust Us', icon: Users },
    { value: '40%', label: 'Time Saved', icon: Zap },
    { value: '99.9%', label: 'Uptime SLA', icon: BarChart3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-electric-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-electric-600/10 to-purple-600/10 animate-gradient-shift" 
             style={{ backgroundSize: '400% 400%' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-electric-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-electric-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-primary-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Beta Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-3 mb-8 shadow-glass"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-primary-600" />
              </motion.div>
              <span className="text-sm font-semibold text-primary-700">AI-Powered Workflow Intelligence</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                BETA
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-inter font-bold leading-tight mb-8"
            >
              Where Process Meets{' '}
              <motion.span 
                className="bg-gradient-to-r from-primary-600 via-electric-600 to-purple-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Intelligence
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-system max-w-2xl"
            >
              FlowForge uses AI to automatically discover, optimize, and predict workflow bottlenecks. 
              Transform chaotic processes into intelligent, self-optimizing workflows that scale with your team.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-electric-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-premium hover:shadow-glow-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Request Beta Access</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-electric-600 to-purple-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:shadow-premium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5 group-hover:text-primary-600 transition-colors duration-200" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-primary-600 mr-2" />
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Workflow Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <WorkflowAnimation />
            
            {/* Floating Beta Access Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-premium border border-white/20 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-electric-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Join 10,000+ Teams</div>
                  <div className="text-xs text-gray-600">Request beta access today</div>
                </div>
              </div>
              <motion.div
                className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-600 to-electric-600 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1.5, delay: 2.5 }}
                />
              </motion.div>
              <div className="text-xs text-gray-500 mt-1">78% capacity reached</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-primary-600 to-electric-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;