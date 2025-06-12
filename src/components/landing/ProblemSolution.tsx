"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Zap, Target, Brain, Shield, Workflow, BarChart3 } from "lucide-react";

export default function ProblemSolution() {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Reactive Fire-Fighting",
      description: "Teams discover critical bottlenecks only after missing deadlines",
      impact: "67% miss deadlines",
      severity: "critical"
    },
    {
      icon: Clock,
      title: "Context Switching Hell",
      description: "Engineers lose 23 minutes refocusing after each tool switch",
      impact: "23min lost per switch",
      severity: "high"
    },
    {
      icon: Workflow,
      title: "Invisible Dependencies",
      description: "Hidden workflow connections create unexpected cascade failures",
      impact: "3x longer recovery",
      severity: "high"
    },
    {
      icon: BarChart3,
      title: "Data Blind Spots",
      description: "No visibility into what's actually slowing your team down",
      impact: "Zero insights",
      severity: "medium"
    }
  ];

  const transformations = [
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "AI analyzes patterns to forecast issues 72 hours before they occur",
      outcome: "72hrs early warning",
      impact: "Prevent 89% of delays"
    },
    {
      icon: Zap,
      title: "Instant Optimization",
      description: "Real-time workflow adjustments based on current team capacity",
      outcome: "Auto-optimization",
      impact: "2.3x faster delivery"
    },
    {
      icon: Shield,
      title: "Failure Prevention",
      description: "Proactive safeguards that stop problems before they cascade",
      outcome: "Zero surprises",
      impact: "95% uptime improvement"
    },
    {
      icon: Target,
      title: "Precision Insights",
      description: "Granular analytics showing exactly where time is lost or gained",
      outcome: "Surgical precision",
      impact: "$2.4M annual savings"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(99_102_241)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Problem Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-8">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-bold">The Hidden Productivity Killer</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">
              Your Workflows Are{" "}
              <span className="text-red-600 relative">
                Broken
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-red-600 rounded-full"
                />
              </span>
            </h2>
            
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              While you're building amazing products, broken workflows are silently 
              <span className="font-bold text-red-600"> hemorrhaging millions</span> in lost productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500 ${
                  pain.severity === 'critical' ? 'bg-gradient-to-r from-red-600 to-orange-600' :
                  pain.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
                  'bg-gradient-to-r from-yellow-400 to-amber-400'
                }`} />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      pain.severity === 'critical' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      pain.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    }`}>
                      <pain.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-black ${
                        pain.severity === 'critical' ? 'text-red-600' :
                        pain.severity === 'high' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`}>
                        {pain.impact}
                      </div>
                      <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                        {pain.severity} impact
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {pain.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transformation Moment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Zap className="h-16 w-16 text-white" />
            </div>
            
            {/* Animated rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              />
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              FlowForge Changes Everything
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From reactive chaos to predictive mastery in minutes, not months
            </p>
          </div>
        </motion.div>

        {/* Solution Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Difference
            </h3>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              AI that doesn't just react—it <span className="font-bold text-emerald-600">predicts, prevents, and perfects</span> your workflows automatically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {transformations.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg border border-emerald-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-black text-emerald-600">
                        {solution.outcome}
                      </div>
                      <div className="text-sm text-emerald-700 font-medium">
                        {solution.impact}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-700 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                See Your Transformation in Real-Time
              </h3>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Watch your team's productivity metrics improve within hours, not weeks. 
                The difference is immediate and measurable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Transformation
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  See Live Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}