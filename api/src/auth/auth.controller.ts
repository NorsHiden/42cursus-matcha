import { Router } from 'express';
import { AuthService } from './auth.service';

const router = Router();

export default function authController(authService: AuthService) {
  router.post('/login', async (req, res) => {
    res.json({
      status: 200,
      message: 'done',
    });
  });

  return router;
}
