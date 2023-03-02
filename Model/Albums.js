import mongoose from 'mongoose';
import prk from 'mongoose';
const { Schema, model } = prk;

const albumsSchema = new Schema({
	galleryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' },
	name: { type: String, unique: true, required: true },
	date: Number,
	description: String,
	urlCover: String,
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const Albums = model('Albums', albumsSchema);
