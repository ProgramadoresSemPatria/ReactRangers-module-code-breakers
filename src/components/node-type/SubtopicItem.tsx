import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
    const handleCompletion = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newValue = progress[subtopic.id] === 100 ? 0 : 100;
        updateProgress(subtopic.id, newValue);

        if (subtopic.resources) {
            subtopic.resources.forEach(resource => {
                const resourceKey = `${subtopic.id}-${resource.title}`;
                updateProgress(resourceKey, newValue);
            });
        }
    };

    const subtopicProgress = progress[subtopic.id] ?? 0;
    const isCompleted = subtopicProgress === 100;

    return (
        <Accordion key={subtopic.id} type="single" collapsible>
            <AccordionItem value={subtopic.id}>
                <div className="flex items-center gap-2">
                    <div onClick={handleCompletion}>
                        <Checkbox
                            checked={isCompleted}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className='w-full'>
                        <AccordionTrigger className="w-full">
                            <div className='flex flex-col gap-2 w-full'>
                                <h4 className="cursor-pointer font-semibold text-gray-900 text-left">{subtopic.title}</h4>
                                <Progress className='bg-gray-300 h-2' value={subtopicProgress} />
                            </div>
                        </AccordionTrigger>
                    </div>
                </div>
                <AccordionContent>
                    {subtopic.description && (
                        <p className="text-gray-500 text-sm mb-4">{subtopic.description}</p>
                    )}
                    {subtopic.resources && subtopic.resources.length > 0 && (
                        <ResourcesList resources={subtopic.resources} subtopicId={subtopic.id} />
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
