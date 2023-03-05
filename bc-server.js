import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import { router } from './routes/routes.js';
import { downloadImage } from './service/download.js';
import { routerAuth } from './routes/authentication.js';
import { timers } from './service/timer.js';
import { createSitemap } from './service/sitemap/generate-sitemap.js';

const __dirname = path.resolve();
const PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(
	cors({
		credentials: true,
		origin: process.env.FRONT,
	})
);
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use(cookieParser());
app.use('/api', router);
app.use('/api', routerAuth);
app.use(express.static(path.resolve(__dirname, 'build')));
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

const start = async () => {
	try {
		await mongoose
			.connect(process.env.MONGODB)
			.then(() => console.log('Connected to Mongo..'))
			.catch(error => console.log(error));

		app.listen(PORT, () => console.log('server started on PORT=' + PORT));
		// await createSitemap(); //вызывается только при запуске
		await downloadImage();
		await timers();
	} catch (e) {
		console.log(e);
	}
};
start();
