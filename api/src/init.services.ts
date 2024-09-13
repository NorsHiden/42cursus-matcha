import { AuthService } from './auth/auth.service';
import { MyORM } from './orm/orm';
import { UserService } from './user/user.service';

export default async function initServices(orm: MyORM) {
  const userService = new UserService(orm);
  const authService = new AuthService(userService);

  return {
    userService,
    authService,
  };
}
