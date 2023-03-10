"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class sugar extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	sugar.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "sugar",
			freezeTableName: true,
			timestamps: false,
		}
	);
	return sugar;
};
