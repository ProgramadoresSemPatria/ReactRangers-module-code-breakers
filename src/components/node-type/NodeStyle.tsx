import { Handle, Position } from '@xyflow/react'
import { motion } from 'framer-motion'
import React from 'react'
import useProgress from "@/data/hooks/useProgress";
import { Progress } from "../ui/progress";

interface NodeStyleProps {
    title: string;
}

export default function NodeStyle({ title }: Readonly<NodeStyleProps>) {
  const { progress } = useProgress();
  const topicProgress = progress[title] ?? 0;

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <motion.div
            className={`px-3 py-4 rounded-md shadow-md flex flex-col gap-6 text-2xl bg-indigo-650 text-white font-bold cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='text-center'>
              {title}
            </div>
            <div>
              <Progress value={topicProgress} />      
            </div>
          </motion.div>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}
