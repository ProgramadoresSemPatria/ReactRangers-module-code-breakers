import React from 'react'
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetContent, SheetHeader } from '../ui/sheet'
import ResourcesList from './ResourcesList'
import { Subtopic } from '@/data/interface'
import useProgress from '@/data/hooks/useProgress';
import { Progress } from '../ui/progress';
import { Checkbox } from '../ui/checkbox';

interface SubtopicItemProps {
    subtopic: Subtopic;
}

export default function SubtopicItem({ subtopic }: Readonly<SubtopicItemProps>) {
    const { progress, updateProgress } = useProgress();
    const handleCompletion = () => {
        const newValue = 100;
        updateProgress(subtopic.id, newValue);
    };

    const subtopicProgress = progress[subtopic.id] ?? 0;
    return (
        <div key={subtopic.id} className="p-4 bg-gray-50 rounded-lg">
            <Sheet>
                <SheetTrigger asChild>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <Checkbox onClick={handleCompletion} />
                            <h4 className="cursor-pointer font-semibold text-indigo-650">{subtopic.title}</h4>
                        </div>
                        <Progress value={subtopicProgress} />
                    </div>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{subtopic.title}</SheetTitle>
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
