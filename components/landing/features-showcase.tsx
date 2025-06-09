'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Zap, 
  Network, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield
} from 'lucide-react'

const features = [
  {
    id: 'discovery',
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Process Discovery Engine',
    description: 'Automatically detects workflows from tool usage patterns with ML-powered analysis',
    benefits: [
      'Smart Workflow Mapping',
      'Bottleneck Prediction (72hrs ahead)',
      'ROI-based Optimization Recommendations',
      'Pattern Recognition Across Teams'
    ],
    demo: 'Live workflow detection from your connected tools',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'orchestration',
    icon: <Zap className="w-8 h-8" />,
    title: 'Real-Time Workflow Orchestration',
    description: 'Visual flow builder with intelligent automation and live collaboration features',
    benefits: [
      'Drag-and-Drop Interface',
      'Multi-user Real-time Editing',
      'Context-aware Smart Triggers',
      'Performance Analytics Dashboard'
    ],
    demo: 'Interactive workflow builder with 50+ integrations',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'integration',
    icon: <Network className="w-8 h-8" />,
    title: 'Universal Integration Hub',
    description: 'Connect any tool with 200+ pre-built connectors and intelligent data sync',
    benefits: [
      'API Connector for Any Tool',
      'Smart Webhook Routing',
      'Bi-directional Data Sync',
      'End-to-end Encryption'
    ],
    demo: 'One-click integration with Slack, GitHub, Notion',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Predictive Analytics Dashboard',
    description: 'AI-generated insights with team productivity analysis and executive reporting',
    benefits: [
      'Workflow Health Scoring',
      'Team Efficiency Analysis',
      'Cost Impact Calculations',
      'One-click Executive Reports'
    ],
    demo: 'Real-time dashboard with predictive insights',
    color: 'from-orange-500 to-red-600'
  }
]

export function FeaturesShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [activeFeature, setActiveFeature] = useState('discovery')

  const currentFeature = features.find(f => f.id === activeFeature) || features[0]

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            Core Features
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Built for the <span className="gradient-text">Future of Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature designed with AI-first principles to create the most intelligent 
            workflow platform ever built
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id 
                      ? 'glass border-blue-500/50 glow' 
                      : 'glass-dark border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                        <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {activeFeature === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        <div className="space-y-2 mb-4">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="glass" size="sm" className="w-full">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Try Interactive Demo
                        </Button>
                      </CardContent>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-8"
          >
            <Card className="glass border-blue-500/20 overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">{currentFeature.title}</CardTitle>
                  <Badge variant="glow">Live Demo</Badge>
                </div>
                <p className="text-gray-400">{currentFeature.demo}</p>
              </CardHeader>
              <CardContent>
                {/* Demo visualization based on active feature */}
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>

                  {activeFeature === 'discovery' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <Brain className="w-4 h-4" />
                        AI analyzing workflow patterns...
                      </div>
                      <div className="space-y-2">
                        {['Slack → GitHub integration detected', 'Bottleneck in code reviews identified', 'Optimization suggestion generated'].map((step, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.5 }}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {step}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 'orchestration' && (
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {['Trigger', 'Process', 'Action'].map((step, idx) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.2 }}
                          className="glass-dark rounded-lg p-3 flex flex-col items-center justify-center"
                        >
                          <Zap className="w-6 h-6 text-purple-400 mb-2" />
                          <span className="text-sm text-white">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeFeature === 'integration' && (
                    <div className="flex items-center justify-center h-full">
                      <div className="grid grid-cols-3 gap-8 items-center">
                        {['Slack', 'FlowForge', 'GitHub'].map((tool, idx) => (
                          <motion.div
                            key={tool}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.3 }}
                            className="text-center"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                              <Network className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm text-gray-300">{tool}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 'analytics' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: 'Health Score', value: '94%', color: 'text-green-400' },
                          { label: 'Efficiency', value: '+73%', color: 'text-blue-400' },
                          { label: 'Savings', value: '$1.2M', color: 'text-purple-400' }
                        ].map((metric, idx) => (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            className="text-center"
                          >
                            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="text-xs text-gray-400">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-orange-400">
                        <TrendingUp className="w-4 h-4" />
                        Bottleneck predicted in 48 hours
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4" />
                    Enterprise-grade security
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    Real-time updates
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}