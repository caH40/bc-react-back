import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import { router } from './routes/routes.js';

const __dirname = path.resolve();
const PORT = process.env.SERVER_PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.resolve(__dirname, 'static/')));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use('/api', router);

const start = async () => {
	try {
		await mongoose
			.connect(process.env.MONGODB)
			.then(() => console.log('Connected to Mongo..'))
			.catch(error => console.log(error));

		app.listen(PORT, () => console.log('server started on PORT=' + PORT));
	} catch (e) {
		console.log(e);
	}
};
start();
