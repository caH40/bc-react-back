import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

import { KudosNews } from '../Model/KudosNews.js';
import { News } from '../Model/News.js';
import { CommentNews } from '../Model/CommentNews.js';

export async function getNewsService(page, newsOnPage) {
	try {
		const newsDB = await News.find().populate('kudoses');
		newsDB.reverse();

		const quantityPages = Math.ceil(newsDB.length / newsOnPage);
		const newsCurrentPage = newsDB.slice(newsOnPage * page - newsOnPage, newsOnPage * page);

		const news = newsCurrentPage.map(newsOne => {
			newsOne = newsOne.toObject();
			const likeQuantity =
				newsOne.kudoses.usersIdLike.length - newsOne.kudoses.usersIdDislike.length;
			newsOne.likeQuantity = likeQuantity > 0 ? likeQuantity : 0;
			return newsOne;
		});

		for (const newsOne of news) {
			const comments = await CommentNews.find({ newsId: newsOne._id });
			newsOne.commentsQuantity = comments?.length;
		}

		return { message: `Новости`, data: { news, quantityPages } };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getNewsService()';
	}
}

export async function getNewsOneService(newsId) {
	try {
		const newsDB = await News.findOne({ _id: newsId }).populate('kudoses');
		const newsOne = newsDB.toObject();
		const likeQuantity =
			newsOne.kudoses.usersIdLike.length - newsOne.kudoses.usersIdDislike.length;
		newsOne.likeQuantity = likeQuantity > 0 ? likeQuantity : 0;
		return { message: `Новость`, data: newsOne };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getNewsService()';
	}
}

export async function postNewsService(title, textBody, file, userId) {
	try {
		const newsDB = await News.create({
			newsTitle: title,
			newsText: textBody,
			image: (file.destination + file.filename).slice(6),
			postedBy: userId,
			date: Date.now(),
		});

		const kudosNewsDB = await KudosNews.create({ newsId: newsDB._id });
		newsDB.kudoses = kudosNewsDB._id;
		await newsDB.save();

		if (!newsDB) throw 'Ошибка при сохранении новости в БД';
		return { message: `Новость сохранена в БД` };
	} catch (error) {
		throw error;
	}
}

export async function editNewsService(title, textBody, file, newsId) {
	const image = file ? (file.destination + file.filename).slice(6) : undefined;
	try {
		const newsDB = await News.findOneAndUpdate(
			{ _id: newsId },
			{
				$set: {
					newsTitle: title,
					newsText: textBody,
					image,
				},
			}
		);
		if (image) {
			const pathToImage = path.resolve(__dirname, 'build', newsDB.image);
			fs.unlinkSync(pathToImage, error => {
				if (error) throw error;
			});
		}

		if (!newsDB) throw 'Ошибка при сохранении новости в БД';
		return { message: `Новость сохранена в БД` };
	} catch (error) {
		throw error;
	}
}

export async function getAllNewsService() {
	try {
		const newsDB = await News.find().populate({ path: 'postedBy', select: 'username' });
		newsDB.reverse();

		return { message: `Все новости`, data: newsDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getAllNewsService()';
	}
}

export async function deleteNewsService(newsId) {
	try {
		const newsDB = await News.findOneAndDelete({ _id: newsId });
		await KudosNews.findOneAndDelete({ _id: newsDB.kudoses });
		await CommentNews.deleteMany({ newsId: newsDB._id });
		const pathToImage = path.resolve(__dirname, 'build', newsDB.image);
		fs.unlinkSync(pathToImage, error => {
			if (error) throw error;
		});

		return { message: `Новость удалена`, data: newsDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. deleteNewsService()';
	}
}
