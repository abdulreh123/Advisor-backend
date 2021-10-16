"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const CoursesModel = sequelize.define("courseGroup", {
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
    day: {
        type: Sequelize.DataTypes.ENUM("monday", "tuesday", "wednesday", "thursday", "friday", "saturday"),
        allowNull: false,
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    room: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "courseGroup",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
});
module.exports = CoursesModel;
