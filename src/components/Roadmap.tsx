'use client';
import React from 'react';
import { ReactFlow, Background, Controls, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { roadmapNodes, roadmapEdges } from '@/data/constants/roadmapFrontend.constant';
import { Merriweather, Open_Sans } from "next/font/google"

const merriwwather = Merriweather({ subsets: ['latin'], weight: '700' });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function RoadmapFlow() {
  const nodes = roadmapNodes.map((node) => ({
    ...node,
    style: {
      width: `${Math.min(400, Math.max(150, node.data.title.length * 15))}px`,
    },
    data: {
      ...node.data,
      label: (
        <motion.div
          className={`px-3 py-4 rounded-md shadow-md text-2xl ${node.type === 'block' ? 'bg-indigo-650 text-white font-bold '+ merriwwather.className : 'bg-green-350 text-gray-800 font-semibold ' + openSans.className
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

  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    console.log('Clicked node:', node);
  };

  return (
    <div className={"h-screen bg-gray-50 p-4" + merriwwather.className} >
      <h1 className="text-2xl font-bold text-indigo-650 mb-4 text-center">
        Front-end Development Roadmap
      </h1>
      <div className="h-[90%] w-full shadow-md rounded-lg overflow-hidden bg-white">
        <ReactFlow nodes={nodes} edges={edges} fitView onNodeClick={onNodeClick}>
          <Background color="#ddd" gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}