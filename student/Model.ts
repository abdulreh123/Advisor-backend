import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const StudentModel = sequelize.define(
  "students",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId:{
      type: Sequelize.INTEGER,
      allowNull: false,
      unique:true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    advisorId: {
        type: Sequelize.INTEGER,
      },
  },
  {
    tableName: "students",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = StudentModel;