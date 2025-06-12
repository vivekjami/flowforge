"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Zap, Shield, Users, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Workflow Discovery",
      description: "Automatically detects and maps your existing workflows using advanced pattern recognition.",
      preview: "Live Demo",
      color: "from-purple-500 to-pink-500",
      stats: "99.2% accuracy"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast bottlenecks 48-72 hours before they impact your team's productivity.",
      preview: "View Charts",
      color: "from-blue-500 to-cyan-500",
      stats: "2-3 days ahead"
    },
    {
      icon: Zap,
      title: "Smart Integrations",
      description: "Connect 200+ tools with intelligent routing and automated optimization suggestions.",
      preview: "See Connections",
      color: "from-yellow-500 to-orange-500",
      stats: "200+ tools"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption with SOC2 compliance and granular access controls.",
      preview: "Security Report",
      color: "from-green-500 to-emerald-500",
      stats: "SOC2 certified"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaborative workflow editing with conflict resolution and version control.",
      preview: "Try Collaboration",
      color: "from-indigo-500 to-purple-500",
      stats: "Real-time sync"
    },
    {
      icon: Workflow,
      title: "Visual Flow Builder",
      description: "Drag-and-drop interface with conditional logic and advanced automation triggers.",
      preview: "Build Workflow",
      color: "from-pink-500 to-rose-500",
      stats: "No-code builder"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Features That{" "}
            <span className="gradient-text">Transform</span> Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of workflow management with AI-powered insights, 
            predictive analytics, and seamless integrations that adapt to your team's needs.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass hover-lift hover-glow border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <CardHeader className="space-y-4">
                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl opacity-30 animate-ping group-hover:animate-none`} />
                  </div>

                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <div className="text-sm font-medium text-indigo-600 mt-1">
                      {feature.stats}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>

                  {/* Interactive preview button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 text-indigo-700 font-medium rounded-xl border border-indigo-200 hover:border-indigo-300 transition-all duration-300"
                  >
                    {feature.preview} →
                  </motion.button>

                  {/* Mini demo visualization */}
                  <div className="h-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -skew-x-12 animate-pulse" />
                    <div className="text-xs text-gray-500 font-medium">
                      Interactive Demo Available
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Magic?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of teams already using FlowForge to transform their workflows.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}