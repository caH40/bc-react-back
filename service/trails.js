import { Card } from '../Model/Card.js';
import { Kudos } from '../Model/Kudos.js';
import { Photos } from '../Model/Photo.js';

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

		const photosDB = await Photos.findOne({ _id: cardDB.descPhotos });

		const descriptionAreaArr = cardDB.descriptionArea.split('\n');
		const card = cardDB.toObject();

		card.descPhoto = photosDB.descPhoto;
		card.authorPhoto = photosDB.authorPhoto;
		card.descriptionArea = descriptionAreaArr;

		return { message: 'Описание маршрута', data: card };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailService()';
	}
}

const sortCards = (sortRule, cards) => {
	if (sortRule.sortDirection === 'up') {
		return cards.sort((a, b) => a[sortRule.sortField] - b[sortRule.sortField]);
	} else {
		return cards.sort((a, b) => b[sortRule.sortField] - a[sortRule.sortField]);
	}
};

export async function postTrailService(form, userId) {
	try {
		const {
			nameRoute,
			state,
			bikeType,
			start,
			turn,
			finish,
			distance,
			ascent,
			descriptionArea,
			cardPhoto,
			fileTrekName,
			urlVideo,
			urlTrekGConnect,
			descPhotos,
		} = form;

		const descPhotoClear = descPhotos.map(photo => photo.source);
		const photosDB = await Photos.create({ descPhoto: descPhotoClear });

		const kudosDB = await Kudos.create({});

		const cardDB = await Card.create({
			nameRoute,
			state,
			bikeType,
			start,
			turn,
			finish,
			distance,
			ascent,
			descriptionArea,
			cardPhoto: cardPhoto.source,
			fileTrekName,
			urlVideo,
			urlTrekGConnect,
			postedBy: userId,
			descPhotos: photosDB._id,
			kudoses: kudosDB._id,
			date: Date.now(),
		});

		if (!cardDB) throw { message: 'Ошибка при сохранении данных нового маршрута' };
		return { message: 'Новый маршрут сохранён!', trailId: cardDB._id };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postTrailService()';
	}
}
