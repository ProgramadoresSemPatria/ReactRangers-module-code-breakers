import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const merriweather = Merriweather({ subsets: ['latin'], weight: '700' });

export default function MainTopicNode({ data }: { data: { title: string, description: string, resources?: { title: string, url: string }[] } }) {
  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Handle type="target" position={Position.Top} />
          <motion.div
            className={`px-3 py-4 rounded-md shadow-md text-2xl bg-indigo-650 text-white font-bold ${merriweather.className} cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.div>
          <Handle type="source" position={Position.Bottom} />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{data.title}</SheetTitle>
          <SheetDescription>
            {data.description}
          </SheetDescription>
        </SheetHeader>
        {data.resources && data.resources.length > 0 && (
          <div className="flex flex-col gap-2 mt-6">
            {data.resources.map((resource) => (
              <a 
                href={resource.url} 
                key={resource.title} 
                className="text-indigo-650 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.title}
              </a>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
} 