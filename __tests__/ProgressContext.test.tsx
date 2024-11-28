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
})