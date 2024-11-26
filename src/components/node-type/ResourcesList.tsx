import useProgress from '@/data/hooks/useProgress';
import React from 'react'

interface ResourcesListProps {
    resources: {
        title: string;
        url: string;
    }[];
    subtopicId: string;
}

export default function ResourcesList({ resources, subtopicId }: Readonly<ResourcesListProps>) {
    const { progress, updateProgress } = useProgress();
    if (!resources || resources.length === 0) return null;

    const handleResourceClick = () => {
        const completedResources = progress[subtopicId] ?? 0;
        const newValue = Math.min(100, completedResources + 100 / resources.length);
        updateProgress(subtopicId, newValue);
    };
    return (
        <div className="mt-2">
            <p className="text-sm font-medium">Resources:</p>
            <div className="flex flex-col gap-1 mt-1">
                {resources.map((resource) => (
                    <a
                        href={resource.url}
                        key={resource.title}
                        className="text-sm text-indigo-650 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleResourceClick}
                    >
                        {resource.title}
                    </a>
                ))}
            </div>
        </div>
    )
}
