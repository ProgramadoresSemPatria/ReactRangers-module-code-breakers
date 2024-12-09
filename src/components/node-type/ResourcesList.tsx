import useProgress from '@/data/hooks/useProgress';
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import useTheme from '@/data/hooks/useTheme';

interface ResourcesListProps {
    resources: {
        title: string;
        url: string;
    }[];
    subtopicId: string;
}

export default function ResourcesList({ resources, subtopicId }: Readonly<ResourcesListProps>) {
    const { progress, updateProgress } = useProgress();
    const { theme } = useTheme();
    if (!resources || resources.length === 0) return null;

    const handleResourceClick = (resourceTitle: string) => {
        const resourceKey = `${subtopicId}-${resourceTitle}`;
        const isCompleted = progress[resourceKey] === 100;

        updateProgress(resourceKey, isCompleted ? 0 : 100);

        const updatedProgress = resources.reduce((count, resource) => {
            const key = `${subtopicId}-${resource.title}`;

            if (key === resourceKey) {
                return count + (isCompleted ? 0 : 1);
            }

            return count + (progress[key] === 100 ? 1 : 0);
        }, 0);

        const overallProgress = (updatedProgress / resources.length) * 100;
        updateProgress(subtopicId, overallProgress);

        if (overallProgress === 100) {
            updateProgress(subtopicId, 100);
        }
    };

    return (
        <div className="pb-8">
            <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-gray-100' : 'text-black'}`}>Resources:</h4>
            <div className="flex flex-col gap-2 mt-1">
                {resources.map((resource) => {
                    const resourceKey = `${subtopicId}-${resource.title}`;
                    const isCompleted = progress[resourceKey] === 100;

                    return (
                        <div key={resource.title} className="flex items-center space-x-2">
                            <Checkbox
                                id={resourceKey}
                                checked={isCompleted}
                                onCheckedChange={() => handleResourceClick(resource.title)}
                            />
                            <a
                                href={resource.url}
                                className={`cursor-pointer text-base font-semibold underline ${theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-650 hover:text-indigo-600'} transition-colors`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => !isCompleted && handleResourceClick(resource.title)}
                            >
                                {resource.title}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
