import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import { Gallery } from '../Model/Gallery.js';
import { Album } from '../Model/Album.js';

const __dirname = path.resolve();

export async function getGalleriesService() {
	try {
		const galleriesDB = await Gallery.find().populate({ path: 'creatorId', select: 'username' });
		return { message: 'Галереи', galleries: galleriesDB };
	} catch (error) {
		throw error;
	}
}

export async function postGalleryService(form, userId) {
	try {
		const newDir = path.resolve(__dirname, 'build/images/gallery', form.nameDir);
		if (fs.existsSync(newDir)) throw `Такая "${form.nameDir}" папка уже существует`;

		fs.mkdirSync(newDir);

		let base64Image = form.base64Image.split(';base64,').pop();
		const myBuffer = Buffer.from(base64Image, 'base64');

		await sharp(myBuffer)
			.resize({
				width: 800,
				height: 533,
				fit: sharp.fit.cover,
			})
			.toFormat('jpeg')
			.toFile(
				path.resolve(__dirname, 'build/images/gallery', form.nameDir, `${form.nameDir}-cover.jpg`)
			);

		const galleryDB = await Gallery.create({
			name: form.name,
			date: Date.now(),
			urlCover: `images/gallery/${form.nameDir}/${form.nameDir}-cover.jpg`,
			urlGallery: `images/gallery/${form.nameDir}/`,
			creatorId: userId,
		});

		if (!galleryDB) throw 'Ошибка при сохранении в БД';

		return { message: `Данные сохранены` };
	} catch (error) {
		throw error;
	}
}

export async function postAlbumService(form, userId) {
	try {
		const galleryDB = await Gallery.findOne({ _id: form.galleryId });

		const newDir = path.resolve(__dirname, 'build', galleryDB.urlGallery, form.nameDir);
		if (fs.existsSync(newDir)) throw `Такая "${form.nameDir}" папка уже существует`;

		fs.mkdirSync(newDir);

		let base64Image = form.base64Image.split(';base64,').pop();
		const myBuffer = Buffer.from(base64Image, 'base64');

		await sharp(myBuffer)
			.resize({
				width: 800,
				height: 533,
				fit: sharp.fit.cover,
			})
			.toFormat('jpeg')
			.toFile(path.resolve(__dirname, newDir, `${form.nameDir}-album-cover.jpg`));

		const albumDB = await Album.create({
			galleryId: form.galleryId,
			name: form.name,
			date: Date.now(),
			urlCover: `${galleryDB.urlGallery}${form.nameDir}/album-cover.jpg`,
			urlAlbum: `${galleryDB.urlGallery}${form.nameDir}/`,
			creatorId: userId,
		});
		console.log(albumDB);
		if (!galleryDB) throw 'Ошибка при сохранении в БД';

		return { message: `Данные сохранены` };
	} catch (error) {
		throw error;
	}
}
