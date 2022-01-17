const Sequelize = require('sequelize')

    const sequelize = new Sequelize('advisor', 'root', 'VohkxZleque', {
    host: 'localhost',
    port: 3306,
    dialect:'mysql',
    logging: false
  });

  module.exports = sequelize;
