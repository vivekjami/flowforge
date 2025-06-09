import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, DollarSign, CheckCircle, TrendingUp, Zap, Brain } from 'lucide-react';

const ProblemSolution = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Process Blindness',
      description: 'Teams have no visibility into workflow bottlenecks until it\'s too late',
      stat: '73%',
      statLabel: 'of businesses struggle with process inefficiencies',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Clock,
      title: 'Manual Chaos',
      description: '3 hours per day wasted on manual activities that could be automated',
      stat: '3hrs',
      statLabel: 'daily waste per employee',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'Mid-size companies lose $1.2M annually due to workflow inefficiencies',
      stat: '$1.2M',
      statLabel: 'annual loss per company',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI Discovery',
      description: 'Automatically maps and analyzes your existing workflows using advanced AI',
      stat: '40%',
      statLabel: 'faster workflow discovery',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Zap,
      title: 'Smart Optimization',
      description: 'Real-time suggestions and automated improvements based on team patterns',
      stat: '2-3 days',
      statLabel: 'early bottleneck detection',
      color: 'from-electric-500 to-electric-600',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Intelligence',
      description: 'Prevent issues before they happen with ML-powered predictive analytics',
      stat: '60%',
      statLabel: 'productivity increase',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-6">
            The $2.9 Trillion{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Problem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Businesses lose trillions annually due to workflow inefficiencies. 
            FlowForge's AI transforms this chaos into intelligent, self-optimizing processes.
          </p>
        </motion.div>

        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Current Reality</h3>
            <p className="text-lg text-gray-600">Most teams are drowning in process inefficiencies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-gray-100/50 hover:shadow-glow transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${problem.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
                
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent mb-1`}>
                    {problem.stat}
                  </div>
                  <div className="text-sm text-gray-600">{problem.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary-600 to-electric-600 rounded-full shadow-glow-lg mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-electric-600 bg-clip-text text-transparent">
            FlowForge Changes Everything
          </h3>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Intelligence</h3>
            <p className="text-lg text-gray-600">Transform chaos into intelligent, self-optimizing workflows</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-primary-100/50 hover:shadow-glow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl p-4 border border-primary-100">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-1`}>
                      {solution.stat}
                    </div>
                    <div className="text-sm text-gray-600">{solution.statLabel}</div>
                  </div>
                </div>

                {/* Success Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-electric-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-premium hover:shadow-glow-lg transition-all duration-300"
          >
            See FlowForge in Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;