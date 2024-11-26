import React from 'react'
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetContent, SheetHeader } from '../ui/sheet'
import ResourcesList from './ResourcesList'
import { Subtopic } from './types'

interface SubtopicItemProps {
    subtopic: Subtopic;
}

export default function SubtopicItem({ subtopic }: SubtopicItemProps) {
  return (
    <div key={subtopic.id} className="p-4 bg-gray-50 rounded-lg">
        <Sheet>
        <SheetTrigger asChild>
            <h4 className="cursor-pointer font-semibold text-indigo-650">{subtopic.title}</h4>
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
            <ResourcesList resources={subtopic.resources} />
            )}
        </SheetContent> 
        </Sheet>
    </div>
  )
}
