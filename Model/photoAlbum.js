import mongoose from 'mongoose';
import prk from 'mongoose';
const { Schema, model } = prk;

const photoAlbumSchema = new Schema({
	albumsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Albums' },
	urlPhotoSmall: String,
	urlPhotoMedium: String,
	urlPhotoNormal: String,
	date: Number,
	authorPhoto: String,
	urlAuthorPhoto: String,
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const PhotoAlbum = model('PhotoAlbum', photoAlbumSchema);
