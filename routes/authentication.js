import { Router } from 'express';
import { registration } from '../controllers/authentication.js';

export const routerAuth = new Router();

routerAuth.post('/registration', registration);
