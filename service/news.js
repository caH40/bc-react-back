import { News } from '../Model/News.js';

export async function getNewsService(page, newsOnPage) {
	try {
		const newsDB = await News.find().populate('kudoses').populate('comments');
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

		return { message: `Новости`, data: { news, quantityPages } };
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

export async function postNewsService(title, textBody, file) {
	try {
		const newsDB = await News.create({
			newsTitle: title,
			newsText: textBody,
			image: file.filename,
			imagePath: file.destination,
		});
		if (!newsDB) throw 'Ошибка при сохранении новости в БД';
		return { message: `Новость сохранена в БД` };
	} catch (error) {
		throw error;
	}
}
