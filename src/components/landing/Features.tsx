'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, TrendingUp, Zap, Activity, Shield, Users } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

const features = [
  {
    icon: Brain,
    title: 'AI Process Discovery',
    description: 'Automatically detects workflows from tool usage patterns with zero manual setup required.',
    benefits: ['Zero manual setup', 'Discovers hidden inefficiencies', 'Continuous learning'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'ML models predict process failures 2-3 days in advance with 85%+ accuracy.',
    benefits: ['Prevent bottlenecks', 'Optimize resources', 'Improve productivity'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Smart Integrations',
    description: 'Connect 200+ tools with intelligent automation and real-time synchronization.',
    benefits: ['One-click connections', 'Intelligent routing', 'Real-time sync'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Live workflow health scores and performance metrics with automated alerting.',
    benefits: ['Instant insights', 'Team tracking', 'Automated alerts'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC2 compliant with end-to-end encryption and enterprise-grade security.',
    benefits: ['SOC2 compliance', 'End-to-end encryption', 'Audit logs'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration with conflict resolution and shared workflow templates.',
    benefits: ['Real-time editing', 'Conflict resolution', 'Shared templates'],
    color: 'from-pink-500 to-rose-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Features for{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FlowForge combines cutting-edge AI with intuitive design to transform how your team works.
              Every feature is built to save time, reduce errors, and accelerate productivity.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Integration showcase */}
        <FadeIn delay={0.8}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Integrates with your favorite tools
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {[
                'Slack', 'GitHub', 'Notion', 'Jira', 'Figma', 'Linear', 'Zapier', 'Airtable'
              ].map((tool) => (
                <div key={tool} className="text-lg font-medium text-gray-700">
                  {tool}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              + 200 more integrations available
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}