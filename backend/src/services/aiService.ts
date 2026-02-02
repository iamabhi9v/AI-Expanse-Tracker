import OpenAI from "openai";
import dotenv from "dotenv";

// 1. Load environment variables immediately
dotenv.config();

// 2. Initialize the client AFTER loading variables
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY, // This was undefined before
  baseURL: "https://api.groq.com/openai/v1",
});

export const parseExpense = async (input: string) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a professional expense parser. 
        Extract: amount (number), currency (default INR), category, description, and merchant.
        Allowed Categories: Food & Dining, Transport, Shopping, Entertainment, Bills & Utilities, Health, Travel, Other.
        Return ONLY a JSON object.`,
      },
      { role: "user", content: input },
    ],
    model: "llama-3.3-70b-versatile", // Using the working model we verified
    response_format: { type: "json_object" },
  });

  return JSON.parse(chatCompletion.choices[0].message.content || "{}");
};
