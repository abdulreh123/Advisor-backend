import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");

const Annoucementmodel = sequelize.define(
  "announcements",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    content:{
      type:Sequelize.STRING,
      allowNull: false,
  },
    sender:{
      type:Sequelize.STRING,
  },
    groupId:{
      type:Sequelize.INTEGER,
      allowNull: false,
  },
  },
  {
    tableName: "announcements",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Annoucementmodel;