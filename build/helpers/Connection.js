"use strict";
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Advisor_New', 'app', 'VohkxZleque', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false
});
module.exports = sequelize;
