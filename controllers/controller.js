import { getEventsService } from '../service/events.js';
import { getResultsAthleteService, getResultsService } from '../service/results.js';
import {
	deleteTrailService,
	getTrailsEditService,
	getTrailService,
	getTrailsService,
	postTrailEditService,
	postTrailService,
} from '../service/trails.js';

import path from 'path';

import {
	deleteNewsService,
	editNewsService,
	getAllNewsService,
	getNewsOneService,
	getNewsService,
	postNewsService,
	getNewsInteractiveService,
	postNewsInteractiveService,
} from '../service/news.js';
import { postLikesService } from '../service/likes.js';
import {
	getCommentsNewsService,
	postCommentDeleteNewsService,
	postCommentNewsService,
} from '../service/comments.js';

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
		const { id: trailId, type } = req.query;
		const { userId } = req.params;

		const trail = await getTrailService(trailId, type, userId);
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

export async function postNews(req, res) {
	try {
		const file = req.file;
		const { userId } = req.params;
		const { title, textBody, type, newsId } = req.body;

		if (type === 'create') {
			const news = await postNewsService(title, textBody, file, userId);
			return res.status(200).json(news);
		}

		if (type === 'edit') {
			const news = await editNewsService(title, textBody, file, newsId);
			return res.status(200).json(news);
		}

		res.status(400).json({ message: 'Не получен тип действия с формой' });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getAllNews(req, res) {
	try {
		const news = await getAllNewsService();
		res.status(200).json({ message: news.message, news: news.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function deleteNews(req, res) {
	try {
		const { newsId } = req.body;
		const news = await deleteNewsService(newsId);
		res.status(200).json({ message: news.message, news: news.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function postTrek(req, res) {
	try {
		if (!req.file) throw 'Файл трека не получен на сервере';
		res.status(200).json({ message: 'Файл трека получен на сервере' });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function postTrail(req, res) {
	try {
		const { dataForm, type } = req.body;
		const { userId } = req.params;

		let trail = {};
		if (type === 'edit') {
			trail = await postTrailEditService(dataForm, userId);
		} else {
			trail = await postTrailService(dataForm, userId);
		}

		res.status(200).json({ message: trail.message, trailId: trail.trailId });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getTrailsEdit(req, res) {
	try {
		const trails = await getTrailsEditService();
		res.status(200).json({ message: trails.message, trails: trails.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function deleteTrail(req, res) {
	try {
		const { trailId } = req.body;
		const trails = await deleteTrailService(trailId);
		res.status(200).json({ message: trails.message });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function postCommentNews(req, res) {
	try {
		const { userId } = req.params;
		const { comment, newsId } = req.body;
		const savedComment = await postCommentNewsService(comment, userId, newsId);
		res.status(200).json({ message: savedComment.message });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getCommentsNews(req, res) {
	try {
		const { newsId } = req.params;
		const comments = await getCommentsNewsService(newsId);
		res.status(200).json({ message: comments.message, comments: comments.data });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function postCommentDeleteNews(req, res) {
	try {
		const { commentId } = req.body;
		const { userId } = req.params;

		const comment = await postCommentDeleteNewsService(commentId, userId);
		res.status(200).json({ message: comment.message });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}

export async function getNewsInteractive(req, res) {
	try {
		const { newsId, userId } = req.params;

		const interactive = await getNewsInteractiveService(newsId, userId);
		res.status(200).json(interactive);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function postNewsInteractive(req, res) {
	try {
		const { userId } = req.params;
		const { newsId, target } = req.body;

		const interactive = await postNewsInteractiveService(newsId, target, userId);
		res.status(200).json(interactive);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
