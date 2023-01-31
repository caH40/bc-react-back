import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Token } from '../../Model/Token.js';

const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

export async function generateToken(payload) {
	try {
		const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30s' });
		const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' });

		return { accessToken, refreshToken };
	} catch (error) {
		console.log(error);
	}
}

export async function saveToken(userId, refreshToken) {
	try {
		const tokenDB = await Token.findOne({ user: userId });
		if (tokenDB) {
			tokenDB.refreshToken = refreshToken;
			return await tokenDB.save(); //вернётся ли тут сохранённое значение??
		}

		const newTokenDB = await Token.create({ user: userId, refreshToken });
		return newTokenDB;
	} catch (error) {
		console.log(error);
	}
}
// export async function removeToken(refreshToken, next) {
// 	try {
// 		const tokenDB = await Token.findOneAndDelete({ refreshToken });

// 		return tokenDB;
// 	} catch (e) {
// 		next(e);
// 	}
// }
// export function validateAccessToken(token) {
// 	try {
// 		const userData = jwt.verify(token, JWT_ACCESS_TOKEN);
// 		return userData;
// 	} catch (e) {
// 		return null;
// 	}
// }

// export function validateRefreshToken(token) {
// 	try {
// 		const userData = jwt.verify(token, JWT_REFRESH_TOKEN);
// 		return userData;
// 	} catch (e) {
// 		return null;
// 	}
// }

// export async function findRefreshToken(refreshToken) {
// 	try {
// 		const tokenDB = await Token.findOne({ refreshToken });

// 		return tokenDB;
// 	} catch (e) {
// 		return null;
// 	}
// }
