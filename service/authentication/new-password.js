import { v4 as uuidv4 } from 'uuid';

import { PasswordReset } from '../../Model/Password-reset.js';
import { User } from '../../Model/User.js';
import bcrypt from 'bcrypt';

export async function newPasswordService(userId, newPassword) {
	try {
		const hashPassword = await bcrypt.hash(newPassword, 10);
		const userDB = await User.findOneAndUpdate(
			{ _id: userId },
			{ $set: { password: hashPassword } }
		);
		if (!userDB) throw { message: 'Ошибка при сохранении нового пароля!' };
		return { message: `Пароль изменен` };
	} catch (error) {
		throw error;
	}
}
