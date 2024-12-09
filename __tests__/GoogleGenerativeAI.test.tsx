import { waitFor } from "@testing-library/react";
import useGenerateDescription from "../src/data/hooks/useGenerateDescription";
import { renderHook } from "@testing-library/react";
jest.mock('@google/generative-ai', () => {
    return {
        GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
            getGenerativeModel: jest.fn().mockReturnValue({
                generateContent: jest.fn().mockImplementation((prompt) => {
                    if (prompt.includes("error")) {
                        throw new Error("API Error");
                    }
                    return Promise.resolve({
                        response: {
                            text: () => "Mocked description text.",
                        },
                    });
                }),
            }),
        })),
    };
});
describe('useGenerateDescription', () => {

    it('should return a description for a valid title', async () => {
        const { result } = renderHook(() =>
            useGenerateDescription('Valid Title')
        );

        expect(result.current.loading).toBe(true);

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.description).toBe('Mocked description text.');
        expect(result.current.error).toBe(null);
    });
})