import { Router } from 'express';
import {
	registration,
	authorization,
	logout,
	checkAuth,
	refresh,
} from '../controllers/authentication.js';

export const routerAuth = new Router();

routerAuth.post('/auth/registration', registration);
routerAuth.post('/auth/authorization', authorization);
routerAuth.post('/auth/logout', logout);
routerAuth.get('/auth/check', checkAuth);
routerAuth.post('/auth/refresh', refresh);
