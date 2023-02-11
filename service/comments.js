import { CommentNews } from '../Model/CommentNews.js';

export async function postCommentNewsService(comment, userId, newsId) {
	try {
		const commentDB = await CommentNews.create({
			newsId,
			text: comment,
			postedBy: userId,
			date: Date.now(),
		});
		if (!commentDB) throw 'Комментарий не сохранён!';
		return { message: 'Комментарий сохранен на сервере!' };
	} catch (error) {
		throw error;
	}
}

export async function getCommentsNewsService(newsId) {
	try {
		const commentsDB = await CommentNews.find({ newsId }).populate({
			path: 'postedBy',
			select: ['username', 'firstName', 'lastName', 'photoProfile'],
		});
		if (!commentsDB.length) throw 'Комментарии к новости не найдены!';
		commentsDB.reverse();
		return { message: 'Комментарии к новости!', data: commentsDB };
	} catch (error) {
		throw error;
	}
}
