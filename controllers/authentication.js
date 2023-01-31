import { registrationService } from '../service/authentication/registration.js';

export async function registration(req, res) {
	try {
		const { username, email, password } = req.body;
		const response = await registrationService(username, email, password);
		res.status(201).json(response);
	} catch (error) {
		console.log(error);
		res.status(401).json('Непредвиденная ошибка');
	}
}
