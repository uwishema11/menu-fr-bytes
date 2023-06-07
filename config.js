
const Sequelize = require('sequelize');

const sequelize = new Sequelize ('restourant','postgres','bandwidth@!1', {
    host: 'localhost',
    dialect: 'postgres'
});



module.exports = sequelize;
