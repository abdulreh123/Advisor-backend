import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Departmentmodel = sequelize.define(
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
      allowNull: true,
    },
    facultyId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    english: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    tableName: "departments",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Departmentmodel;