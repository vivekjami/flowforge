'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Check, 
  Zap, 
  Crown, 
  Rocket, 
  ArrowRight,
  Sparkles,
  Shield,
  Headphones
} from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for solo entrepreneurs and small teams getting started',
    features: [
      '5 workflows',
      '100 tasks/month',
      'Basic integrations (Slack, GitHub)',
      'Community support',
      'Workflow templates',
      'Basic analytics'
    ],
    cta: 'Start Free',
    popular: false,
    icon: <Zap className="w-6 h-6" />,
    color: 'from-gray-600 to-gray-700',
    borderColor: 'border-gray-600/30'
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per user/month',
    description: 'For growing teams that need advanced AI insights and automation',
    features: [
      'Unlimited workflows',
      'Unlimited tasks',
      'All integrations (200+)',
      'AI bottleneck prediction',
      'Real-time collaboration',
      'Advanced analytics',
      'Priority support',
      'Custom workflow templates',
      'Team performance insights'
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
    icon: <Crown className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-600',
    borderColor: 'border-blue-500/50'
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per user/month',
    description: 'For large organizations requiring enterprise-grade security and compliance',
    features: [
      'Everything in Professional',
      'SSO & SAML integration',
      'Advanced security controls',
      'SOC2 compliance',
      'Dedicated success manager',
      'Custom integrations',
      'White-label options',
      'SLA guarantee (99.9%)',
      'Advanced reporting & analytics',
      'Audit logs & compliance'
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/50'
  }
]

const faqs = [
  {
    question: 'How does the AI workflow analysis work?',
    answer: 'Our AI continuously monitors your connected tools and analyzes usage patterns to identify bottlenecks, inefficiencies, and optimization opportunities. It learns from your team\'s behavior to provide increasingly accurate predictions.'
  },
  {
    question: 'Can I integrate with custom tools and APIs?',
    answer: 'Yes! FlowForge supports custom integrations through our API connector. Enterprise plans include dedicated support for building custom integrations specific to your needs.'
  },
  {
    question: 'What happens to my data?',
    answer: 'Your data is encrypted end-to-end and stored securely. We never share your data with third parties and you maintain full ownership. Enterprise plans include additional compliance certifications.'
  },
  {
    question: 'How accurate are the bottleneck predictions?',
    answer: 'Our AI achieves 94% accuracy in predicting workflow bottlenecks 72 hours in advance. The system improves over time as it learns your specific workflow patterns.'
  }
]

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Workflow Intelligence</span> Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free, scale as you grow. All plans include our core AI features 
            with no hidden fees or surprise charges.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="gradient" className="px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`glass ${plan.borderColor} ${plan.popular ? 'glow scale-105' : ''} transition-all duration-300 hover:scale-105 h-full`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 ml-2">/{plan.period}</span>}
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "gradient" : "glass"} 
                    size="lg" 
                    className="w-full group"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="glass-dark border-green-500/20 text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm">SOC2 compliant with end-to-end encryption</p>
            </CardContent>
          </Card>
          
          <Card className="glass-dark border-blue-500/20 text-center">
            <CardContent className="p-6">
              <Headphones className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Expert support when you need it most</p>
            </CardContent>
          </Card>
          
          <Card className="glass-dark border-purple-500/20 text-center">
            <CardContent className="p-6">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">ROI Guarantee</h3>
              <p className="text-gray-400 text-sm">73% efficiency gain or money back</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-dark border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}