import { User } from '../Model/User.js';

export async function getUserService(userId) {
	try {
		const userDB = await User.findOne({ _id: userId });
		return { message: 'Пользователь найден', user: userDB };
	} catch (error) {
		throw error;
	}
}
export async function postUserDataService(formUser, userId) {
	try {
		const userDB = await User.findOneAndUpdate(
			{ _id: userId },
			{
				$set: {
					phone: formUser.phone,
					firstName: formUser.firstName,
					patronymic: formUser.patronymic,
					lastName: formUser.lastName,
					gender: formUser.gender,
					birthday: formUser.birthday,
					city: formUser.city,
					team: formUser.team,
					email: formUser.email,
					photoProfile: formUser.photoProfile.source,
				},
			},
			{ returnDocument: 'after' }
		);
		const user = {
			id: userDB._id,
			email: userDB.email,
			username: userDB.username,
			role: userDB.role,
			photoProfile: userDB.photoProfile,
		};

		return { message: 'Данные пользователя сохранены!', user };
	} catch (error) {
		throw error;
	}
}