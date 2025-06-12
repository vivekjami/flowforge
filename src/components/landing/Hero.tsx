"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Brain, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Predict workflow bottlenecks",
    "Automate complex processes", 
    "Connect your entire stack",
    "Transform team productivity"
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

  const companies = [
    "Microsoft", "Google", "Netflix", "Spotify", "Airbnb", 
    "Uber", "Slack", "GitHub", "Notion", "Linear"
  ];

  const metrics = [
    { value: "2.3x", label: "Faster Delivery", icon: Zap },
    { value: "87%", label: "Prediction Accuracy", icon: Brain },
    { value: "$2.4M", label: "Annual Savings", icon: TrendingUp }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 2
            }}
            className={`absolute w-${32 + i * 16} h-${32 + i * 16} bg-gradient-to-r ${
              i === 0 ? 'from-indigo-200/30 to-purple-200/30' :
              i === 1 ? 'from-blue-200/30 to-cyan-200/30' :
              'from-purple-200/30 to-pink-200/30'
            } rounded-full blur-xl`}
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-indigo-200 px-6 py-3 rounded-full shadow-lg"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-indigo-700 font-semibold text-sm">
              World's First Predictive Workflow AI
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-black leading-tight"
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
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="font-medium">{typedText}</span>
              <span className="animate-pulse text-indigo-400 ml-1">|</span>
            </motion.div>
          </div>

          {/* Value proposition */}
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            FlowForge predicts bottlenecks before they happen, optimizes workflows automatically, 
            and transforms your team into a productivity powerhouse.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group bg-white/80 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="space-y-3"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-500">
              <span>✓ Setup in 60 seconds</span>
              <span>✓ No credit card required</span>
              <span>✓ Enterprise security</span>
            </div>
            
            <div className="text-indigo-600 font-medium">
              Join 47,000+ teams already using FlowForge
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-indigo-300 rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-indigo-600 rounded-full mt-2" 
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted companies section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 py-6"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-slate-500 font-medium text-sm">Trusted by teams at</p>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [-100, -50] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
    </section>
  );
}