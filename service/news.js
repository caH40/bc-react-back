import { News } from '../Model/News.js';

export async function getNewsService() {
	try {
		const newsDB = await News.find().populate('kudoses').populate('comments');
		newsDB.reverse();

		const news = newsDB.map(newsOne => {
			newsOne = newsOne.toObject();
			const likeQuantity =
				newsOne.kudoses.usersIdLike.length - newsOne.kudoses.usersIdDislike.length;
			newsOne.likeQuantity = likeQuantity > 0 ? likeQuantity : 0;
			return newsOne;
		});

		return { message: `Новости`, data: news };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getNewsService()';
	}
}
export async function getNewsOneService(newsId) {
	try {
		const newsDB = await News.findOne({ _id: newsId }).populate('kudoses').populate('comments');
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
