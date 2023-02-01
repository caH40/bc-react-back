import { registrationService } from '../service/authentication/registration.js';

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
