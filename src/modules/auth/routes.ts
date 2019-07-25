import * as express from 'express';
import { Router } from 'express';

import Token from '../../../lib/token';
import AuthMiddlewares from './middlewares';

const router = Router();
const authMiddlewares = new AuthMiddlewares();

const user = {
  name: 'choy',
  pass: 'choy123'
};

router.post('/login', (req: express.Request, res: express.Response): void => {
  if (req.body.name !== user.name || req.body.password !== user.pass) {
    res.status(400).json({ message: 'Datos inválidos' });
    return void 0;
  }

  const token = new Token({ name: user.name });
  token.generate();

  res.status(200).json({
    message: 'OK',
    token: token.getToken()
  });
});

router.get('/profile', authMiddlewares.validatToken, (req: express.Request, res: express.Response): void => {
  res.json({ message: 'access' });
});

export default router;
