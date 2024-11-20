import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ['latin'] });

export default function TopicNode({ data }: { data: { title: string } }) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <motion.div
        className={`px-3 py-4 rounded-md shadow-md text-2xl bg-green-350 text-gray-800 font-semibold ${openSans.className}`}
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