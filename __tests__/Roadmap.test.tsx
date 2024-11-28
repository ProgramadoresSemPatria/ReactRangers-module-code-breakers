import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ProgressProvider } from "../src/data/context/ProgressContext";
import RoadmapFlow from "@/components/Roadmap";

interface ProgressProviderProps {
    children: React.ReactNode;
}

jest.mock('@xyflow/react', () => ({
    __esModule: true,
    ReactFlow: jest.fn(({ children }:  Readonly<ProgressProviderProps>) => <div>{children}</div>),
    Background: jest.fn(() => <div data-testid="background"></div>),
    Controls: jest.fn(() => <div data-testid="controls"></div>),
}))

describe("Home Component", () => {
    it("should render the roadmap component", () => {
        render(
          <ProgressProvider>
            <RoadmapFlow />
          </ProgressProvider>
        );
    
        const title = screen.getByText(/Front-end Development Roadmap/i);
        expect(title).toBeInTheDocument();
      });
      
})