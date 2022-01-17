const Sequelize = require('sequelize')

    VohkxZlequeconst sequelize = new Sequelize('advisor', 'app', 'VohkxZleque', {
    host: 'localhost',
    dialect:'mysql',
    logging: false
  });

  module.exports = sequelize;
