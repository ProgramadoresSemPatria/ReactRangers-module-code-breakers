'use client';
import React, { useState } from 'react';
import { ReactFlow, Background, Controls, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { roadmapNodes, roadmapEdges } from '@/data/constants/roadmapFrontend.constant';
import MainTopicNode from './node-type/MainNode';
import MainEdge from '@/data/hooks/useMainEdger';
import TopicEdge from '@/data/hooks/useTopicEdger';
import { Resource } from '@/data/interface';
import useTheme from '@/data/hooks/useTheme';

const nodeTypes = {
  main: MainTopicNode,
};
const edgeTypes = {
  main: MainEdge,
  subtopic: TopicEdge,
};

export default function RoadmapFlow() {
  const {theme} = useTheme()
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
    <main className={`h-screen ${theme === 'dark' ? 'bg-gray-950 ' : 'bg-stone-50'} p-4`}>
      <h1 className={`text-2xl font-bold py-4 text-center ${theme === 'dark' && 'text-white'}`}>
        Front-end Development Roadmap
      </h1>
      <section className={`h-[90%] w-full shadow-md rounded-lg overflow-hidden ${theme === 'dark' ?  'bg-gray-900' : 'bg-white'}`}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          onNodeClick={onNodeClick}
        >
          <Background color="#18191b" gap={16} />
          <Controls />
        </ReactFlow>
      </section>

      {activeNodeResources.length > 0 && (
        <div className="mt-4 p-4  rounded-md">
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
    </main>
  );
}