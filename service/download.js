import download from 'image-downloader';
import path from 'path';

const __dirname = path.resolve();

export async function downloadImage() {
	try {
		let options = {
			url: `https://gw.cmo.sai.msu.ru/webcam5.jpg`,
			dest: path.resolve(__dirname, 'images/screenshots/webcam5', 'webcam5.jpg'),
		};
		await download.image(options);
	} catch (error) {
		console.log(error);
	}
}
