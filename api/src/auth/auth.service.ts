import { MyORM } from '../orm/orm';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserService } from '../user/user.service';

export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) return user;

    return null;
  }

  generateToken(user: any): string {
    return jwt.sign(
      { sub: user.id, email: user.email },
      process.env.JWT_SECRET || '',
      { expiresIn: '7d' },
    );
  }
}
