import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Github, FileText, Brain, Zap, BarChart3 } from 'lucide-react';

const WorkflowDiagram = () => {
  const tools = [
    { icon: MessageSquare, name: 'Slack', color: 'from-green-400 to-green-600', delay: 0 },
    { icon: Github, name: 'GitHub', color: 'from-gray-700 to-gray-900', delay: 0.2 },
    { icon: FileText, name: 'Notion', color: 'from-blue-400 to-blue-600', delay: 0.4 },
  ];

  const aiFeatures = [
    { icon: Brain, name: 'AI Analysis', color: 'from-purple-500 to-purple-700', delay: 0.6 },
    { icon: Zap, name: 'Auto-Optimize', color: 'from-yellow-400 to-orange-500', delay: 0.8 },
    { icon: BarChart3, name: 'Predict Issues', color: 'from-red-400 to-red-600', delay: 1.0 },
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Central AI Hub */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-10"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
          <Brain className="w-12 h-12 text-white" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 border-2 border-dashed border-primary-300 rounded-3xl"
        />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Tool Connections */}
      {tools.map((tool, index) => {
        const angle = (index * 120) - 90; // Distribute evenly around circle
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: tool.delay }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Connection Line */}
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: tool.delay + 0.5 }}
              className="absolute inset-0 pointer-events-none"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                style={{
                  width: Math.abs(x) * 2 + 100,
                  height: Math.abs(y) * 2 + 100,
                  left: x > 0 ? -Math.abs(x) - 50 : -50,
                  top: y > 0 ? -Math.abs(y) - 50 : -50,
                }}
              >
                <motion.line
                  x1={x > 0 ? Math.abs(x) + 50 : 50}
                  y1={y > 0 ? Math.abs(y) + 50 : 50}
                  x2={x > 0 ? 50 : Math.abs(x) + 50}
                  y2={y > 0 ? 50 : Math.abs(y) + 50}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: tool.delay + 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Tool Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer`}
            >
              <tool.icon className="w-8 h-8 text-white" />
            </motion.div>
            
            {/* Tool Label */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 whitespace-nowrap">
              {tool.name}
            </div>

            {/* Data Flow Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: tool.delay + 1,
              }}
              className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-xl"
            />
          </motion.div>
        );
      })}

      {/* AI Features */}
      {aiFeatures.map((feature, index) => {
        const angle = (index * 120) + 30; // Offset from tools
        const radius = 180;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: feature.delay }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50 flex items-center space-x-2"
            >
              <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {feature.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-full"
        style={{
          width: '300px',
          height: '300px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default WorkflowDiagram;