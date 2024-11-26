'use client';
import React, { useState } from 'react';
import { ReactFlow, Background, Controls, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { roadmapNodes, roadmapEdges } from '@/data/constants/roadmapFrontend.constant';
import { Merriweather } from "next/font/google";
import MainTopicNode from './node-type/MainNode';
import MainEdge from './edge-type/MainEdge';
import TopicEdge from './edge-type/TopicEdge';

const merriweather = Merriweather({ subsets: ['latin'], weight: '700' });

const nodeTypes = {
  main: MainTopicNode,
};

const edgeTypes = {
  main: MainEdge,
  subtopic: TopicEdge,
};

export default function RoadmapFlow() {
  const [activeNodeResources, setActiveNodeResources] = useState<{ title: string; url: string }[]>([]);
  const nodes = roadmapNodes.map((node) => ({
    ...node,
    style: {
      width: `${Math.min(400, Math.max(150, node.data.title.length * 15))}px`,
    },
  }));

  const edges = roadmapEdges.map((edge) => ({
    ...edge,
    animated: true,
  }));

  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    if (node.type === "main") {
      const relatedSubtopics = roadmapNodes.filter((subNode) => subNode.parentNode === node.id);
      const resources = relatedSubtopics.flatMap((subNode) => subNode.data.resources || []);
      setActiveNodeResources(resources);
    }
  };

  return (
    <div className={"h-screen bg-gray-50 p-4" + merriweather.className} >
      <h1 className="text-2xl font-bold text-indigo-650 mb-4 text-center">
        Front-end Development Roadmap
      </h1>
      <div className="h-[90%] w-full shadow-md rounded-lg overflow-hidden bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          onNodeClick={onNodeClick}
        >
          <Background color="#ddd" gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}