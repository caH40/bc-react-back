import mongoose from 'mongoose';
import pkg from 'mongoose';
import { Kudos } from './Kudos.js';
import { User } from './User.js';
import { Photos } from './Photo.js';
const { Schema, model } = pkg;

const cardSchema = new Schema({
	nameRoute: { type: String, required: true },
	state: { type: String },
	bikeType: { type: String },
	start: { type: String },
	turn: { type: String },
	finish: { type: String },
	distance: { type: String },
	ascent: { type: String },
	descriptionArea: { type: String },
	cardPhoto: { type: String },
	fileTrekName: { type: String },
	urlVideo: { type: String },
	urlTrekGConnect: { type: String },
	postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	descPhotos: { type: mongoose.Schema.Types.ObjectId, ref: 'Photos' },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	kudoses: { type: mongoose.Schema.Types.ObjectId, ref: 'Kudos' },
	date: { type: Number },
	dateEdit: { type: Number },
});

export const Card = model('Card', cardSchema);
