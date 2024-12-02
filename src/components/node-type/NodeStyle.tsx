import { Handle, Position } from '@xyflow/react'
import { motion } from 'framer-motion'
import React from 'react'
import useProgress from "@/data/hooks/useProgress";
import { Progress } from "../ui/progress";
import { Subtopic } from '@/data/interface';
import useTheme from '@/data/hooks/useTheme';

interface NodeStyleProps {
  title: string;
  subtopics?: Subtopic[];
}

export default function NodeStyle({ title, subtopics }: Readonly<NodeStyleProps>) {
  const { progress } = useProgress();

  const calculateNodeProgress = () => {
    if (!subtopics || subtopics.length === 0) return 0;

    const totalProgress = subtopics.reduce((sum, subtopic) => {
      const subtopicProgress = progress[subtopic.id] ?? 0;
      return sum + subtopicProgress;
    }, 0);

    return totalProgress / subtopics.length;
  };

  const nodeProgress = calculateNodeProgress();
  const { theme } = useTheme()
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <motion.div
        className={`px-3 py-4 rounded-md shadow-md flex flex-col gap-6 text-2xl ${theme === "dark" ? 'bg-green-350 text-slate-950 ' : 'bg-indigo-650 text-white '} font-bold cursor-pointer`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='text-center'>
          {title}
        </div>
        <div>
          <Progress value={nodeProgress} />
        </div>
      </motion.div>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}
