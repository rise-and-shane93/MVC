const Sequelize = require('sequelize');

const sequalize = new Sequelize('node-complete', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequalize;