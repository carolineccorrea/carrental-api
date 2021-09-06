import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from './app/model/User';
import UserController from './app/controller/UserController';

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/user',UserController.store)

export default routes;
