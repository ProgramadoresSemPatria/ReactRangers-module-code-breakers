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
import useTheme from "@/data/hooks/useTheme";
import useGenerateDescription from "@/data/hooks/useGenerateDescription";
import { TextGenerateEffect } from "../ui/text-generate-effect";


export default function MainTopicNode({ data }: Readonly<MainTopicNodeProps>) {
  const { theme } = useTheme()
  const { description, loading } = useGenerateDescription(data.title);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <NodeStyle title={data.title} subtopics={data.subtopics} />
        </div>
      </SheetTrigger>
      <SheetContent className={`lg:min-w-[800px] overflow-auto border-l-2 ${theme === 'dark' ? 'bg-gray-950 border-gray-950 ' : 'bg-slate-50'}`}>
        <SheetHeader>
          <SheetTitle className={`text-3xl font-bold ${theme === 'dark' && 'text-white'}`}>{data.title}</SheetTitle>
          {data.description && (
            <SheetDescription className={`text-base ${theme === 'dark' && 'text-white'}`}>
              {loading ? (
                <p className="text-sm text-gray-500">Gerando descrição...</p>
              ) : (
                <TextGenerateEffect className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm mb-4 `} words={description ?? data.description} />

              )}
            </SheetDescription>
          )}
        </SheetHeader>

        {data.subtopics && data.subtopics.length > 0 && (
          <div className="mt-6">
            <h3 className={`text-2xl font-semibold mb-3 ${theme === 'dark' && 'text-white'}`}>Subtopics</h3>
            <div className={`space-y-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-zinc-200'}`}>
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