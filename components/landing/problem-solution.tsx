'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  DollarSign,
  Zap,
  Brain,
  Target,
  TrendingUp
} from 'lucide-react'

const problems = [
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Process Blindness",
    description: "Teams have no visibility into workflow bottlenecks",
    stat: "73% of businesses",
    color: "text-red-400"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Manual Chaos",
    description: "3 hours per day of manual activities with automation potential",
    stat: "40% time waste",
    color: "text-orange-400"
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: "Tool Fragmentation",
    description: "Average company uses 254 SaaS apps with zero integration",
    stat: "254 disconnected tools",
    color: "text-yellow-400"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Hidden Costs",
    description: "Manual tracking leads to 67% audit failures",
    stat: "$2.9T lost annually",
    color: "text-red-500"
  }
]

const solutions = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Process Discovery",
    description: "Automatically discovers existing workflows through AI analysis",
    benefit: "Zero setup required",
    color: "text-blue-400"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Predictive Intelligence",
    description: "Predicts bottlenecks 72 hours before they impact business",
    benefit: "Proactive optimization",
    color: "text-purple-400"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Smart Orchestration",
    description: "Intelligently optimizes processes using real-time data",
    benefit: "Self-improving workflows",
    color: "text-green-400"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Universal Integration",
    description: "Orchestrates tools across your entire tech stack seamlessly",
    benefit: "200+ connectors",
    color: "text-cyan-400"
  }
]

export function ProblemSolution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-red-400 border-red-400/30">
            The $2.9 Trillion Problem
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Why Workflows <span className="text-red-400">Fail</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            73% of businesses struggle with process inefficiencies, costing the global economy 
            <span className="text-red-400 font-bold"> $2.9 trillion annually</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-dark border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className={`${problem.color} mb-4`}>
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{problem.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{problem.description}</p>
                  <Badge variant="outline" className={`${problem.color} border-current`}>
                    {problem.stat}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            The AI-Powered Solution
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How FlowForge <span className="gradient-text">Transforms</span> Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The world's first AI-native workflow intelligence platform that learns, predicts, and optimizes 
            <span className="text-blue-400 font-bold"> automatically</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="glass border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full hover:glow">
                <CardContent className="p-6">
                  <div className={`${solution.color} mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{solution.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{solution.description}</p>
                  <Badge variant="glow" className={`${solution.color} bg-current/20`}>
                    {solution.benefit}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Card className="glass-dark border-green-500/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Real-World Impact</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">73%</div>
                  <div className="text-gray-300">Faster Workflows</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$1.2M</div>
                  <div className="text-gray-300">Saved Per Company</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">72hrs</div>
                  <div className="text-gray-300">Early Bottleneck Detection</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}