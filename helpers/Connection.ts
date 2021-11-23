const Sequelize = require('sequelize')

    
const sequelize = new Sequelize('advisor', '###', '######', {
    host: 'localhost',
    dialect:'mysql',
    logging: false
  });

  module.exports = sequelize;
