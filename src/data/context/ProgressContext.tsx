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
        localStorage.setItem('progress', JSON.stringify(progress));
    }, [progress]);

    useEffect(() => {
        const progressValues = Object.values(progress);
        const allCompleted = progressValues.length === 98 && progressValues.every(value => value === 100);
        setIsCongratulationsVisible(allCompleted);

        if (allCompleted) {
            const timer = setTimeout(() => setIsCongratulationsVisible(false), 15000);
            return () => clearTimeout(timer);
        }

    }, [progress]);

    const updateProgress = useCallback((id: string, value: number) => {
        setProgress((prev) => ({ ...prev, [id]: value }));
    }, []);

    const contextValue = useMemo(() => ({ progress, updateProgress }), [progress, updateProgress]);

    return (
        <ProgressContext.Provider value={contextValue}>
            {isCongratulationsVisible && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    textAlign: 'center',
                    padding: '20px',
                    zIndex: 9999,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    width: '100%',
                    height: '100%'
                }}>
                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-transparent">
                        <h2 className="text-2xl text-white font-bold   ">
                            Congratulations!
                        </h2>
                        <p className="text-white text-lg">
                            You&apos;ve completed all the resources! Way to go!
                        </p>
                    </BackgroundLines>
                </div>
            )}
            {children}
        </ProgressContext.Provider>
    );
}

export default ProgressContext;
