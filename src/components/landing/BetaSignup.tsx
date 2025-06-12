"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Users, Clock, CheckCircle, Sparkles, Gift } from "lucide-react";

export default function BetaSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [signupCount, setSignupCount] = useState(30);
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 6,
    minutes: 23,
    seconds: 45
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Countdown timer - only run on client
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  // Simulate signup count increase - only run on client
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setSignupCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [isClient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setSignupCount(prev => prev + 1);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated background elements - only render on client */}
        {isClient && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, -50, -10],
                  opacity: [0, 0.8, 0],
                  scale: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  left: `${10 + i * 7}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
              />
            ))}
          </>
        )}
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="space-y-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto shadow-2xl"
            >
              <CheckCircle className="h-16 w-16 text-white" />
            </motion.div>
            
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Welcome to the Future! 🚀
              </h2>
              <p className="text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                You&apos;re now part of an exclusive group of workflow innovators. 
                Get ready for early access and founder-only benefits.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 max-w-3xl mx-auto border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8">
                What Happens Next?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  { icon: "📧", title: "Instant Confirmation", desc: "Check your inbox for welcome email" },
                  { icon: "🎁", title: "Founder Pricing", desc: "Lock in 60% off for life" },
                  { icon: "🚀", title: "Early Access", desc: "First to try new features" },
                  { icon: "🤝", title: "Direct Line", desc: "Chat directly with our founders" },
                  { icon: "📊", title: "Beta Testing", desc: "Shape the product roadmap" },
                  { icon: "💎", title: "VIP Support", desc: "Priority customer success" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-white font-bold mb-1">{item.title}</div>
                      <div className="text-indigo-200 text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-bold"
                onClick={() => window.open('https://twitter.com/intent/tweet?text=Just%20joined%20FlowForge%20early%20access!%20The%20future%20of%20AI%20workflow%20intelligence%20is%20here.%20%23FlowForge%20%23AI%20%23Productivity', '_blank')}
              >
                Share the News
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-bold"
                onClick={() => window.open('mailto:friends@example.com?subject=Check%20out%20FlowForge&body=I%20just%20got%20early%20access%20to%20FlowForge%20-%20the%20AI%20workflow%20platform%20that%20predicts%20bottlenecks!', '_blank')}
              >
                Invite Friends
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating orbs - only render on client with reduced intensity */}
      {isClient && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 6 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.8
              }}
              className={`absolute w-${16 + i * 4} h-${16 + i * 4} bg-gradient-to-r ${
                i % 3 === 0 ? 'from-blue-400/10 to-purple-400/10' :
                i % 3 === 1 ? 'from-pink-400/10 to-indigo-400/10' :
                'from-purple-400/10 to-pink-400/10'
              } rounded-full blur-3xl`}
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-16"
        >
          {/* Header */}
          <div className="space-y-8">
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            >
              <Sparkles className="h-6 w-6" />
              <span>Limited Early Access Available</span>
              <Sparkles className="h-6 w-6" />
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white leading-tight">
              Join the{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Elite
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
              Be among the first 200 teams to experience predictive workflow intelligence. 
              <span className="font-bold text-yellow-400"> Exclusive benefits included.</span>
            </p>
          </div>

          {/* Countdown timer with enhanced design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 max-w-3xl mx-auto border border-white/20"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Clock className="h-8 w-8 text-yellow-400" />
              <span className="text-white font-bold text-2xl">Early Access Closes In</span>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" }
              ].map((time, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 mb-3 border border-white/20">
                    <motion.div 
                      key={time.value}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl md:text-5xl font-black text-white"
                    >
                      {time.value.toString().padStart(2, '0')}
                    </motion.div>
                  </div>
                  <div className="text-indigo-300 font-bold">
                    {time.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Signup form with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-16 py-6 text-xl bg-white/10 border-white/20 text-white placeholder-gray-300 focus:border-white/40 focus:ring-white/20 rounded-2xl backdrop-blur-sm"
                  required
                />
              </div>
              
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-black py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 group"
                >
                  <Gift className="mr-3 h-6 w-6 group-hover:rotate-6 transition-transform duration-300" />
                  Claim My Elite Access
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </form>

            <p className="text-indigo-300 text-sm mt-4">
              No spam, ever. Unsubscribe anytime. Your data is protected.
            </p>
          </motion.div>

          {/* Social proof and benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center justify-center space-x-3 text-indigo-200">
              <Users className="h-6 w-6" />
              <span className="font-bold text-xl">
                Join {signupCount.toLocaleString()} workflow innovators
              </span>
            </div>

            {/* Elite benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: "🎁",
                  title: "Founder Pricing",
                  description: "Lock in 60% off for life",
                  highlight: "Save $2,400/year"
                },
                {
                  icon: "⚡",
                  title: "Priority Access",
                  description: "First to experience new features",
                  highlight: "Weeks before public"
                },
                {
                  icon: "🤝",
                  title: "Founder Chat",
                  description: "Direct access to our founding team",
                  highlight: "Shape the roadmap"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-indigo-300 mb-3">{benefit.description}</p>
                  <div className="text-yellow-400 font-bold text-sm bg-yellow-400/20 px-4 py-2 rounded-full inline-block">
                    {benefit.highlight}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}