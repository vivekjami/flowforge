import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [inView, setInView] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
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
      subtitle: 'Perfect for small teams',
      price: { monthly: 0, annual: 0 },
      originalPrice: { monthly: 29, annual: 290 },
      description: 'Get started with essential workflow intelligence',
      icon: Zap,
      color: 'from-gray-400 to-gray-600',
      features: [
        '5 workflows',
        '100 tasks/month',
        'Basic AI insights',
        'Email support',
        'Community access',
        'Basic integrations',
      ],
      cta: 'Start Free',
      popular: false,
      badge: 'Free Forever',
    },
    {
      name: 'Professional',
      subtitle: 'Most popular choice',
      price: { monthly: 99, annual: 990 },
      originalPrice: { monthly: 149, annual: 1490 },
      description: 'Advanced AI-powered workflow optimization',
      icon: Star,
      color: 'from-primary-500 to-electric-600',
      features: [
        'Unlimited workflows',
        'Advanced AI predictions',
        '200+ integrations',
        'Real-time collaboration',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'ROI calculations',
      ],
      cta: 'Start Free Trial',
      popular: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      subtitle: 'For large organizations',
      price: { monthly: 299, annual: 2990 },
      originalPrice: { monthly: 399, annual: 3990 },
      description: 'Complete workflow intelligence platform',
      icon: Crown,
      color: 'from-purple-500 to-purple-700',
      features: [
        'Everything in Professional',
        'White-label options',
        'SSO & advanced security',
        'Custom integrations',
        'Dedicated success manager',
        'SLA guarantee',
        'Advanced compliance',
        'Custom AI models',
      ],
      cta: 'Contact Sales',
      popular: false,
      badge: 'Enterprise',
    },
  ];

  const savings = isAnnual ? 25 : 0;

  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Start free and scale as you grow. No hidden fees, no surprises. 
            Join 10,000+ teams already transforming their workflows with FlowForge.
          </p>
          
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-premium border border-white/20"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-gradient-to-r from-primary-600 to-electric-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-gradient-to-r from-primary-600 to-electric-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Annual
            </button>
            {isAnnual && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm"
              >
                Save 25%
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'lg:-mt-8 lg:mb-8' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-electric-600 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-premium">
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-premium border-2 ${
                plan.popular 
                  ? 'border-primary-200 shadow-glow-lg' 
                  : 'border-white/20'
              } hover:shadow-glow-lg transition-all duration-500 h-full relative overflow-hidden`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {!plan.popular && (
                      <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {plan.badge}
                      </div>
                    )}
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline mb-2">
                      {plan.price.monthly === 0 ? (
                        <span className="text-5xl font-bold text-gray-900">Free</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-gray-900">
                            ${isAnnual ? plan.price.annual : plan.price.monthly}
                          </span>
                          <span className="text-gray-600 ml-2">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        </>
                      )}
                    </div>
                    
                    {plan.price.monthly > 0 && (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through text-sm">
                          ${isAnnual ? plan.originalPrice.annual : plan.originalPrice.monthly}
                        </span>
                        {isAnnual && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                            Save ${plan.originalPrice.annual - plan.price.annual}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) + (featureIndex * 0.05) }}
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
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-600 to-electric-600 text-white shadow-premium hover:shadow-glow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Glow Effect for Popular Plan */}
                {plan.popular && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-electric-600/10 rounded-3xl"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Enterprise teams with unique requirements can get custom pricing, 
              dedicated support, and tailored AI models. Let's discuss your specific needs.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-electric-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-premium hover:shadow-glow-lg transition-all duration-300"
            >
              Contact Enterprise Sales
            </motion.button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-gray-500">
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
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              24/7 support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;