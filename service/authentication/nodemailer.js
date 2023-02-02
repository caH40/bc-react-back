import 'dotenv/config';
import nodemailer from 'nodemailer';

const { MAIL_USER, MAIL_PASS, MAIL_HOST, MAIL_PORT, MAIL_SECURE, FRONT } = process.env;

export async function mailService(target, activationToken, email, username, password) {
	try {
		let transporter = nodemailer.createTransport({
			host: MAIL_HOST,
			port: MAIL_PORT,
			secure: MAIL_SECURE,
			auth: {
				user: MAIL_USER,
				pass: MAIL_PASS,
			},
		});

		let subject;
		let html;
		const date = new Date().toLocaleString();

		if (target === 'registration') {
			subject = 'Подтверждение регистрации на сайте bike-caucasus.ru';
			html = `Здравствуйте!<br>
    ${date} была произведена регистрация на сайте bike-caucasus.ru, где был указан данный e-mail ${email}.<br>
    Для активации учетной записи перейдите по ссылке <a href="${FRONT}/confirm-email/${activationToken}">${FRONT}/confirm-email/${activationToken}</a> <br><br>
    Логин: ${username}<br>
    Пароль: ${password}<br><br>
    <b>Внимание!</b> Ссылка действительна 48 часов. Без активации аккаунт будет удалён.<br><br>С уважением, команда Bike-Caucasus.`;
		}
		if (target === 'resetPassword') {
			subject = 'Сброс пароля на сайте bike-caucasus.ru';
			html = `Здравствуйте!<br>
    ${date} был произведен запрос на сброс пароля профиля на сайте bike-caucasus.ru, где был указан данный e-mail ${email}.<br>
    Для сброса пароля перейдите по ссылке <a href="${FRONT}/password-reset?token=${activationToken}">${FRONT}/password-reset?token=${activationToken}</a> <br><br>
    <b>Внимание!</b> Ссылка действительна 48 часов. Если Вы не делали данного запроса, то просто проигнорируйте это письмо.<br><br>С уважением, команда Bike-Caucasus.`;
		}
		if (target === 'savedNewPassword') {
			subject = 'Обновление пароля профиля на сайте bike-caucasus.ru';
			html = `Здравствуйте!<br>
    ${date} было произведено обновления пароля профиля на сайте bike-caucasus.ru<br><br>
    Логин: ${username}<br>
    Новый пароль: ${password}<br><br>
    С уважением, команда Bike-Caucasus.`;
		}

		const from = 'bikecaucasus@mail.ru';
		const to = email;

		let result = await transporter.sendMail({ from, to, subject, html });

		console.log('Message sent: %s', result.messageId);
		if (result.response.includes('250 OK')) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error;
	}
}
