"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechFlow Solutions",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "FlowForge reduced our deployment cycle from 5 days to 2 days. The AI predictions are incredibly accurate - it caught a bottleneck 3 days before our sprint deadline.",
      rating: 5,
      metric: "60% faster deployments"
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "DataCore Industries",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The workflow intelligence is game-changing. We've saved 15 hours per week on manual process management. The ROI was evident within the first month.",
      rating: 5,
      metric: "15hrs saved weekly"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Technology Officer",
      company: "InnovateLab",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "FlowForge's predictive analytics helped us prevent 3 major project delays. The AI insights are like having a crystal ball for project management.",
      rating: 5,
      metric: "3 delays prevented"
    },
    {
      name: "James Park",
      role: "Head of Product",
      company: "ScaleUp Dynamics",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The integration capabilities are phenomenal. Connected our entire tech stack in minutes, not weeks. The team productivity increased by 40%.",
      rating: 5,
      metric: "40% productivity boost"
    },
    {
      name: "Lisa Thompson",
      role: "Engineering Manager",
      company: "CloudFirst Technologies",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "Best investment we've made in years. The AI workflow optimization suggestions are spot-on. Our team efficiency metrics have never been better.",
      rating: 5,
      metric: "Best ROI in years"
    },
    {
      name: "Alex Kumar",
      role: "Senior DevOps Engineer",
      company: "NextGen Solutions",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "FlowForge eliminated our context switching overhead. The real-time collaboration features are incredible. Our deployment success rate is now 99.8%.",
      rating: 5,
      metric: "99.8% success rate"
    }
  ];

  const companies = [
    "Microsoft", "Google", "Netflix", "Spotify", "Airbnb", "Uber", "Slack", "GitHub", "Notion", "Linear"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-blue-100 px-4 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-indigo-700 font-semibold">Trusted by 10,000+ teams</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Teams{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how industry leaders are transforming their workflows and achieving 
            unprecedented productivity gains with FlowForge.
          </p>
        </motion.div>

        {/* Company logos carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex space-x-12 items-center"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass hover-lift hover-glow border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 space-y-4">
                  {/* Quote icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-indigo-300" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Metric highlight */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border border-indigo-100">
                    <div className="text-sm font-semibold text-indigo-700">
                      Key Result: {testimonial.metric}
                    </div>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium text-indigo-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Active Teams" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "4.9/5", label: "Customer Rating" },
              { value: "500M+", label: "Tasks Optimized" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}