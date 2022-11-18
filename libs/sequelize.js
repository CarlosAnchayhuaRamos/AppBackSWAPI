const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
var URI;
if(config.dbUrl){
  URI = config.dbUrl;
}else{
  URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}`;
}
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  dialectOptions: { ssl: {} }
});

module.exports = sequelize;
