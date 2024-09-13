import { MyORM } from '../orm/orm';
import User from '../common/types/user.type';

export class UserService {
  constructor(private readonly orm: MyORM) {}

  async findOneByEmail(email: string) {
    return {} as User;
  }
}
