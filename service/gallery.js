import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import { Gallery } from '../Model/Gallery.js';

const __dirname = path.resolve();

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
			urlCover: `images/gallery/${form.nameDir}-cover/${form.nameDir}-cover.jpg`,
			urlGallery: `images/gallery/${form.nameDir}-cover/`,
			creatorId: userId,
		});

		if (!galleryDB) throw 'Ошибка при сохранении в БД';

		return { message: `Данные сохранены` };
	} catch (error) {
		throw error;
	}
}
