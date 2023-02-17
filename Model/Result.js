import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema, model } = pkg;

const resultSchema = new Schema({
	eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	place: { type: String },
	number: { type: Number },
	athlete: { type: String },
	athleteCity: { type: String, default: 'nope' },
	athleteTeam: { type: String, default: 'nope' },
	distance: { type: Number },
	timeTotal: { type: String },
	birthday: { type: String, default: 'nope' },
	gender: { type: String, default: 'nope' },
});

export const Result = model('Result', resultSchema);
