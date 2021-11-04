import Sequelize = require("sequelize");
const sequelize = require("../helpers/Connection");
const Session = sequelize.define('Session', {
    sid: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    expires: {
        type: Sequelize.DATE
    },
    data: {
        type: Sequelize.STRING(50000)
    }
},
{
    tableName: 'sessions'
});

module.exports = Session;