'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react'
import { WorkflowAnimation } from './workflow-animation'
import { ParticleBackground } from './particle-background'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Beta badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="glow" className="text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Limited Beta Access • 2,847 on waitlist
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Where Process
                <br />
                <span className="gradient-text">Meets Intelligence</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Transform chaotic business processes into intelligent, self-optimizing workflows. 
                <span className="text-blue-400 font-semibold"> AI predicts bottlenecks 72 hours before they happen.</span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 text-sm"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">73%</div>
                <div className="text-gray-400">Faster Workflows</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">$2.9T</div>
                <div className="text-gray-400">Saved Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">200+</div>
                <div className="text-gray-400">Integrations</div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="gradient" 
                size="xl" 
                className="group glow-strong"
              >
                <Brain className="w-5 h-5 mr-2" />
                Request Beta Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                className="group"
              >
                <Zap className="w-5 h-5 mr-2" />
                Watch 2-Min Demo
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400"
            >
              Trusted by teams at <span className="text-white font-semibold">Microsoft, Stripe, Linear, Notion</span> and 10,000+ others
            </motion.div>
          </motion.div>

          {/* Right side - Workflow Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <WorkflowAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}