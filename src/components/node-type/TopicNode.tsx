import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';
import { Open_Sans } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const openSans = Open_Sans({ subsets: ['latin'] });

export default function TopicNode({ data }: { data: { title: string, description?: string, resources?: { title: string, url: string }[] } }) {
  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Handle type="target" position={Position.Top} />
          <motion.div
            className={`px-3 py-4 rounded-md shadow-md text-2xl bg-green-350 text-gray-800 font-semibold ${openSans.className} cursor-pointer`}
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
          {data.description && (
            <SheetDescription>
              {data.description}
            </SheetDescription>
          )}
        </SheetHeader>
        {data.resources && data.resources.length > 0 && (
          <div className="flex flex-col gap-2 mt-6">
            {data.resources.map((resource) => (
              <a 
                href={resource.url} 
                key={resource.title} 
                className="text-green-350 hover:underline"
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