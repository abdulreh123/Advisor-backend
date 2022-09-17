const Sequelize = require('sequelize')

    const sequelize = new Sequelize('advisor_new', 'abdul', 'ar12d.a.r', {
    host: 'advsor.mysql.database.azure.com',
    port: 3306,
    dialect:'mysql',
    logging: false
  });


  module.exports = sequelize;
