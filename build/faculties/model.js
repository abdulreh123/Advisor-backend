"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const Departmentmodel = sequelize.define("faculties", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: "faculties",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
});
module.exports = Departmentmodel;
