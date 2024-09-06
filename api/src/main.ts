import express, { Request, Response } from 'express';

function bootstrap() {
  const app = express();

  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Api is Ready!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();
