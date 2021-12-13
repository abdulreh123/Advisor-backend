"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const Coursesmodel = sequelize.define("courses", {
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
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    semester: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    credit: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ECT5: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    prerequisites: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    corequisites: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "courses",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
});
module.exports = Coursesmodel;
