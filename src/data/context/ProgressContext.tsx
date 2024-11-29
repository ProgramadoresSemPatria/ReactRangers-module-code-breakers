'use client';
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ProgressContextType } from "../interface";
import { BackgroundLines } from "@/components/ui/background-lines";

const ProgressContext = createContext<ProgressContextType>({} as ProgressContextType);

interface ProgressProviderProps {
    children: React.ReactNode;
}

export function ProgressProvider({ children }: Readonly<ProgressProviderProps>) {
    const [progress, setProgress] = useState<Record<string, number>>({});
    const [isCongratulationsVisible, setIsCongratulationsVisible] = useState(false);
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

        const allCompleted = Object.values(progress).every(value => value === 100);
        if (allCompleted) {
            setIsCongratulationsVisible(true);

            const timer = setTimeout(() => {
                setIsCongratulationsVisible(false);
            }, 10000);

            return () => clearTimeout(timer);
        } else {
            setIsCongratulationsVisible(false);
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
            {isCongratulationsVisible && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                    zIndex: 9999,
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    width: '100%'
                }}>
                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-transparent">
                        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-purple-600 to-pink-400 dark:from-purple-500 dark:to-pink-300 text-4xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                            Congratulations!
                        </h2>
                        <p className="max-w-xl mx-auto text-sm md:text-lg text-yellow-300 dark:text-yellow-200 text-center">
                            You&apos;ve completed all the challenges! Enjoy your success!
                        </p>
                    </BackgroundLines>
                </div>
            )}
            {children}
        </ProgressContext.Provider>
    );
}

export default ProgressContext;
