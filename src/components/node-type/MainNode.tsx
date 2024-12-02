import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NodeStyle from './NodeStyle';
import SubtopicItem from "./SubtopicItem";
import { MainTopicNodeProps } from "@/data/interface";


export default function MainTopicNode({ data }: Readonly<MainTopicNodeProps>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <NodeStyle title={data.title} subtopics={data.subtopics} />
        </div>
      </SheetTrigger>
      <SheetContent className='lg:min-w-[800px] overflow-auto bg-gray-950 '>
        <SheetHeader>
          <SheetTitle className="text-white">{data.title}</SheetTitle>
          {data.description && (
            <SheetDescription>
              {data.description}
            </SheetDescription>
          )}
        </SheetHeader>
        
        {data.subtopics && data.subtopics.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Subtopics</h3>
            <div className="space-y-4">
              {data.subtopics.map((subtopic) => (
                <SubtopicItem key={subtopic.id} subtopic={subtopic} />
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>  
  );
} 