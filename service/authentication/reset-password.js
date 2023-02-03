import { v4 as uuidv4 } from 'uuid';

import { PasswordReset } from '../../Model/Password-reset.js';
import { User } from '../../Model/User.js';
import { mailService } from './nodemailer.js';

export async function resetPasswordService(email) {
	try {
		const userDB = await User.findOne({ email });
		if (!userDB) return { message: 'e-mail не найден', status: 'wrong' };

		const tokenReset = uuidv4();
		const passwordResetDB = await PasswordReset.create({
			userId: userDB._id,
			email,
			tokenReset,
			date: Date.now(),
		});

		const target = 'resetPassword';
		await mailService(target, tokenReset, email, userDB.username);

		return { message: `Сброс пароля `, email };
	} catch (error) {
		console.log(error);
		throw { message: `Ошибка при сбросе пароля` };
	}
}
