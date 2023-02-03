import Event from '../Model/Event.js';
import { Result } from '../Model/Result.js';

export async function getEventsService() {
	try {
		const eventsDB = await Event.find();
		const resultsDB = await Result.find();
		const events = eventsDB.map(event => {
			event = event.toObject();
			const quantityRiders = resultsDB.filter(result => result.eventId === event.eventId).length;
			event.quantityRiders = quantityRiders;
			return event;
		});
		return { message: 'Список соревнований', data: events };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}
