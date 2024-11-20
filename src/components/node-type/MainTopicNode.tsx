import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ['latin'], weight: '700' });

export default function MainTopicNode({ data }: { data: { title: string } }) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <motion.div
        className={`px-3 py-4 rounded-md shadow-md text-2xl bg-indigo-650 text-white font-bold ${merriweather.className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data.title}
      </motion.div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
} 