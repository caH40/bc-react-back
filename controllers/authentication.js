import { authorizationService } from '../service/authentication/authorization.js';
import { logoutService } from '../service/authentication/logout.js';
import { registrationService } from '../service/authentication/registration.js';
import { validateAccessToken } from '../service/authentication/token.js';
import { refreshService } from '../service/authentication/refresh.js';

export async function registration(req, res) {
	try {
		const { username, email, password } = req.body;
		const response = await registrationService(username, email, password);

		res.cookie('refreshToken', response.refreshToken, {
			maxAge: 30 * 24 * 3600 * 1000,
			httpOnly: true,
			secure: true,
		});
		res.status(201).json({ ...response, refreshToken: undefined });
	} catch (error) {
		console.log(error);
		res.status(401).json('Непредвиденная ошибка');
	}
}

export async function authorization(req, res) {
	try {
		const { username, password } = req.body;
		const { refreshToken } = req.cookies;

		const response = await authorizationService(username, password, refreshToken);

		res.cookie('refreshToken', response.refreshToken, {
			maxAge: 30 * 24 * 3600 * 1000,
			httpOnly: true,
			secure: true,
		});
		res.status(201).json({ ...response, refreshToken: undefined });
	} catch (error) {
		console.log(error);
		res.status(401).json('Непредвиденная ошибка');
	}
}

export async function logout(req, res) {
	try {
		const { refreshToken } = req.cookies;

		const token = await logoutService(refreshToken);

		res.clearCookie('refreshToken');
		res.status(201).json({ ...token });
	} catch (error) {
		console.log(error);
		res.status(400).json('Непредвиденная ошибка');
	}
}

export async function checkAuth(req, res) {
	try {
		const { authorization } = req.headers;
		const accessToken = authorization.split(' ')[1];
		const user = validateAccessToken(accessToken);
		if (!user) return res.status(401).json({ message: 'Не авторизован' });
		console.log({ userData });
		res.status(201).json({ user });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Непредвиденная ошибка' });
	}
}

export async function refresh(req, res) {
	try {
		const { refreshToken } = req.cookies;

		const user = await refreshService(refreshToken);
		if (!user) return res.status(401).json({ message: 'Не авторизован' });

		res.status(201).json({ ...user });
	} catch (error) {
		console.log(error);
		res.status(401).json({ message: 'Не авторизован' });
	}
}
