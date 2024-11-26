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
import useProgress from "@/data/hooks/useProgress";
import { Progress } from "../ui/progress";


export default function MainTopicNode({ data }: Readonly<MainTopicNodeProps>) {
  const { progress } = useProgress();
  const topicProgress = progress[data.title] ?? 0;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <NodeStyle title={data.title} />
          <Progress value={topicProgress} />      
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
        
        {data.subtopics && data.subtopics.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Subtopics</h3>
            <div className="space-y-4">
              {data.subtopics.map((subtopic) => (
                <SubtopicItem  key={subtopic.id} subtopic={subtopic} />
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>  
  );
} 