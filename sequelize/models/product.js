"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ product_detail, category }) {
			// define association here
			this.belongsTo(category, { foreignKey: "categoryId", as: "product" });
			this.hasMany(product_detail, { foreignKey: "productId", as: "size" });
		}
	}
	product.init(
		{
			name: DataTypes.STRING,
			img: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "product",
			freezeTableName: true,
			timestamps: false,
		}
	);
	return product;
};
