import { getEventsService } from '../service/events.js';
import { getResultsAthleteService, getResultsService } from '../service/results.js';
import { getTrailService, getTrailsService } from '../service/trails.js';

import path from 'path';
import { downloadImage } from '../service/download.js';
import { getNewsOneService, getNewsService } from '../service/news.js';
import { postLikesService } from '../service/likes.js';

const __dirname = path.resolve();

export async function getTrails(req, res) {
	try {
		const { filter, sort, cardsOnPage, page } = req.body;
		const trails = await getTrailsService(filter, sort, cardsOnPage, page);
		res.status(200).json({ message: 'Карточки маршрутов', trails: trails.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getTrail(req, res) {
	try {
		const { id } = req.query;

		const trail = await getTrailService(id);
		res.status(200).json({ message: trail.message, trail: trail.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function getEvents(req, res) {
	try {
		const events = await getEventsService();
		res.status(200).json({ message: events.message, events: events.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getResults(req, res) {
	try {
		const { id } = req.query;
		const results = await getResultsService(id);
		res.status(200).json({ message: results.message, results: results.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getResultsAthlete(req, res) {
	try {
		const { athlete } = req.query;
		const results = await getResultsAthleteService(athlete);
		res.status(200).json({ message: results.message, results: results.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export function getTrek(req, res) {
	try {
		const { id } = req.query;
		res.download(path.resolve(__dirname, 'treks', id));
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getWebcam(req, res) {
	try {
		const { numberCam } = req.params;
		res
			.status(200)
			.download(path.resolve(__dirname, 'images/screenshots/webcams', `webcam${numberCam}.jpg`));
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getNews(req, res) {
	try {
		const { page, newsOnPage } = req.params;
		const news = await getNewsService(page, newsOnPage);
		res.status(200).json({ message: news.message, news: news.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getNewsOne(req, res) {
	try {
		const { newsId } = req.params;
		const newsOne = await getNewsOneService(newsId);
		res.status(200).json({ message: newsOne.message, newsOne: newsOne.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function postLikes(req, res) {
	try {
		const { changesLikes } = req.body;
		const likes = await postLikesService(changesLikes);
		res.status(200).json({ message: likes.message });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
