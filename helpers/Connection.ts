const Sequelize = require('sequelize')

    
const sequelize = new Sequelize('advisor', 'app', 'Hd9msAwqPyd', {
    host: 'localhost',
    dialect:'mysql',
    logging: false
  });

  module.exports = sequelize;