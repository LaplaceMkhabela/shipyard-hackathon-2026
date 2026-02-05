// src/services/recipeService.ts

const GROQ_API_KEY = 'YOUR_GROQ_API_KEY'; // Replace with your actual key
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export const fetchIngredientsFromUrl = async (url: string): Promise<Ingredient[]> => {
  const prompt = `Extract the ingredients from this recipe URL: ${url}. 
  Return the response as a JSON array of objects, where each object has "name", "quantity", and "unit".
  Do not include any conversational text, just the JSON array.`;

  try {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192', // Or another appropriate model
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that parses recipes into JSON data.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.1, // Low temperature for consistent JSON output
      }),
    });

    const data = await response.json();
    
    // Parse the stringified JSON response from the LLM
    const ingredientsString = data.choices[0].message.content;
    return JSON.parse(ingredientsString);
    
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw new Error('Failed to parse recipe');
  }
};