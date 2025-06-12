"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Users, Brain, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Predict bottlenecks before they happen",
    "Automate complex workflows instantly", 
    "Connect every tool in your stack",
    "Transform chaos into clarity"
  ];

  useEffect(() => {
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
  }, [currentPhrase]);

  const achievements = [
    { 
      value: "2.3x", 
      label: "Faster Delivery", 
      icon: Rocket, 
      color: "from-emerald-400 to-teal-500",
      description: "Average sprint velocity increase"
    },
    { 
      value: "87%", 
      label: "Prediction Accuracy", 
      icon: Brain, 
      color: "from-violet-400 to-purple-500",
      description: "AI bottleneck forecasting"
    },
    { 
      value: "$2.4M", 
      label: "Cost Savings", 
      icon: TrendingUp, 
      color: "from-amber-400 to-orange-500",
      description: "Annual efficiency gains"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 animate-gradient" />
      
      {/* Floating geometric shapes with physics */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ 
              duration: 15 + i * 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 2
            }}
            className={`absolute w-${16 + i * 8} h-${16 + i * 8} bg-gradient-to-r ${
              i % 3 === 0 ? 'from-indigo-400/20 to-purple-400/20' :
              i % 3 === 1 ? 'from-blue-400/20 to-cyan-400/20' :
              'from-pink-400/20 to-rose-400/20'
            } ${i % 2 === 0 ? 'rounded-3xl' : 'rounded-full'} blur-xl`}
            style={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 15}%`,
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Innovation badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border border-indigo-200 px-8 py-4 rounded-full shadow-lg"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <Sparkles className="h-5 w-5 text-indigo-600 animate-pulse" />
            <span className="text-indigo-700 font-bold text-lg">
              World's First Predictive Workflow AI
            </span>
          </motion.div>

          {/* Main headline with dynamic typing */}
          <div className="space-y-6">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-slate-900">Stop</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Guessing.
              </span>
              <span className="block text-slate-900">Start</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Knowing.
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl lg:text-4xl text-slate-600 max-w-5xl mx-auto leading-relaxed min-h-[3rem] flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="font-medium">{typedText}</span>
              <span className="animate-pulse text-indigo-400 ml-1">|</span>
            </motion.div>
          </div>

          {/* Value proposition */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            FlowForge's AI doesn't just automate—it <span className="font-bold text-indigo-600">predicts, prevents, and perfects</span> your workflows before problems arise.
          </motion.p>

          {/* CTA Buttons with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl group"
              >
                Experience the Magic
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="px-12 py-6 text-xl font-bold rounded-2xl border-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group bg-white/80 backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                See It In Action
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with enhanced styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Live in 60 seconds</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="font-medium">No credit card needed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="font-medium">Enterprise-grade security</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-lg text-indigo-600 font-semibold">
              <Users className="h-5 w-5" />
              <span>Join 47,000+ workflow innovators</span>
            </div>
          </motion.div>

          {/* Achievement metrics with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-black text-slate-900 mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-slate-700 font-bold text-lg mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {achievement.description}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 border-2 border-indigo-300 rounded-full flex justify-center relative"
          >
            <motion.div 
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mt-2" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}