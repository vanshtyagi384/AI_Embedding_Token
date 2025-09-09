import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";


function tokenizeText(text) {
 
    if (typeof text !== 'string') {
            return res.status(400).json({ error: 'Invalid input, expected a string.' });
        }
        const enc = new Tiktoken(o200k_base);   
        const tokens = enc.encode(text);
        const vocabsize = tokens.length;
        console.log(`Tokenized text: ${text} => Tokens: ${tokens}, Vocab Size: ${vocabsize}`);
       return {tokens, vocabsize};
}

export default tokenizeText;