import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/data/context/ThemeContext";
import useTheme from "../src/data/hooks/useTheme";
import Header from "@/components/shared/Header";

jest.mock('../src/data/hooks/useTheme', () => ({
    __esModule: true,
    default: jest.fn(),
}))
describe("theme context and Toggle Functionality", () => {
    it("renders with light theme by default", () => {
        (useTheme as jest.Mock).mockReturnValue({
            theme: 'light',
            toggleTheme: jest.fn()
        })
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        )
        const header = screen.getByRole("banner")
        expect(header).toHaveClass("bg-slate-50")
        expect(header).not.toHaveClass("bg-gray-950");
    })
})