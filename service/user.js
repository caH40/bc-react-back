import { User } from '../Model/User.js';

export async function getUserService(userId) {
	try {
		const userDB = await User.findOne({ _id: userId });
		return { message: 'Пользователь найден', user: userDB };
	} catch (error) {
		throw error;
	}
}
