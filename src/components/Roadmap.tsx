'use client';
import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { roadmapNodes, roadmapEdges } from '@/data/constants/roadmapFrontend.constant';


export default function RoadmapFlow() {
  const nodes = roadmapNodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      label: (
        <motion.div
          className={`p-2 rounded-md shadow-md ${
            node.type === 'block' ? 'bg-indigo-650 text-white font-bold' : 'bg-green-350 text-gray-800 font-medium'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {node.data.title}
        </motion.div>
      ),
    },
  }));

  const edges = roadmapEdges.map((edge) => ({
    ...edge,
    animated: true,
    style: {
      stroke: edge.type === 'subtopic' ? '#4814b0' : '#28d3a0',
      strokeWidth: 3,
    },
  }));
  

  return (
    <div className="h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-indigo-650 mb-4 text-center">
        Front-end Development Roadmap
      </h1>
      <div className="h-[90%] w-full shadow-md rounded-lg overflow-hidden bg-white">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background color="#ddd" gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}