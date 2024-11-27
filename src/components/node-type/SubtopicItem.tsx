import React from 'react'
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetContent, SheetHeader } from '../ui/sheet'
import ResourcesList from './ResourcesList'
import { Subtopic } from '@/data/interface'
import useProgress from '@/data/hooks/useProgress';
import { Progress } from '../ui/progress';

interface SubtopicItemProps {
    subtopic: Subtopic;
}

export default function SubtopicItem({ subtopic }: Readonly<SubtopicItemProps>) {
    const { progress, updateProgress } = useProgress();
    const handleCompletion = () => {
        const newValue = 100;
        updateProgress(subtopic.id, newValue);
    };

    const subtopicProgress = progress[subtopic.title] ?? 0;
    return (
        <div key={subtopic.id} className="p-4 bg-gray-50 rounded-lg">
            <Sheet>
                <SheetTrigger asChild>
                    <div>
                        <h4 className="cursor-pointer font-semibold text-indigo-650">{subtopic.title}</h4>
                        <button
                            onClick={handleCompletion}
                            className="px-2 py-1 text-sm bg-indigo-600 text-white rounded"
                        >
                            Completar
                        </button>
                        <Progress value={subtopicProgress} />
                    </div>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{subtopic.title}: {subtopicProgress}</SheetTitle>
                        {subtopic.description && (
                            <SheetDescription>
                                {subtopic.description}
                            </SheetDescription>
                        )}
                    </SheetHeader>
                    {subtopic.resources && subtopic.resources.length > 0 && (
                        <ResourcesList resources={subtopic.resources} subtopicId={subtopic.id} />
                    )}

                </SheetContent>
            </Sheet>
        </div>
    )
}
