import { Router } from 'express';
import { UserService } from './user.service';

const router = Router();

export default function userController(userService: UserService) {
  return router;
}
