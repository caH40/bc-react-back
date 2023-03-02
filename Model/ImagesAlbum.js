import mongoose from 'mongoose';
import prk from 'mongoose';
const { Schema, model } = prk;

const imagesAlbumSchema = new Schema({
	albumsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Albums' },
	urlImage: String,
	date: Number,
	description: String,
	name: String,
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const ImagesAlbum = model('ImagesAlbum', imagesAlbumSchema);
