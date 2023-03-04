import {
	getGalleriesService,
	postAlbumService,
	postGalleryService,
	getAlbumsService,
} from '../service/gallery.js';

export async function getGalleries(req, res) {
	try {
		const galleries = await getGalleriesService();
		res.status(200).json(galleries);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function postGallery(req, res) {
	try {
		const { form } = req.body;
		const { userId } = req.params;
		const gallerySaved = await postGalleryService(form, userId);
		res.status(200).json(gallerySaved);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function getAlbums(req, res) {
	try {
		const galleries = await getAlbumsService();
		res.status(200).json(galleries);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function postAlbum(req, res) {
	try {
		const { form } = req.body;
		const { userId } = req.params;
		const albumSaved = await postAlbumService(form, userId);
		res.status(200).json(albumSaved);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
