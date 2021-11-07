import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Coursesmodel = sequelize.define(
  "courserooms",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    day:{
        type:Sequelize.DataTypes.ENUM("monday", "tuesday", "wednesday","thursday","friday","saturday"),
        allowNull: false,
    },
    timeStart:{
        type:Sequelize.TIME,
        allowNull: false,
    },
    timeEnd:{
        type:Sequelize.TIME,
        allowNull: false,
    },
    roomId:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    groupId:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
  },
  {
    tableName: "courserooms",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Coursesmodel;