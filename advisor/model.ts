import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const AdvisorModel = sequelize.define(
  "advisor",
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
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    departmentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "advisor",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = AdvisorModel;