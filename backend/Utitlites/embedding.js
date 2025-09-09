import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPEN_API_KEY}
);

async function getEmbedding(text) {
    if (typeof text !== 'string') {
        throw new Error('Invalid input, expected a string.');
    }
    const result = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text,        
    encoding_format: "float",
    });
    return result.data[0].embedding.length;
}

export default getEmbedding;