"use strict";
const Sequelize = require('sequelize');
const sequelize = new Sequelize('advisor', 'app', 'VohkxZleque', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
module.exports = sequelize;
