import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      company: 'TechFlow Solutions',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'FlowForge transformed our chaotic processes into intelligent workflows. We now detect bottlenecks 3 days before they impact our sprints. Our team productivity increased by 40%.',
      rating: 5,
      metrics: '40% productivity increase',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Engineering Manager',
      company: 'DataCore Systems',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The AI-powered workflow discovery is incredible. FlowForge automatically mapped our entire development process and suggested optimizations that saved us 15 hours per week.',
      rating: 5,
      metrics: '15 hours saved weekly',
    },
    {
      name: 'Dr. Patricia Williams',
      role: 'VP of Operations',
      company: 'ScaleUp Industries',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Finally, we have data-driven insights into our operational efficiency. FlowForge\'s predictive analytics helped us prevent 3 major bottlenecks last quarter, saving $200K in delays.',
      rating: 5,
      metrics: '$200K saved in delays',
    },
    {
      name: 'Marcus Thompson',
      role: 'Product Manager',
      company: 'InnovateLab',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The real-time collaboration features are game-changing. Our distributed team can now optimize workflows together, and the AI suggestions are surprisingly accurate.',
      rating: 5,
      metrics: '60% faster iterations',
    },
    {
      name: 'Jennifer Liu',
      role: 'CTO',
      company: 'NextGen Dynamics',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'FlowForge is the missing piece in our tech stack. It connects all our tools intelligently and the ROI calculations help us make better decisions about process improvements.',
      rating: 5,
      metrics: '3x faster deployment',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Teams Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of teams who have transformed their workflows with FlowForge's 
            AI-powered intelligence platform.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-blue-600/5"></div>
            
            {/* Quote Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center opacity-10"
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
                    transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Content */}
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium"
              >
                "{testimonials[currentIndex].content}"
              </motion.blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Metrics Badge */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {testimonials[currentIndex].metrics}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-primary-600 to-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10,000+', label: 'Active Users' },
            { number: '500K+', label: 'Workflows Created' },
            { number: '99.9%', label: 'Uptime' },
            { number: '4.9/5', label: 'Customer Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;