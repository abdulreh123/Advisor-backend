import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Coursesmodel = sequelize.define(
  "courseGroup",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    lecturerId:{
        type:Sequelize.INTEGER,
        allowNull: false,
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
    room:{
        type:Sequelize.INTEGER,
        allowNull: false, 
    },
    courseId:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    year:{
        type:Sequelize.STRING,
        allowNull: false,
    }
  },
  {
    tableName: "courseGroup",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Coursesmodel;