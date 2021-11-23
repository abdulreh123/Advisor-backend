"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const Coursesmodel = sequelize.define("courseGroup", {
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
    lecturerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: "coursegroup",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
});
module.exports = Coursesmodel;
