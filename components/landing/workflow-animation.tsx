'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  GitBranch, 
  MessageSquare, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Brain,
  TrendingUp
} from 'lucide-react'

interface WorkflowNode {
  id: string
  label: string
  icon: React.ReactNode
  status: 'idle' | 'processing' | 'complete' | 'warning'
  x: number
  y: number
}

const initialNodes: WorkflowNode[] = [
  { id: 'slack', label: 'Slack', icon: <MessageSquare className="w-6 h-6" />, status: 'idle', x: 50, y: 100 },
  { id: 'github', label: 'GitHub', icon: <GitBranch className="w-6 h-6" />, status: 'idle', x: 200, y: 50 },
  { id: 'notion', label: 'Notion', icon: <FileText className="w-6 h-6" />, status: 'idle', x: 350, y: 100 },
  { id: 'ai', label: 'AI Engine', icon: <Brain className="w-6 h-6" />, status: 'idle', x: 200, y: 200 },
  { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="w-6 h-6" />, status: 'idle', x: 350, y: 250 },
]

const connections = [
  { from: 'slack', to: 'ai' },
  { from: 'github', to: 'ai' },
  { from: 'notion', to: 'ai' },
  { from: 'ai', to: 'analytics' },
]

export function WorkflowAnimation() {
  const [nodes, setNodes] = useState(initialNodes)
  const [activeConnection, setActiveConnection] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate workflow processing
      const sequence = ['slack', 'github', 'notion', 'ai', 'analytics']
      
      sequence.forEach((nodeId, index) => {
        setTimeout(() => {
          setNodes(prev => prev.map(node => 
            node.id === nodeId 
              ? { ...node, status: 'processing' as const }
              : node
          ))
          
          // Set active connection
          if (index < sequence.length - 1) {
            const connection = connections.find(c => c.from === nodeId)
            if (connection) {
              setActiveConnection(`${connection.from}-${connection.to}`)
            }
          }
          
          // Complete processing after delay
          setTimeout(() => {
            setNodes(prev => prev.map(node => 
              node.id === nodeId 
                ? { ...node, status: 'complete' as const }
                : node
            ))
            setActiveConnection(null)
          }, 800)
        }, index * 1000)
      })
      
      // Reset after complete cycle
      setTimeout(() => {
        setNodes(prev => prev.map(node => ({ ...node, status: 'idle' as const })))
      }, sequence.length * 1000 + 2000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const getNodeColor = (status: string) => {
    switch (status) {
      case 'processing': return 'from-blue-500 to-purple-600'
      case 'complete': return 'from-green-500 to-emerald-600'
      case 'warning': return 'from-yellow-500 to-orange-600'
      default: return 'from-gray-600 to-gray-700'
    }
  }

  const getNodeGlow = (status: string) => {
    switch (status) {
      case 'processing': return 'shadow-lg shadow-blue-500/50'
      case 'complete': return 'shadow-lg shadow-green-500/50'
      case 'warning': return 'shadow-lg shadow-yellow-500/50'
      default: return ''
    }
  }

  return (
    <div className="relative w-full h-96 glass rounded-2xl p-8 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection) => {
          const fromNode = nodes.find(n => n.id === connection.from)
          const toNode = nodes.find(n => n.id === connection.to)
          if (!fromNode || !toNode) return null

          const isActive = activeConnection === `${connection.from}-${connection.to}`
          
          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={fromNode.x + 24}
              y1={fromNode.y + 24}
              x2={toNode.x + 24}
              y2={toNode.y + 24}
              stroke={isActive ? '#3b82f6' : '#374151'}
              strokeWidth={isActive ? 3 : 2}
              strokeDasharray={isActive ? '0' : '5,5'}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className={isActive ? 'drop-shadow-lg' : ''}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute w-12 h-12 rounded-xl bg-gradient-to-br ${getNodeColor(node.status)} ${getNodeGlow(node.status)} flex items-center justify-center text-white transition-all duration-500`}
          style={{ left: node.x, top: node.y }}
          animate={{
            scale: node.status === 'processing' ? 1.1 : 1,
            rotate: node.status === 'processing' ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {node.icon}
          
          {/* Processing indicator */}
          {node.status === 'processing' && (
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-blue-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
          
          {/* Complete checkmark */}
          {node.status === 'complete' && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <CheckCircle className="w-3 h-3 text-white" />
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* AI Insights Panel */}
      <motion.div
        className="absolute bottom-4 right-4 glass-dark rounded-lg p-3 max-w-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-semibold text-yellow-400">AI Insight</span>
        </div>
        <p className="text-xs text-gray-300">
          Bottleneck predicted in GitHub reviews. Suggesting auto-assignment to reduce 40% delay.
        </p>
      </motion.div>

      {/* Floating metrics */}
      <motion.div
        className="absolute top-4 left-4 glass-dark rounded-lg p-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-xs text-green-400 font-semibold">+73% Efficiency</div>
      </motion.div>
    </div>
  )
}