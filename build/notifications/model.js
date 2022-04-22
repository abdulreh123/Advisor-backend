"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const Notifications = sequelize.define("notifications", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    receiver: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    sender: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    cta: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    release_date: {
        type: Sequelize.DATE,
    },
    type: {
        type: Sequelize.ENUM('system', 'normal'),
    },
    type_of_system_notification: {
        type: Sequelize.STRING,
    },
    color_code: {
        type: Sequelize.STRING,
    },
}, {
    tableName: "notifications",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
});
module.exports = Notifications;
