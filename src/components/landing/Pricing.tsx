"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for solo entrepreneurs and small teams getting started",
      icon: Zap,
      color: "from-gray-500 to-gray-600",
      popular: false,
      features: [
        "5 workflows",
        "100 tasks per month",
        "3 integrations",
        "Basic AI insights",
        "Email support",
        "Community access"
      ],
      limitations: [
        "No predictive analytics",
        "Limited automation triggers",
        "Basic reporting"
      ]
    },
    {
      name: "Professional",
      price: "$19",
      period: "per user/month",
      description: "Advanced features for growing teams and power users",
      icon: Star,
      color: "from-indigo-500 to-blue-500",
      popular: true,
      features: [
        "Unlimited workflows",
        "Unlimited tasks",
        "200+ integrations",
        "Advanced AI insights",
        "Predictive analytics",
        "Real-time collaboration",
        "Custom automation triggers",
        "Priority support",
        "Advanced reporting",
        "Team management",
        "API access",
        "Webhook support"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Enterprise-grade security and compliance for large organizations",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      popular: false,
      features: [
        "Everything in Professional",
        "SSO & SAML integration",
        "Advanced security controls",
        "SOC2 compliance",
        "Audit logs",
        "Custom integrations",
        "Dedicated success manager",
        "24/7 phone support",
        "SLA guarantees",
        "On-premise deployment",
        "Custom training",
        "White-label options"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. Start free, scale as you grow, 
            and unlock the full power of AI workflow intelligence.
          </p>
          
          {/* Money-back guarantee */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <Card className={`h-full ${plan.popular ? 'glass border-2 border-indigo-200 shadow-2xl' : 'glass border-0 shadow-lg'} hover-lift hover-glow transition-all duration-500`}>
                <CardHeader className="text-center space-y-4 pb-8">
                  {/* Icon */}
                  <div className="mx-auto">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Plan name and price */}
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        {plan.price !== "Free" && plan.price !== "Custom" && (
                          <span className="text-gray-600">/month</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {plan.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* CTA Button */}
                  <Button 
                    className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl animate-pulse-glow' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.price === "Free" ? "Start Free" : plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>

                  {/* Features list */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-900 mb-3">
                      Everything included:
                    </div>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Limitations for free plan */}
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-600 mb-3">
                          Limitations:
                        </div>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                              <div className="w-1 h-1 bg-gray-400 rounded-full" />
                            </div>
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  q: "Is there a setup fee?",
                  a: "No setup fees, ever. You only pay for your chosen plan, and we include onboarding support."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and can arrange invoicing for enterprise customers."
                },
                {
                  q: "Do you offer discounts for nonprofits?",
                  a: "Yes! We offer 50% discounts for qualified nonprofits and educational institutions."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <div className="font-semibold text-gray-900">{faq.q}</div>
                  <div className="text-gray-600 text-sm">{faq.a}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Still have questions? Our team is here to help.
              </p>
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}