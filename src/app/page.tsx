'use client'
import { motion } from "framer-motion";
import FRONTEND_ROADMAP from "@/data/constants/FontendRoadmap.constant";
import RoadmapItem from "@/components/RoadmapItem";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
        Front-End Developer Roadmap
      </h1>

      <motion.ul
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {FRONTEND_ROADMAP.map((item) => (
          <RoadmapItem key={item.id} roadmap={item} />
        ))}
      </motion.ul>
    </div>
  );
};