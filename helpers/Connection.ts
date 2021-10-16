const Sequelize = require('sequelize')

    
const sequelize = new Sequelize('advisor', 'app', 'Hd9msAwqPyd', {
    host: '212.175.35.110',
    dialect:'mysql',
    logging: false
  });

  module.exports = sequelize;