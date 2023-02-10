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
	getAllNews,
	deleteNews,
	postTrek,
} from '../controllers/controller.js';
import { authModerator } from '../middleware/authModerator.js';
import { uploadFileTrek } from '../middleware/file-trek.js';

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
router.post('/post-news', authModerator, uploadFile.single('files'), postNews);
router.get('/news-all', authModerator, getAllNews);
router.post('/news-delete', authModerator, deleteNews);
router.post('/trek-post', authModerator, uploadFileTrek.single('files'), postTrek);
