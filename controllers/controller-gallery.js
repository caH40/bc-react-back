import { getGalleriesService, postGalleryService } from '../service/gallery.js';

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
