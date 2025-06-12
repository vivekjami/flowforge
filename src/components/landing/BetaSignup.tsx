"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Users, Clock, CheckCircle } from "lucide-react";

export default function BetaSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [signupCount, setSignupCount] = useState(2847);
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 18
  });

  // Countdown timer
  useEffect(() => {
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
  }, []);

  // Simulate signup count increase
  useEffect(() => {
    const interval = setInterval(() => {
      setSignupCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setSignupCount(prev => prev + 1);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="space-y-8"
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome to the Future! 🚀
              </h2>
              <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
                You're now part of an exclusive group of innovators. We'll notify you the moment 
                FlowForge launches with early access and special pricing.
              </p>
            </div>

            <div className="glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                What happens next?
              </h3>
              <div className="space-y-4 text-left">
                {[
                  "📧 Confirmation email sent to your inbox",
                  "🎁 Exclusive early access when we launch",
                  "💰 Special founder pricing (50% off first year)",
                  "🤝 Direct line to our founding team",
                  "📊 Beta testing opportunities"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-indigo-200"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://twitter.com/intent/tweet?text=Just%20joined%20the%20FlowForge%20beta!%20The%20future%20of%20AI%20workflow%20intelligence%20is%20here.%20%23FlowForge%20%23AI%20%23Productivity', '_blank')}
              >
                Share on Twitter
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://linkedin.com/sharing/share-offsite/?url=https://flowforge.ai', '_blank')}
              >
                Share on LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Join the{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
              Be among the first to experience the future of workflow intelligence. 
              Limited beta access available.
            </p>
          </div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold">Beta Launch Countdown</span>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" }
              ].map((time, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 mb-2">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {time.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-indigo-300 text-sm font-medium">
                    {time.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Signup form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-300 focus:border-white/40 focus:ring-white/20"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Secure My Beta Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <p className="text-indigo-300 text-sm mt-4">
              No spam, ever. Unsubscribe with one click.
            </p>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center space-x-2 text-indigo-200">
              <Users className="h-5 w-5" />
              <span className="font-semibold">
                Join {signupCount.toLocaleString()} other innovators
              </span>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: "🎁",
                  title: "Early Access",
                  description: "Be first to experience FlowForge"
                },
                {
                  icon: "💰",
                  title: "Founder Pricing",
                  description: "50% off your first year"
                },
                {
                  icon: "🤝",
                  title: "Direct Access",
                  description: "Shape the product with our team"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-indigo-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}