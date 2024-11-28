import React from "react";
import { renderHook, act } from "@testing-library/react";
import useProgress from "@/data/hooks/useProgress";
import ProgressContext, { ProgressProvider } from "@/data/context/ProgressContext";

describe('ProgressProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ProgressProvider>{children}</ProgressProvider>
    )
    test('should localStorage initial progress loading', () => {
        const mockProgress = { "subtopic-1": 50, "subtopic-2-resource-1": 100 }
        localStorage.setItem('progress', JSON.stringify(mockProgress))
        const { result } = renderHook(() => useProgress(), { wrapper });
        expect(result.current.progress).toEqual(mockProgress)
    })
    test('should update subtopic progress correctly', () => {
        const { result } = renderHook(() => React.useContext(ProgressContext), { wrapper });

        act(() => {
            result.current.updateProgress('subtopic-1', 100)
        })
        expect(result.current.progress['subtopic-1']).toBe(100);
    })
    test('should update feature progress and calculates overall subtopic progress', () => {
        const mockResources = ['resource-1', 'resource-2']
        const subtopicId = 'subtopic-1'

        const { result } = renderHook(() => React.useContext(ProgressContext), { wrapper })

        act(() => {
            result.current.updateProgress(`${subtopicId}-${mockResources[0]}`, 100);
        });

        expect(result.current.progress[`${subtopicId}-${mockResources[0]}`]).toBe(100);

        act(() => {
            const totalCompleted = mockResources.reduce((acc, resource) => {
                const key = `${subtopicId}-${resource}`;
                return acc + (result.current.progress[key] || 0);
            }, 0)

            const overallProgress = (totalCompleted / (mockResources.length * 100)) * 100;
            result.current.updateProgress(subtopicId, overallProgress);
        })
        expect(result.current.progress[subtopicId]).toBe(50);
    })
})