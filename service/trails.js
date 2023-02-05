import { Card } from '../Model/Card.js';
import Photo from '../Model/Photo.js';

export async function getTrailsService(filter, page = 1) {
	try {
		const cardsDB = await Card.find({ $and: [{ state: filter, bikeType: filter }] }).populate(
			'kudoses'
		);
		const cardsOnPage = 10;
		const cardsCurrentPage = cardsDB.slice(cardsOnPage * page - cardsOnPage, cardsOnPage * page);

		const card = cardsCurrentPage.map(c => c.toObject());

		for (let i = 0; i < card.length; i++) {
			let likes = card[i].kudoses.usersIdLike.length - card[i].kudoses.usersIdDisLike.length;
			card[i].likes = likes;
		}
		return { message: 'Карточки маршрутов получены', data: card };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}

export async function getTrailService(trailId) {
	try {
		const cardDB = await Card.findOne({ _id: trailId }, { cardPhoto: false })
			.populate('kudoses')
			.populate('postedBy');
		const photos = await Photo.findOne({ cardId: trailId });

		const descriptionAreaArr = cardDB.descriptionArea.split('\n');
		const card = cardDB.toObject();

		card.descPhoto = photos.descPhoto;
		card.descPhotoId = photos._id;
		card.authorPhoto = photos.authorPhoto;
		card.descriptionArea = descriptionAreaArr;
		return { message: 'Описание маршрута', data: card };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}
