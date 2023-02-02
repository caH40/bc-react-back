import { Router } from 'express';
import {
	registration,
	authorization,
	logout,
	checkAuth,
	refresh,
	confirmEmail,
	resetPassword,
} from '../controllers/authentication.js';

export const routerAuth = new Router();

routerAuth.post('/auth/registration', registration);
routerAuth.post('/auth/authorization', authorization);
routerAuth.post('/auth/logout', logout);
routerAuth.get('/auth/check', checkAuth);
routerAuth.post('/auth/refresh', refresh);
routerAuth.post('/auth/confirm-email', confirmEmail);
routerAuth.post('/auth/reset-password', resetPassword);
