'use client'
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ProgressContextType } from "../interface";

const ProgressContext = createContext<ProgressContextType>({} as ProgressContextType);

interface ProgressProviderProps {
    children: React.ReactNode;
}

export function ProgressProvider({ children }: Readonly<ProgressProviderProps>) {
    const [progress, setProgress] = useState<Record<string, number>>({}); 
    useEffect(() => {
        const storedProgress = localStorage.getItem('progress');
        if (storedProgress) {
            setProgress(JSON.parse(storedProgress));
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('progress', JSON.stringify(progress));
        }
    }, [progress]);

    const updateProgress = useCallback((id: string, value: number) => {
        setProgress((prev) => ({ ...prev, [id]: value }));
    }, [setProgress]);

    const contextValue = useMemo(() => {
        return { progress, updateProgress };
    }, [progress, updateProgress]);

    return (
        <ProgressContext.Provider value={contextValue}>
            {children}
        </ProgressContext.Provider>
    );
}

export default ProgressContext;
