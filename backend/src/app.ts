import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API is running...');
});

export default app;
