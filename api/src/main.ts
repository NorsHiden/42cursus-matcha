import express, { Request, Response } from 'express';
import { MyORM } from './orm/orm';
import { generateFakeUsers } from './orm/seed/users';

async function bootstrap() {
  const app = express();

  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  const myOrm = new MyORM({
    connectionString: process.env.DATABASE_URL,
  });

  await myOrm.connect();

  // generate users for testing
  generateFakeUsers(myOrm, 10);

  app.get('/', (req: Request, res: Response) => {
    res.send('Api is Ready!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();
