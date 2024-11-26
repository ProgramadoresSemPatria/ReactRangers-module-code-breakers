import { Handle, Position } from '@xyflow/react'
import { motion } from 'framer-motion'
import React from 'react'

interface NodeStyleProps {
    title: string;
}

export default function NodeStyle({ title }: Readonly<NodeStyleProps>) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <motion.div
            className={`px-3 py-4 rounded-md shadow-md text-2xl bg-indigo-650 text-white font-bold cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.div>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}
