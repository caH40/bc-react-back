import prk from 'mongoose';
const { Schema, model } = prk;

const passwordResetSchema = new Schema({
	date: { type: Number, required: true },
	tokenReset: { type: String, required: true },
	email: { type: String, required: true },
});

export const PasswordReset = model('PasswordReset', passwordResetSchema);
