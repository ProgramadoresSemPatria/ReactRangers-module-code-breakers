'use client';
import React, { useState } from 'react';
import { ReactFlow, Background, Controls, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { roadmapNodes, roadmapEdges } from '@/data/constants/roadmapFrontend.constant';
import { Merriweather } from "next/font/google";
import MainTopicNode from './node-type/MainNode';
import MainEdge from '@/data/hooks/useMainEdger';
import TopicEdge from '@/data/hooks/useTopicEdger';
import { Resource } from '@/data/interface';

const merriweather = Merriweather({ subsets: ['latin'], weight: '700' });

const nodeTypes = {
  main: MainTopicNode,
};
const edgeTypes = {
  main: MainEdge,
  subtopic: TopicEdge,
};

export default function RoadmapFlow() {
  const [activeNodeResources, setActiveNodeResources] = useState<Resource[]>([]);
  
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

      const relatedSubtopics = roadmapNodes
        .map((roadmapNode) => roadmapNode.data.subtopics)
        .flat()
        .filter((subNode) => subNode.id === node.id);

      const resources = relatedSubtopics.flatMap((subNode) => subNode.resources || []);

      setActiveNodeResources(resources);
    }
  };

  return (
    <div className={"h-screen bg-gray-50 p-4" + merriweather.className}>
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

      {activeNodeResources.length > 0 && (
        <div className="mt-4 p-4 bg-gray-200 rounded-md">
          <h3 className="text-xl font-semibold mb-3">Active Node Resources</h3>
          <ul>
            {activeNodeResources.map((resource) => (
              <li key={resource.title} className="mb-2">
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}