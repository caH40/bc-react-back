import { Router } from 'express';
import { uploadFile } from '../middleware/file.js';
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
	postNews,
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
router.get('/news/:page/:newsOnPage', getNews);
router.get('/newsone/:newsId', getNewsOne);
router.post('/likes', postLikes);
router.post('/postnews', uploadFile.single('files'), postNews);
