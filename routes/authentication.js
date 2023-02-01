import { Router } from 'express';
import { registration, authorization } from '../controllers/authentication.js';

export const routerAuth = new Router();

routerAuth.post('/registration', registration);
routerAuth.post('/authorization', authorization);
