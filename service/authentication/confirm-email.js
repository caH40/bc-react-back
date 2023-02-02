import { UserConfirm } from '../../Model/User-confirm.js';

export async function confirmEmailService(activationToken) {
	try {
		const userConfirmDB = await UserConfirm.findOneAndDelete({ activationToken });

		if (userConfirmDB) return { message: `Email подтверждён, аккаунт активирован!` };

		return { message: `Ссылка для активации устарела!` };
	} catch (error) {
		console.log(error);
	}
}
