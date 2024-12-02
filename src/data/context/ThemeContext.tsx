'use client'
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContextProps } from "../interface";

const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, [])

    const values = useMemo(() => {
        return { theme, toggleTheme };
    }, [theme, toggleTheme]);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContext