"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Zap, Target, Brain, Shield, Workflow, BarChart3 } from "lucide-react";

export default function ProblemSolution() {
  const companies = [
    "Microsoft", "Google", "Netflix", "Spotify", "Airbnb", 
    "Uber", "Slack", "GitHub", "Notion", "Linear", "Figma", "Discord"
  ];

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
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Trusted companies section - moved here */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-slate-500 font-medium">Trusted by teams at</p>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [-50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex space-x-12 items-center justify-center"
              style={{ width: "200%" }}
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors duration-300 font-semibold text-lg tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Problem Section */}
        <div className="mb-24">
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
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              Your Workflows Are{" "}
              <span className="text-red-600 relative">
                Broken
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600 rounded-full"
                />
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              While you're building amazing products, broken workflows are silently 
              <span className="font-bold text-red-600"> hemorrhaging millions</span> in lost productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500 ${
                  pain.severity === 'critical' ? 'bg-gradient-to-r from-red-600 to-orange-600' :
                  pain.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
                  'bg-gradient-to-r from-yellow-400 to-amber-400'
                }`} />
                
                <div className="relative bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                      pain.severity === 'critical' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                      pain.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    }`}>
                      <pain.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-xl font-black ${
                        pain.severity === 'critical' ? 'text-red-600' :
                        pain.severity === 'high' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`}>
                        {pain.impact}
                      </div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                        {pain.severity} impact
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {pain.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
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
          className="text-center mb-24"
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
            
            {/* Animated rings */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 1 }}
                className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              />
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              FlowForge Changes Everything
            </h3>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
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
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Difference
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AI that doesn't just react—it <span className="font-bold text-emerald-600">predicts, prevents, and perfects</span> your workflows automatically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {transformations.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-200 hover:shadow-md hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-sm">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-black text-emerald-600">
                        {solution.outcome}
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        {solution.impact}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-700 leading-relaxed text-sm">
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
          className="text-center mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20" />
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-10 text-white">
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                See Your Transformation in Real-Time
              </h3>
              <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
                Watch your team's productivity metrics improve within hours, not weeks. 
                The difference is immediate and measurable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Transformation
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300"
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