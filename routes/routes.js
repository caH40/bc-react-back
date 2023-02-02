import { Router } from 'express';
import {
	getTrails,
	getTrail,
	getEvents,
	getResults,
	getResultsAthlete,
	getTrek,
	getWebcam,
	getNews,
	getNewsOne,
	postLikes,
} from '../controllers/controller.js';
import { checkAuth } from '../middleware/auth.js';

export const router = new Router();

router.post('/trails', getTrails);
router.get('/trail', getTrail);
router.get('/events', getEvents);
router.get('/results', getResults);
router.get('/athlete/results', getResultsAthlete);
router.get('/gettrek', getTrek);
router.get('/webcam/:numberCam', getWebcam);
router.get('/news', getNews);
router.get('/news/:newsId', getNewsOne);
router.post('/likes', postLikes);
