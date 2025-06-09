import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Github, FileText, Brain, Zap, BarChart3, Users, Database, Globe } from 'lucide-react';

const WorkflowAnimation = () => {
  const tools = [
    { icon: MessageSquare, name: 'Slack', color: 'from-green-400 to-green-600', position: { x: -120, y: -80 } },
    { icon: Github, name: 'GitHub', color: 'from-gray-600 to-gray-800', position: { x: 120, y: -80 } },
    { icon: FileText, name: 'Notion', color: 'from-blue-400 to-blue-600', position: { x: -120, y: 80 } },
    { icon: Database, name: 'Database', color: 'from-purple-400 to-purple-600', position: { x: 120, y: 80 } },
    { icon: Users, name: 'Teams', color: 'from-orange-400 to-orange-600', position: { x: 0, y: -140 } },
    { icon: Globe, name: 'API', color: 'from-cyan-400 to-cyan-600', position: { x: 0, y: 140 } },
  ];

  const aiNodes = [
    { icon: Brain, name: 'AI Analysis', color: 'from-primary-500 to-primary-700', delay: 0.5 },
    { icon: Zap, name: 'Auto-Optimize', color: 'from-electric-400 to-electric-600', delay: 0.7 },
    { icon: BarChart3, name: 'Predict Issues', color: 'from-purple-400 to-purple-600', delay: 0.9 },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Central AI Hub */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-20"
      >
        <motion.div
          className="w-32 h-32 bg-gradient-to-r from-primary-600 to-electric-600 rounded-3xl flex items-center justify-center shadow-glow-lg"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.3)",
              "0 0 40px rgba(99, 102, 241, 0.6)",
              "0 0 20px rgba(99, 102, 241, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Brain className="w-16 h-16 text-white" />
        </motion.div>
        
        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-8 border-2 border-dashed border-primary-300/50 rounded-full"
        />
        
        {/* Pulse Ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-electric-400/20 rounded-full"
        />

        {/* Status Indicator */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Tool Connections */}
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="absolute"
          style={{
            left: `calc(50% + ${tool.position.x}px)`,
            top: `calc(50% + ${tool.position.y}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Connection Line */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{
              width: Math.abs(tool.position.x) * 2 + 100,
              height: Math.abs(tool.position.y) * 2 + 100,
              left: tool.position.x > 0 ? -Math.abs(tool.position.x) - 50 : -50,
              top: tool.position.y > 0 ? -Math.abs(tool.position.y) - 50 : -50,
            }}
          >
            <motion.line
              x1={tool.position.x > 0 ? Math.abs(tool.position.x) + 50 : 50}
              y1={tool.position.y > 0 ? Math.abs(tool.position.y) + 50 : 50}
              x2={tool.position.x > 0 ? 50 : Math.abs(tool.position.x) + 50}
              y2={tool.position.y > 0 ? 50 : Math.abs(tool.position.y) + 50}
              stroke="url(#connectionGradient)"
              strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
            />
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Tool Node */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-20 h-20 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center shadow-premium cursor-pointer relative overflow-hidden`}
          >
            <tool.icon className="w-10 h-10 text-white relative z-10" />
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            
            {/* Data Flow Animation */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-electric-400/20 rounded-2xl"
            />
          </motion.div>
          
          {/* Tool Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 whitespace-nowrap bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm"
          >
            {tool.name}
          </motion.div>
        </motion.div>
      ))}

      {/* AI Feature Nodes */}
      {aiNodes.map((node, index) => {
        const angle = (index * 120) + 45;
        const radius = 200;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={node.name}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: node.delay }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-premium border border-white/20 flex items-center space-x-3 min-w-[160px]"
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${node.color} rounded-xl flex items-center justify-center shadow-lg`}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <node.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <div className="text-sm font-semibold text-gray-800">{node.name}</div>
                <div className="text-xs text-gray-600">Real-time</div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Data Flow Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
          style={{
            left: '50%',
            top: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default WorkflowAnimation;