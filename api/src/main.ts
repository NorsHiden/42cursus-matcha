import express from 'express';
import { MyORM } from './orm/orm';
import { generateFakeUsers } from './orm/seed/users';
import authRoutes from './auth/auth.controller';
import initServices from './init.services';
import authController from './auth/auth.controller';

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

  const services = await initServices(myOrm);

  app.use('/api/auth', authController(services.authService));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();
