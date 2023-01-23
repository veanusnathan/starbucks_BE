const db = require("../sequelize/models");

module.exports = {
	getProduct: async (req, res) => {
		try {
			let body = req.query;
			let data = await db.product.findAll();
			return res.status(200).send({
				isError: false,
				message: "get all product",
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
	getCategory: async (req, res) => {
		try {
			let data = await db.category.findAll();
			return res.status(200).send({
				isError: false,
				message: "get all category",
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
	getDetail: async (req, res) => {
		try {
			let param = req.params.id;
			let data = await db.product.findAll({ where: { id: param }, include: ["size"] });

			res.status(201).send({
				isError: false,
				message: "get detail",
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
};
