import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const DepartmentModel = sequelize.define(
  "departments",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    chairmanId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "departments",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = DepartmentModel;