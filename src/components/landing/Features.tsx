"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Users, Workflow, Eye, Cpu, Network, Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Predictive Workflow AI",
      description: "Machine learning algorithms analyze 200+ data points to forecast bottlenecks before they impact delivery.",
      preview: "See Predictions",
      color: "from-purple-500 to-pink-500",
      stats: "72hrs early warning",
      demo: "Live pattern analysis",
      benefit: "Prevent 89% of delays"
    },
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Complete transparency into every workflow stage with live dependency mapping and capacity monitoring.",
      preview: "View Dashboard",
      color: "from-blue-500 to-cyan-500",
      stats: "360° visibility",
      demo: "Live workflow map",
      benefit: "Zero blind spots"
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Context-aware automation that adapts to your team's working patterns and current capacity.",
      preview: "Try Automation",
      color: "from-yellow-500 to-orange-500",
      stats: "Smart triggers",
      demo: "Auto-optimization",
      benefit: "2.3x faster delivery"
    },
    {
      icon: Network,
      title: "Universal Integration",
      description: "Connect any tool in your stack with intelligent data routing and conflict-free synchronization.",
      preview: "Browse Integrations",
      color: "from-green-500 to-emerald-500",
      stats: "500+ connectors",
      demo: "Instant setup",
      benefit: "One unified platform"
    },
    {
      icon: Gauge,
      title: "Performance Intelligence",
      description: "Advanced analytics that identify optimization opportunities and measure improvement impact.",
      preview: "View Analytics",
      color: "from-indigo-500 to-purple-500",
      stats: "Precision insights",
      demo: "ROI calculator",
      benefit: "$2.4M avg savings"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption with SOC2 compliance, audit trails, and granular access controls.",
      preview: "Security Report",
      color: "from-red-500 to-pink-500",
      stats: "Bank-level security",
      demo: "Compliance dashboard",
      benefit: "Zero breaches"
    },
  ];

  const advancedCapabilities = [
    {
      icon: Cpu,
      title: "AI Learning Engine",
      description: "Continuously learns from your team's patterns to improve predictions and recommendations.",
      metric: "99.2% accuracy improvement over 30 days"
    },
    {
      icon: Users,
      title: "Collaborative Intelligence",
      description: "Team-wide insights that help optimize individual and collective productivity.",
      metric: "40% improvement in team coordination"
    },
    {
      icon: Workflow,
      title: "Adaptive Workflows",
      description: "Self-optimizing processes that evolve based on performance data and team feedback.",
      metric: "67% reduction in manual adjustments"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full mb-8">
            <Brain className="h-5 w-5" />
            <span className="font-bold">Powered by Advanced AI</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
            Features That{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Actually Work
            </span>
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Not just another workflow tool—a complete intelligence platform that 
            <span className="font-bold text-indigo-600"> thinks ahead</span> so you don&apos;t have to.
          </p>
        </motion.div>

        {/* Core features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`} />
              
              <Card className="relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                <CardHeader className="space-y-4 pb-6">
                  {/* Icon with enhanced animation */}
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Pulse effect */}
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl`} 
                    />
                  </div>

                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2">
                      {feature.title}
                    </CardTitle>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-indigo-600">
                        {feature.stats}
                      </div>
                      <div className="text-sm font-medium text-emerald-600">
                        {feature.benefit}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-slate-600 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>

                  {/* Demo preview */}
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-slate-700">Live Demo</div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm text-slate-600 mb-3">{feature.demo}</div>
                    
                    {/* Simulated mini chart */}
                    <div className="h-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded opacity-60 relative overflow-hidden">
                      <motion.div
                        animate={{ x: [-100, 300] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                      />
                    </div>
                  </div>

                  {/* Interactive preview button */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-4 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 text-indigo-700 font-bold rounded-xl border border-indigo-200 hover:border-indigo-300 transition-all duration-300 group"
                  >
                    {feature.preview}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advanced capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Advanced AI Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {capability.title}
                </h4>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                
                <div className="text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full inline-block">
                  {capability.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-12 border border-indigo-200 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Experience Intelligence in Action
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                See how FlowForge&apos;s AI transforms your workflows from chaotic to predictable in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Try All Features Free
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
              
              <p className="text-slate-500 text-sm mt-6">
                Full access • No credit card • Setup in 60 seconds
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}