import bcrypt from 'bcrypt';

import { User } from '../../Model/User.js';
import { generateToken, removeToken, saveToken } from './token.js';

export async function authorizationService(username, password, refreshToken) {
	try {
		const userDB = await User.findOne({ username });

		const wrongAuth = { message: `Неверный Логин или Пароль`, status: 'wrong' };
		if (!userDB) return wrongAuth;

		const isValidPassword = await bcrypt.compare(password, userDB.password);
		if (!isValidPassword) return wrongAuth;

		await removeToken(refreshToken);

		const tokens = await generateToken({ username, email: userDB.email, id: userDB._id });
		await saveToken(userDB._id, tokens.refreshToken);

		const message = 'Авторизация прошла успешно';
		return { ...tokens, user: username, email: userDB.email, id: userDB._id, message };
	} catch (error) {
		console.log(error);
		throw error;
	}
}
