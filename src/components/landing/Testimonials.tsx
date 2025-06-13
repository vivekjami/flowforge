"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Clock, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Engineering",
      company: "TechFlow Solutions",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "FlowForge predicted our sprint bottleneck 3 days early. We adjusted resources and delivered on time for the first time in months. The AI accuracy is genuinely impressive.",
      rating: 5,
      metric: "100% on-time delivery",
      icon: Target,
      improvement: "From 60% to 100% sprint success rate"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Operations",
      company: "DataCore Industries", 
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "We eliminated 18 hours of weekly manual coordination. The intelligent automation adapts to our team's patterns—it's like having a workflow expert working 24/7.",
      rating: 5,
      metric: "18hrs saved weekly",
      icon: Clock,
      improvement: "Reduced coordination overhead by 75%"
    },
    {
      name: "Dr. Emily Watson",
      role: "CTO",
      company: "InnovateLab",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The predictive insights are game-changing. FlowForge identified a hidden dependency that would have caused a 2-week delay. ROI was immediate and measurable.",
      rating: 5,
      metric: "2-week delay prevented",
      icon: TrendingUp,
      improvement: "Prevented $400K in delayed revenue"
    },
    {
      name: "James Park",
      role: "Engineering Director",
      company: "ScaleUp Dynamics",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "Integration was seamless—connected our entire stack in 20 minutes. The real-time optimization suggestions have improved our deployment success rate to 99.8%.",
      rating: 5,
      metric: "99.8% success rate",
      icon: Zap,
      improvement: "Deployment failures down 95%"
    },
    {
      name: "Lisa Thompson",
      role: "Product Operations Lead",
      company: "CloudFirst Technologies",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "FlowForge's AI caught a resource conflict that our project managers missed. The early warning system has transformed how we plan and execute complex projects.",
      rating: 5,
      metric: "Zero resource conflicts",
      icon: Target,
      improvement: "Project planning accuracy up 85%"
    },
    {
      name: "Alex Kumar",
      role: "Senior DevOps Engineer",
      company: "NextGen Solutions",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      content: "The workflow intelligence is incredible. It automatically optimized our CI/CD pipeline and reduced build times by 40%. Best tool investment we've made.",
      rating: 5,
      metric: "40% faster builds",
      icon: Zap,
      improvement: "Developer productivity up 60%"
    }
  ];

// const companies = [
//   { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
//   { name: "", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
//   { name: "", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
//   { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" },
//   { name: "", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
 
//   { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" },
//   { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
//   { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
//   { name: "Linear", logo: "https://avatars.githubusercontent.com/u/73899066?s=200&v=4" }
// ];


  const impactStats = [
    { value: "1,000+", label: "Teams Transformed", description: "Active users worldwide" },
    { value: "99.8%", label: "Uptime Delivered", description: "Enterprise-grade reliability" },
    { value: "4.9/5", label: "Customer Rating", description: "Highest in category" },
    { value: "2.3x", label: "Productivity Gain", description: "Average improvement" }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full mb-8">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-bold">Loved by Industry Leaders</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Real Teams
            </span>
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            See how teams like yours are achieving breakthrough productivity gains 
            with FlowForge&apos;s intelligent workflow optimization.
          </p>
        </motion.div>

        {/* Company logos with enhanced animation */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <p className="text-slate-500 font-medium">Trusted by teams at</p>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [-1200, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex space-x-16 items-center"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center space-x-3 group"
                >
                  <img
  src={company.logo}
  alt={company.name}
  className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition duration-300"
/>

                  <span className="text-2xl font-bold text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div> */}

        {/* Testimonials grid with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 space-y-6">
                  {/* Header with quote and rating */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-10 w-10 text-indigo-300" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-slate-700 leading-relaxed text-lg">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Metric highlight with icon */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <testimonial.icon className="h-6 w-6 text-emerald-600" />
                      <div className="text-lg font-bold text-emerald-700">
                        {testimonial.metric}
                      </div>
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">
                      {testimonial.improvement}
                    </div>
                  </div>

                  {/* Author info with enhanced styling */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-slate-200">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-indigo-600 font-bold">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            The Numbers Speak for Themselves
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-slate-900 font-bold text-lg mb-2">
                    {stat.label}
                  </div>
                  <div className="text-slate-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}