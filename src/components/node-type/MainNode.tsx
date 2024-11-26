import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NodeStyle from './NodeStyle';
import ResourcesList from "./ResourcesList";
import SubtopicItem from "./SubtopicItem";
import { MainTopicNodeProps } from "./types";


export default function MainTopicNode({ data }: MainTopicNodeProps) {
  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <NodeStyle title={data.title} />      
        </div>
    </SheetTrigger>
      <SheetContent className='lg:min-w-[800px]'>
        <SheetHeader>
          <SheetTitle>{data.title}</SheetTitle>
          {data.description && (
            <SheetDescription>
              {data.description}
            </SheetDescription>
          )}
        </SheetHeader>
        
        {/* Subtopics section */}
        {data.subtopics && data.subtopics.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Subtopics</h3>
            <div className="space-y-4">
              {data.subtopics.map((subtopic) => (
                <SubtopicItem subtopic={subtopic} />
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
} 