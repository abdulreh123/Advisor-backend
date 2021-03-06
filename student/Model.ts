import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Studentmodel = sequelize.define(
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
    passportNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nationality: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    departmentId: {
      type: Sequelize.INTEGER,
    //  allowNull: false,
    },
    englishScore: {
      type: Sequelize.INTEGER,
    //  allowNull: false,
    },
    englishScore2: {
      type: Sequelize.INTEGER,
    //  allowNull: false,
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

module.exports = Studentmodel;