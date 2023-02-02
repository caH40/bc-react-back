import { controlConfirmEmail } from './authentication/control-confirm-email.js';

export async function timers() {
	try {
		const millisecondsInDay = 24 * 60 * 60 * 1000;
		setTimeout(async () => {
			await controlConfirmEmail();
		}, millisecondsInDay);
	} catch (error) {
		console.log(error);
	}
}
