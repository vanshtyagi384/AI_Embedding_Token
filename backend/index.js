    import express from 'express';
    import tokenizeText  from './Utitlites/tokenizer.js';
    import embedText from './Utitlites/embedding.js';
    
    const app = express();
    const port = 3000;

    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello, Express!');
    });

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });

    
app.post('/api/tokenize', express.json(), async (req, res) => {
        const { text } = req.body;
        const token = tokenizeText(text);
        const embedding = await embedText(text);
        console.log(embedding);
       return  res.status(200).json(
        {
          'tokens': token,
          'embedding': embedding
        });
    });
