import { MyORM } from '../orm/orm';

export class AuthService {
  private readonly orm: MyORM;

  constructor(orm: MyORM) {
    this.orm = orm;
  }
}
