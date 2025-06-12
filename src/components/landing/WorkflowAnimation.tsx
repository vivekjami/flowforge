"use client";

import { motion } from "framer-motion";
import { Workflow, GitBranch, MessageSquare, FileText, Zap, ArrowRight } from "lucide-react";

export default function WorkflowAnimation() {
  const nodes = [
    { id: 1, icon: MessageSquare, label: "Slack", color: "bg-green-500", position: { x: 0, y: 0 } },
    { id: 2, icon: GitBranch, label: "GitHub", color: "bg-gray-800", position: { x: 200, y: -50 } },
    { id: 3, icon: FileText, label: "Notion", color: "bg-black", position: { x: 400, y: 0 } },
    { id: 4, icon: Zap, label: "AI Engine", color: "bg-indigo-600", position: { x: 200, y: 100 } },
  ];

  const connections = [
    { from: 1, to: 4 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <div className="relative w-[500px] h-[300px]">
        {/* Connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <motion.div
              key={index}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
              className="absolute"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                style={{
                  left: Math.min(fromNode.position.x, toNode.position.x),
                  top: Math.min(fromNode.position.y, toNode.position.y),
                  width: Math.abs(toNode.position.x - fromNode.position.x) + 60,
                  height: Math.abs(toNode.position.y - fromNode.position.y) + 60,
                }}
              >
                <motion.line
                  x1={fromNode.position.x < toNode.position.x ? 30 : Math.abs(toNode.position.x - fromNode.position.x) + 30}
                  y1={fromNode.position.y < toNode.position.y ? 30 : Math.abs(toNode.position.y - fromNode.position.y) + 30}
                  x2={toNode.position.x < fromNode.position.x ? 30 : Math.abs(toNode.position.x - fromNode.position.x) + 30}
                  y2={toNode.position.y < fromNode.position.y ? 30 : Math.abs(toNode.position.y - fromNode.position.y) + 30}
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            className="absolute"
            style={{
              left: node.position.x,
              top: node.position.y + 150,
            }}
          >
            <div className="relative group">
              <div className={`w-16 h-16 ${node.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer`}>
                <node.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Pulse effect */}
              <div className={`absolute inset-0 w-16 h-16 ${node.color} rounded-2xl opacity-30 animate-ping`} />
              
              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 whitespace-nowrap">
                {node.label}
              </div>

              {/* Hover tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Connected & Optimized
              </div>
            </div>
          </motion.div>
        ))}

        {/* Data flow animation */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 400, opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 1,
            ease: "easeInOut"
          }}
          className="absolute top-[140px] left-0"
        >
          <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg" />
        </motion.div>

        {/* AI insights bubble */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute top-0 right-0 glass rounded-xl p-4 max-w-xs"
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                AI Insight
              </div>
              <div className="text-xs text-gray-600">
                Detected bottleneck in code review process. Suggested optimization: Auto-assign reviewers based on expertise.
              </div>
              <div className="text-xs text-indigo-600 font-medium mt-2">
                87% confidence
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}