import { Router } from 'express';
import {
	getTrails,
	getTrail,
	getEvents,
	getResults,
	getResultsAthlete,
	getTrek,
	getScreenshot,
	getNews,
	getNewsOne,
	postLikes,
} from '../controllers/controller.js';

export const router = new Router();

router.post('/trails', getTrails);
router.get('/trail', getTrail);
router.get('/events', getEvents);
router.get('/results', getResults);
router.get('/athlete/results', getResultsAthlete);
router.get('/gettrek', getTrek);
router.get('/screenshot', getScreenshot);
router.get('/news', getNews);
router.get('/news/:newsId', getNewsOne);
router.post('/likes', postLikes);
