import { Event } from '../Model/Event.js';
import { Result } from '../Model/Result.js';

export async function postProtocolService(results, event) {
	try {
		const eventDB = await Event.create(event);

		for (let result of results) {
			await Result.create({ ...result, eventId: eventDB._id }).catch(e => console.log(e));
		}

		return { message: 'Протокол сохранён!' };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postProtocolService()';
	}
}
