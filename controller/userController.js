const { Op } = require("sequelize");
const db = require("../sequelize/models");
const transporter = require("../helpers/transporter");
const fs = require("fs").promises;
const handlebars = require("handlebars");

module.exports = {
	createUser: async (req, res) => {
		const { email, password } = req.body;
		try {
			const data = await db.user.create({ email, password });

			const template = await fs.readFile("./template/emailActivation.html", "utf-8");
			const templateToComplie = await handlebars.compile(template);
			const newTemplate = templateToComplie({ email, uuid: data.uuid });

			await transporter.sendMail({
				from: "Starling",
				to: data.email,
				subject: "Account Activation",
				html: newTemplate,
			});
			return res.status(201).send({
				isError: false,
				message: "user created",
				data,
			});
		} catch (error) {
			return res.status(400).send({
				isError: true,
				message: "Something went wrong",
				data: error,
			});
		}
	},
	activate: async (req, res) => {
		const { uuid } = req.query;
		try {
			const data = await db.user.update(
				{ status: true },
				{
					where: {
						uuid,
					},
				}
			);
			return res.status(200).send({
				isError: false,
				message: "Activation Success",
				data,
			});
		} catch (error) {
			return res.status(400).send({
				isError: true,
				message: "Something went wrong",
				data: error,
			});
		}
	},
	login: async (req, res) => {
		const { email, password } = req.body;
		try {
			const data = await db.user.findOne({ where: { [Op.and]: [{ email }, { password }] } });

			return res.status(200).send({
				isError: false,
				message: "user found",
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
	checkUser: async (req, res) => {
		const { token } = req.query;
		try {
			let data = await db.user.findOne({ where: { uuid: token } });

			return res.status(200).send({
				isError: false,
				message: "user found",
				data,
			});
		} catch (error) {}
	},
};
