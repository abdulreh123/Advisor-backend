"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const BuildingModel = sequelize.define("buildings", {
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
    longitude: {
        type: Sequelize.FLOAT,
    },
    latitude: {
        type: Sequelize.FLOAT,
    },
}, {
    tableName: "buildings",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
});
module.exports = BuildingModel;
