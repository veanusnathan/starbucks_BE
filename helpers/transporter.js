const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "vn6299@gmail.com",
		pass: "wwkvwbphxbztwqdt",
	},
	tls: {
		rejectUnauthorized: false,
	},
});

module.exports = transporter;
