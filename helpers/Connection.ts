const Sequelize = require('sequelize')

    const sequelize = new Sequelize('Advisor_new', 'root', 'VohkxZleque', {
    host: 'localhost',
    port: 3306,
    dialect:'mysql',
    logging: false
  });

  module.exports = sequelize;
