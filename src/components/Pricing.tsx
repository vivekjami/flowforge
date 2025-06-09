import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [inView, setInView] = useState(false);
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

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for solo entrepreneurs and small projects',
      icon: Zap,
      color: 'from-gray-400 to-gray-600',
      features: [
        '5 workflows',
        '100 tasks/month',
        'Basic integrations',
        'Email support',
        'Community access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per user/month',
      description: 'Ideal for growing teams and advanced workflows',
      icon: Star,
      color: 'from-primary-500 to-blue-600',
      features: [
        'Unlimited workflows',
        'AI insights & predictions',
        '200+ integrations',
        'Real-time collaboration',
        'Priority support',
        'Advanced analytics',
        'Custom templates',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per user/month',
      description: 'For large organizations with advanced needs',
      icon: Crown,
      color: 'from-purple-500 to-purple-700',
      features: [
        'Everything in Professional',
        'SSO & advanced security',
        'Custom integrations',
        'Dedicated success manager',
        'SLA guarantee',
        'White-label options',
        'Advanced compliance',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises. 
            Cancel anytime with our 30-day money-back guarantee.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium">
              Annual
            </button>
            <div className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Save 20%
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <div className={`bg-white rounded-2xl p-8 shadow-xl border-2 ${
                plan.popular ? 'border-primary-200 shadow-2xl' : 'border-gray-100'
              } hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.price !== 'Free' && (
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    {plan.price === 'Free' && (
                      <span className="text-gray-600">{plan.period}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center"
                      >
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            All plans include our core AI features and 24/7 support. 
            Need a custom solution? <a href="#" className="text-primary-600 hover:underline">Contact our sales team</a>.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No setup fees
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;