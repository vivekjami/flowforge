'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Sparkles, Zap, Brain } from 'lucide-react'
import FloatingElements from '@/components/animations/FloatingElements'
import FadeIn from '@/components/animations/FadeIn'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Trusted by 10,000+ teams worldwide
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Where Process Meets{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform chaotic business processes into intelligent, self-optimizing workflows. 
            FlowForge uses AI to predict bottlenecks, automate decisions, and accelerate your team's productivity.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="xl" 
              variant="gradient"
              className="group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="xl" 
              variant="ghost"
              className="group border border-gray-300 hover:border-gray-400"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Hours Saved Weekly', value: '8+' },
              { label: 'Process Efficiency', value: '40%' },
              { label: 'Teams Using FlowForge', value: '10K+' },
              { label: 'Customer Satisfaction', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Workflow visualization */}
        <FadeIn delay={0.7}>
          <div className="mt-16 relative">
            <div className="flex items-center justify-center space-x-8">
              {/* Workflow nodes */}
              {[
                { icon: Brain, label: 'AI Analysis', color: 'from-purple-500 to-pink-500' },
                { icon: Zap, label: 'Automation', color: 'from-blue-500 to-cyan-500' },
                { icon: Sparkles, label: 'Optimization', color: 'from-green-500 to-emerald-500' },
              ].map((node, index) => (
                <motion.div
                  key={node.label}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center shadow-lg`}>
                    <node.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
                    {node.label}
                  </div>
                  
                  {/* Connection lines */}
                  {index < 2 && (
                    <motion.div
                      className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 1 + index * 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}