"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Brain, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const phrases = [
    "Predict workflow bottlenecks",
    "Automate complex processes", 
    "Connect your entire stack",
    "Transform team productivity"
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let i = 0;
    const currentText = phrases[currentPhrase];
    
    const timer = setInterval(() => {
      if (i < currentText.length) {
        setTypedText(currentText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setTypedText("");
        }, 2000);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [currentPhrase, isClient]);

  const metrics = [
    { value: "2.3x", label: "Faster Delivery", icon: Zap },
    { value: "87%", label: "Prediction Accuracy", icon: Brain },
    { value: "$2.4M", label: "Annual Savings", icon: TrendingUp }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-red-400/5"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-400/5 via-cyan-400/5 to-teal-400/5"></div>
      </div>
      
      {/* Floating animated orbs - only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Large primary orb */}
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl"
          />
          
          {/* Medium secondary orb */}
          <motion.div
            animate={{ 
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: -5
            }}
            className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/12 to-rose-400/12 rounded-full blur-3xl"
          />
          
          {/* Small accent orb */}
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: -8
            }}
            className="absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          />
          
          {/* Floating particles - reduced quantity and intensity */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-10, -50, -10],
                opacity: [0, 0.6, 0],
                scale: [0, 0.8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut"
              }}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + i * 8}%`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Innovation badge with subtle glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-indigo-200 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-indigo-700 font-semibold text-sm">
              World&apos;s First Predictive Workflow AI
            </span>
          </motion.div>

          {/* Main headline with enhanced gradient */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-slate-900">AI That</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Thinks Ahead
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed h-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="font-medium">{isClient ? typedText : "Predict workflow bottlenecks"}</span>
              {isClient && (
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-indigo-400 ml-1"
                >
                  
                </motion.span>
              )}
            </motion.div>
          </div>

          {/* Enhanced value proposition */}
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Stop reacting to problems. Start preventing them. FlowForge&apos;s AI predicts bottlenecks 
            and optimizes workflows before issues impact your team.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -1 }} 
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -1 }} 
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group bg-white/90 backdrop-blur-sm hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-105 transition-transform duration-300" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="space-y-3"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-500">
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span>Setup in 60 seconds</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>No credit card required</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-1 hover:text-purple-600 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span>Enterprise security</span>
              </motion.span>
            </div>
            
            <div className="text-indigo-600 font-medium">
              Join 1,000+ teams already using FlowForge
            </div>
          </motion.div>

          {/* Enhanced metrics with subtle effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.1)"
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/60 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <metric.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-black text-slate-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-slate-600 font-medium text-sm">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-indigo-300 rounded-full flex justify-center hover:border-indigo-500 transition-colors duration-300 cursor-pointer"
          >
            <motion.div 
              animate={{ 
                y: [0, 6, 0], 
                opacity: [1, 0, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-2 bg-indigo-500 rounded-full mt-1.5" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}