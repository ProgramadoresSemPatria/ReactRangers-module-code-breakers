import React from 'react'

interface ResourcesListProps {
    resources: { 
        title: string;
        url: string;
    }[];
}

export default function ResourcesList({ resources }: Readonly<ResourcesListProps>) {
    if (!resources || resources.length === 0) return null;

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
            >
                {resource.title}
            </a>
            ))}
        </div>
    </div>
  )
}
