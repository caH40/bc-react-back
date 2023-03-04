import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { Gallery } from '../Model/Gallery.js';
import { Album } from '../Model/Album.js';
import { PhotoAlbum } from '../Model/photoAlbum.js';

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
			.toFile(path.resolve(__dirname, 'build/images/gallery', form.nameDir, `gallery-cover.jpg`));

		const galleryDB = await Gallery.create({
			name: form.name,
			date: Date.now(),
			urlCover: `images/gallery/${form.nameDir}/gallery-cover.jpg`,
			urlGallery: `images/gallery/${form.nameDir}/`,
			creatorId: userId,
		});

		if (!galleryDB) throw 'Ошибка при сохранении в БД';

		return { message: `Данные сохранены` };
	} catch (error) {
		throw error;
	}
}

export async function getAlbumsService(galleryId) {
	try {
		const albumsDB = await Album.find({ galleryId })
			.populate({ path: 'creatorId', select: 'username' })
			.populate({ path: 'galleryId', select: 'name' });
		return { message: 'Альбомы', albums: albumsDB };
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
			.toFile(path.resolve(__dirname, newDir, `album-cover.jpg`));

		const albumDB = await Album.create({
			galleryId: form.galleryId,
			name: form.name,
			description: form.description,
			date: Date.now(),
			urlCover: `${galleryDB.urlGallery}${form.nameDir}/album-cover.jpg`,
			urlAlbum: `${galleryDB.urlGallery}${form.nameDir}/`,
			creatorId: userId,
		});
		if (!albumDB) throw 'Ошибка при сохранении в БД';

		return { message: `Данные сохранены` };
	} catch (error) {
		throw error;
	}
}

export async function postPhotosService(form, userId) {
	try {
		const options = [
			{
				width: 320,
				height: 213,
				fit: sharp.fit.cover,
				sizeName: 'small',
			},
			{
				width: 800,
				height: 533,
				fit: sharp.fit.cover,
				sizeName: 'medium',
			},
			{
				width: 1600,
				height: 1066,
				fit: sharp.fit.cover,
				sizeName: 'normal',
			},
		];
		const albumDB = await Album.findOne({ _id: form.albumId });

		for (let source of form.sources) {
			let base64Image = source.source.split(';base64,').pop();
			let myBuffer = Buffer.from(base64Image, 'base64');

			let fileName = `${uuidv4()}`;

			for (let option of options) {
				await sharp(myBuffer)
					.resize(option)
					.toFormat('jpeg')
					.toFile(
						path.resolve(__dirname, 'build', albumDB.urlAlbum, `${fileName}-${option.sizeName}.jpg`)
					);
			}

			let photoDB = await PhotoAlbum.create({
				albumsId: form.albumId,
				authorPhoto: form.authorPhoto,
				urlAuthorPhoto: form.urlAuthorPhoto,
				date: Date.now(),
				urlPhotoSmall: `${albumDB.urlAlbum}${fileName}-small.jpg`,
				urlPhotoMedium: `${albumDB.urlAlbum}${fileName}-medium.jpg`,
				urlPhotoNormal: `${albumDB.urlAlbum}${fileName}-normal.jpg`,
				creatorId: userId,
			});
		}
		if (!albumDB) throw 'Ошибка при сохранении в БД';

		return { message: `Данные сохранены` };
	} catch (error) {
		throw error;
	}
}
