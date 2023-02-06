import { Card } from '../Model/Card.js';
import Photo from '../Model/Photo.js';

export async function getTrailsService(filter, sort, cardsOnPage, page = 1) {
	try {
		const cardsDB = await Card.find({ $and: [{ state: filter, bikeType: filter }] }).populate(
			'kudoses'
		);
		const quantityPages = Math.ceil(cardsDB.length / cardsOnPage);

		const cardsSorted = sortCards(sort, cardsDB);

		const cardsCurrentPage = cardsSorted.slice(
			cardsOnPage * page - cardsOnPage,
			cardsOnPage * page
		);

		const card = cardsCurrentPage.map(c => c.toObject());

		for (let i = 0; i < card.length; i++) {
			let likes = card[i].kudoses.usersIdLike.length - card[i].kudoses.usersIdDisLike.length;
			card[i].likes = likes;
		}
		return { message: 'Карточки маршрутов получены', data: { cards: card, quantityPages } };
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

const sortCards = (sortRule, cards) => {
	if (sortRule.sortDirection === 'up') {
		return cards.sort((a, b) => a[sortRule.sortField] - b[sortRule.sortField]);
	} else {
		return cards.sort((a, b) => b[sortRule.sortField] - a[sortRule.sortField]);
	}
};
