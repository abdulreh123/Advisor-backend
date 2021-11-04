import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Coursesmodel = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userAdvisor: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    userStudent: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    userChairman: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    userSuperAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Coursesmodel;