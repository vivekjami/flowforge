import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const SocialProof = () => {
  const [inView, setInView] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const companies = [
    { name: 'TechFlow', logo: '🚀' },
    { name: 'DataCore', logo: '💎' },
    { name: 'ScaleUp', logo: '📈' },
    { name: 'InnovateLab', logo: '🔬' },
    { name: 'NextGen', logo: '⚡' },
    { name: 'CloudFirst', logo: '☁️' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechFlow Solutions',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'FlowForge transformed our chaotic processes into intelligent workflows. We now detect bottlenecks 3 days before they impact our sprints. Our team productivity increased by 40% in just 2 months.',
      rating: 5,
      metrics: { value: '40%', label: 'Productivity Increase' },
      verified: true,
    },
    {
      name: 'Dr. Marcus Rodriguez',
      role: 'Chief Technology Officer',
      company: 'DataCore Systems',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The AI-powered workflow discovery is incredible. FlowForge automatically mapped our entire development process and suggested optimizations that saved us 15 hours per week. ROI was immediate.',
      rating: 5,
      metrics: { value: '15hrs', label: 'Weekly Time Saved' },
      verified: true,
    },
    {
      name: 'Jennifer Liu',
      role: 'Head of Product',
      company: 'InnovateLab',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Finally, we have data-driven insights into our operational efficiency. FlowForge\'s predictive analytics helped us prevent 3 major bottlenecks last quarter, saving $200K in potential delays.',
      rating: 5,
      metrics: { value: '$200K', label: 'Cost Savings' },
      verified: true,
    },
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Teams Trust FlowForge', color: 'from-blue-500 to-blue-600' },
    { icon: TrendingUp, value: '40%', label: 'Average Productivity Gain', color: 'from-green-500 to-green-600' },
    { icon: Award, value: '99.9%', label: 'Customer Satisfaction', color: 'from-purple-500 to-purple-600' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-gradient-to-br from-primary-50 to-electric-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams who have transformed their workflows with FlowForge's 
            AI-powered intelligence platform and achieved remarkable results.
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <p className="text-center text-gray-500 mb-8 font-medium">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-premium border border-white/20 hover:shadow-glow transition-all duration-300"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-semibold text-gray-700">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-premium border border-white/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-electric-600/5" />
            
            {/* Quote Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-primary-600 to-electric-600 rounded-full flex items-center justify-center opacity-10"
            >
              <Quote className="w-8 h-8" />
            </motion.div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
                <span className="ml-3 text-sm font-medium text-gray-600">Verified Review</span>
              </div>

              {/* Testimonial Content */}
              <motion.blockquote
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 font-medium"
              >
                "{testimonials[currentTestimonial].content}"
              </motion.blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <motion.img
                    key={currentTestimonial}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Metrics Badge */}
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl text-center shadow-lg"
                >
                  <div className="text-2xl font-bold">{testimonials[currentTestimonial].metrics.value}</div>
                  <div className="text-sm opacity-90">{testimonials[currentTestimonial].metrics.label}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-20">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-primary-600 to-electric-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-white/20 text-center hover:shadow-glow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;