'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star, Zap } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { PRICING_TIERS } from '@/lib/constants'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises. 
              Cancel anytime with our 30-day money-back guarantee.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`h-full ${tier.popular ? 'border-blue-500 border-2 shadow-xl' : 'border-gray-200'} bg-white`}>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {tier.description}
                    </CardDescription>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${tier.price}
                      </span>
                      {tier.price > 0 && (
                        <span className="text-gray-600 ml-2">/user/month</span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className={`w-full mb-6 ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : ''}`}
                      variant={tier.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {tier.cta}
                      {tier.popular && <Zap className="ml-2 w-4 h-4" />}
                    </Button>
                    
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {tier.limitations.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">Limitations:</p>
                        <ul className="space-y-1">
                          {tier.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="text-sm text-gray-500">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* FAQ section */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {[
                {
                  question: 'Can I change plans anytime?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  question: 'Is there a free trial?',
                  answer: 'Yes, we offer a 14-day free trial of our Pro plan with no credit card required.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and can arrange invoicing for enterprise customers.',
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}