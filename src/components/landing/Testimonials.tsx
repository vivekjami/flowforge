'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                10,000+ Teams
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how FlowForge is transforming workflows for teams at leading companies worldwide.
            </p>
          </div>
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-sm text-gray-600">Active Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="text-sm text-gray-600">Efficiency Increase</div>
            </div>
          </div>
        </FadeIn>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-blue-600">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Company logos */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {[
                'TechFlow Solutions',
                'DataCore',
                'ScaleUp Industries',
                'Innovation Labs',
                'Future Systems',
                'Digital Dynamics'
              ].map((company) => (
                <div key={company} className="text-lg font-medium text-gray-700">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}