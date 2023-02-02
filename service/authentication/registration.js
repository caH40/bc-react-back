import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UserConfirm } from '../../Model/User-confirm.js';

import { User } from '../../Model/User.js';
import { mailService } from './nodemailer.js';
import { generateToken, saveToken } from './token.js';

export async function registrationService(username, email, password) {
	try {
		const checkUsername = await User.findOne({ username });
		if (checkUsername) return { message: `Username "${username}" уже занят`, status: 'wrong' };
		const checkEmail = await User.findOne({ email });
		if (checkEmail)
			return { message: `Пользователь с "${email}" уже существует`, status: 'wrong' };

		const hashPassword = await bcrypt.hash(password, 5);
		const activationToken = uuidv4();
		const { _id: id } = await User.create({
			username,
			email,
			password: hashPassword,
		});

		await UserConfirm.create({
			userId: id,
			date: Date.now(),
			activationToken,
			email,
		});

		const target = 'registration'; //для отправки письма для активации
		const sendedMail = await mailService(target, activationToken, email, username, password);

		const tokens = await generateToken({ username, email, id });
		await saveToken(id, tokens.refreshToken);

		const message = 'Регистрация прошла успешно';
		return { ...tokens, message, user: { username, email, id } };
	} catch (error) {
		console.log(error);
		throw error;
	}
}
