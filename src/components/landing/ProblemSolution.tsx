"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, DollarSign, CheckCircle, TrendingUp, Zap, Target } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Process Blindness",
      description: "Teams have zero visibility into workflow bottlenecks until it's too late",
      stat: "73% of teams",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Manual Chaos",
      description: "3+ hours daily wasted on manual activities that could be automated",
      stat: "3hrs daily",
      color: "text-orange-500"
    },
    {
      icon: TrendingDown,
      title: "Tool Fragmentation",
      description: "Average company uses 254 SaaS apps with zero integration",
      stat: "254 tools",
      color: "text-yellow-500"
    },
    {
      icon: DollarSign,
      title: "Hidden Costs",
      description: "Process inefficiencies cost businesses $2.9 trillion annually",
      stat: "$2.9T lost",
      color: "text-red-600"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "AI-Powered Discovery",
      description: "Automatically maps and analyzes all your workflows in real-time",
      benefit: "99.2% accuracy",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Intelligence",
      description: "Forecasts bottlenecks 48-72 hours before they impact productivity",
      benefit: "2-3 days ahead",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Connects 200+ tools with intelligent routing and optimization",
      benefit: "200+ integrations",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Measurable ROI",
      description: "Track and optimize workflow efficiency with real-time analytics",
      benefit: "40% efficiency gain",
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-semibold">The $2.9 Trillion Problem</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Workflow Chaos is{" "}
            <span className="text-red-600">Killing</span>{" "}
            Productivity
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While AI transforms every industry, most teams still struggle with manual, 
            disconnected workflows that waste time, money, and talent.
          </p>
        </motion.div>

        {/* Problems Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Reality Most Teams Face
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These aren't just minor inconveniences—they're business-critical problems 
              that compound daily, costing millions in lost productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <problem.icon className={`h-8 w-8 ${problem.color}`} />
                  <div className={`text-2xl font-bold ${problem.color}`}>
                    {problem.stat}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Zap className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-20 animate-pulse" />
          </div>
          
          <div className="mt-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              FlowForge Transforms Everything
            </h3>
            <p className="text-gray-600">
              From chaos to intelligent, self-optimizing workflows
            </p>
          </div>
        </motion.div>

        {/* Solutions Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The FlowForge Solution
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI-powered workflow intelligence that transforms your team's productivity 
              from day one, with measurable results you can see immediately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <solution.icon className={`h-8 w-8 ${solution.color}`} />
                  <div className={`text-lg font-bold ${solution.color}`}>
                    {solution.benefit}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to End Workflow Chaos?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join 10,000+ teams who've already transformed their productivity with FlowForge. 
              See results in your first week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            <p className="text-indigo-200 text-sm mt-4">
              No credit card required • 14-day free trial • Setup in 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}