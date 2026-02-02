
import { GoogleGenAI } from "@google/genai";
import { BIO } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for ${BIO.name}. 
Your goal is to answer questions about him to potential employers or clients.

Identity:
- Name: ${BIO.name}
- Role: ${BIO.title}
- Location: ${BIO.location}
- Summary: ${BIO.summary}
- Personality: He is a student at Narula Institute of Technology (2029). He loves chess and reading.
- Contact: ${BIO.email} | ${BIO.phone}

Guidelines:
1. Be professional, friendly, and concise.
2. If asked about technical skills, highlight React, Tailwind, and JavaScript.
3. If asked about projects, mention that his latest portfolio is currently evolving with new work.
4. If you don't have an answer, invite the user to contact Soumik directly at his email.
5. Use markdown for better formatting (e.g., bullet points).
`;

export const chatWithAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Ensure API Key is used from the environment variable
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Can you try rephrasing?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Please try again in a moment!";
  }
};
