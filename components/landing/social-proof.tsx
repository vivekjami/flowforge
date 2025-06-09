'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'TechFlow Solutions',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'FlowForge reduced our process management time by 73%. The AI predictions are incredibly accurate - we prevented 3 major bottlenecks last month alone.',
    rating: 5,
    metric: '73% time saved'
  },
  {
    name: 'Alex Rodriguez',
    role: 'Engineering Manager',
    company: 'DataCore Systems',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The real-time workflow orchestration is game-changing. Our deployment cycles are 50% faster and the team loves the seamless integrations.',
    rating: 5,
    metric: '50% faster deployments'
  },
  {
    name: 'Dr. Patricia Williams',
    role: 'Chief Technology Officer',
    company: 'ScaleUp Industries',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'Finally, a platform that provides measurable ROI on process improvements. FlowForge helped us save $1.2M in operational costs this year.',
    rating: 5,
    metric: '$1.2M saved'
  }
]

const companies = [
  { name: 'Microsoft', logo: 'M' },
  { name: 'Stripe', logo: 'S' },
  { name: 'Linear', logo: 'L' },
  { name: 'Notion', logo: 'N' },
  { name: 'GitHub', logo: 'G' },
  { name: 'Figma', logo: 'F' }
]

const stats = [
  { value: '10,000+', label: 'Teams Trust FlowForge' },
  { value: '73%', label: 'Average Efficiency Gain' },
  { value: '$2.9M', label: 'Saved Per Enterprise' },
  { value: '99.9%', label: 'Uptime Guarantee' }
]

export function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Join <span className="gradient-text">10,000+ Teams</span> Already Winning
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From startups to Fortune 500 companies, teams worldwide trust FlowForge 
            to transform their workflows
          </p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-center text-gray-400 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {company.logo}
                </div>
                <span className="font-semibold text-lg">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="glass border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-blue-400/30 absolute -top-2 -left-2" />
                    <p className="text-gray-300 leading-relaxed pl-6">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Metric Badge */}
                  <Badge variant="glow" className="mb-4">
                    {testimonial.metric}
                  </Badge>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="glass-dark border-green-500/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Join the Workflow Revolution?
              </h3>
              <p className="text-gray-300 mb-6">
                2,847 teams are already on the waitlist. Don't let your competitors get ahead.
              </p>
              <Badge variant="gradient" className="text-lg px-6 py-2">
                Limited Beta • 73% Efficiency Gain Guaranteed
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}