import { CommentNews } from '../Model/CommentNews.js';

export async function postCommentNewsService(comment, userId, newsId) {
	try {
		const commentDB = await CommentNews.create({
			newsId,
			text: comment,
			postedBy: newsId,
			date: Date.now(),
		});
		if (!commentDB) throw 'Комментарий не сохранён!';
		return { message: 'Комментарий сохранен на сервере!' };
	} catch (error) {
		throw error;
	}
}
