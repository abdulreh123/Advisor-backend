import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Roommodel = sequelize.define(
  "rooms",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    buildingId:{
      type:Sequelize.INTEGER,
      allowNull: false,
    },
    name:{
      type:Sequelize.STRING,
      allowNull: false,
  },
  longitude:{
      type:Sequelize.FLOAT,
  },
  latitude:{
      type:Sequelize.FLOAT,
  },
  },
  {
    tableName: "rooms",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Roommodel;