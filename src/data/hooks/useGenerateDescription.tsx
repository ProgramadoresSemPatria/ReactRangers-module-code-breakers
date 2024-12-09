'use state'
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!); 

export default function useGenerateDescription(title: string) {
    const [description, setDescription] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!title) return;

        const fetchDescription = async () => {
            setLoading(true);
            setError(null);

            try {
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const prompt = `Com exatos 350 caracteres, e em ingles. Crie uma descrição detalhada e criativa para o seguinte título: "${title}"`;

                const result = await model.generateContent(prompt);
                const generatedText = result.response.text();

                if (generatedText) {
                    setDescription(generatedText.trim());
                } else {
                    setError('Nenhuma descrição foi gerada.');
                }
            } catch (error) {
                console.error(error);
                setError('Erro ao gerar a descrição.');
            } finally {
                setLoading(false);
            }
        };

        fetchDescription();
    }, [title]);

    return { description, loading, error };
}
