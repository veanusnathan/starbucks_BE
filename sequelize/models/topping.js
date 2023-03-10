"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class topping extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	topping.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "topping",
			freezeTableName: true,
			timestamps: false,
		}
	);
	return topping;
};
