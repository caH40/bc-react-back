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
	postTrail,
	getTrailsEdit,
	deleteTrail,
	postCommentNews,
	getCommentsNews,
} from '../controllers/controller.js';
import { authModerator } from '../middleware/authModerator.js';
import { uploadFileTrek } from '../middleware/file-trek.js';
import { checkAuth, getAuth } from '../middleware/auth.js';

export const router = new Router();

router.post('/trails', getTrails);
router.get('/trail', getAuth, getTrail);
router.get('/events', getEvents);
router.get('/results', getResults);
router.get('/athlete/results', getResultsAthlete);
router.get('/gettrek', getTrek);
router.get('/webcam/:numberCam', getWebcam);
router.get('/news/:page/:newsOnPage', getNews);
router.get('/newsone/:newsId', getNewsOne);
router.post('/likes', checkAuth, postLikes);
router.post('/post-news', authModerator, uploadFile.single('files'), postNews);
router.get('/news-all', authModerator, getAllNews);
router.post('/news-delete', authModerator, deleteNews);
router.post('/trek-post', authModerator, uploadFileTrek.single('files'), postTrek);
router.post('/trail-post', authModerator, postTrail);
router.get('/trail-all', authModerator, getTrailsEdit);
router.post('/trail-delete', authModerator, deleteTrail);
router.post('/commentnews-post', getAuth, postCommentNews);
router.get('/comments-get/:newsId', checkAuth, getCommentsNews);
