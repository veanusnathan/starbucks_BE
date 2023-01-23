"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class product_detail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ product, size }) {
			// define association here
			this.belongsTo(product, { foreignKey: "productId", as: "product" });
			this.belongsTo(size, { foreignKey: "sizeId", as: "size" });
		}
	}
	product_detail.init(
		{
			calories: DataTypes.STRING,
			price: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "product_detail",
			freezeTableName: true,
			timestamps: false,
		}
	);
	return product_detail;
};
