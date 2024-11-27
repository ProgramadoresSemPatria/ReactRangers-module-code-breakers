import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "../src/app/page";


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
    it("should render home title", () => {
        render(<Home />);

        const title = screen.getByText(/Front-end Development Roadmap/i);
        expect(title).toBeInTheDocument();
    })
})