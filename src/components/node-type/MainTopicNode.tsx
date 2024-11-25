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

export default function MainTopicNode({ data }: { data: { 
  title: string, 
  description?: string, 
  subtopics?: Array<{
    id: string,
    title: string,
    description?: string,
    resources?: Array<{ title: string, url: string }>
  }>,
  resources?: Array<{ title: string, url: string }> 
}}) {
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
          {data.description && (
            <SheetDescription>
              {data.description}
            </SheetDescription>
          )}
        </SheetHeader>
        
        {/* Main topic resources */}
        {data.resources && data.resources.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <div className="flex flex-col gap-2">
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
          </div>
        )}

        {/* Subtopics section */}
        {data.subtopics && data.subtopics.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Subtopics</h3>
            <div className="space-y-4">
              {data.subtopics.map((subtopic) => (
                <div key={subtopic.id} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-650">{subtopic.title}</h4>
                  {subtopic.description && (
                    <p className="text-sm text-gray-600 mt-1">{subtopic.description}</p>
                  )}
                  {subtopic.resources && subtopic.resources.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Resources:</p>
                      <div className="flex flex-col gap-1 mt-1">
                        {subtopic.resources.map((resource) => (
                          <a 
                            href={resource.url} 
                            key={resource.title} 
                            className="text-sm text-indigo-650 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resource.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
} 