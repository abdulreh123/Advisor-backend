import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const StudentPaymentmodel = sequelize.define(
  "studentPayments",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    studentId:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type:Sequelize.DataTypes.ENUM("course", "semester"),
      allowNull: false,
    },
    image: {
      type:Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type:Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "studentPayments",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = StudentPaymentmodel;