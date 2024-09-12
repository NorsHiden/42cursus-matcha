import { AuthService } from './auth/auth.service';
import { MyORM } from './orm/orm';

export default async function initServices(orm: MyORM) {
  const authService = new AuthService(orm);

  return {
    authService,
  };
}
