'use client'
import { RoadmapProps } from "@/data/interfaces";
import { motion } from "framer-motion";

export default function RoadmapItem({ roadmap }: Readonly<RoadmapProps>) {
    return (
      <motion.li
        className="p-4 mb-2 border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:border-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-900">{roadmap.name}</h3>
        <p className="text-gray-700">{roadmap.description}</p>
  
        {roadmap.subtopics && roadmap.subtopics.length > 0 && (
          <ul className="ml-6 mt-4 space-y-4">
            {roadmap.subtopics.map((subtopic) => (
              <RoadmapItem key={subtopic.id} roadmap={subtopic} />
            ))}
          </ul>
        )}
      </motion.li>
    );
  };
