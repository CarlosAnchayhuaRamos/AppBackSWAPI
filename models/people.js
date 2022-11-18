const { json } = require("sequelize");
const sequelize = require("../libs/sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define('people',{
    id: {
      type: type.INTEGER,
      primaryKey: true
    },
    nombre: type.STRING,
    altura: type.INTEGER,
    masa: type.INTEGER,
    colorpelo: type.STRING,
    colopiel: type.STRING,
    colorojos: type.STRING,
    anioonacimiento: type.STRING,
    genero: type.STRING,
    lugarnacimiento: type.STRING,
    peliculas: type.ARRAY,
    especies: type.ARRAY,
    vehiculos: type.ARRAY,
    naves: type.ARRAY,
    creado: type.DATE,
    editado: type.DATE,
    url: type.STRING
  })
}


// CREATE TABLE personas (
//     id int,
//     nombre varchar(255),
//     altura float,
//     masa float,
//     colorpelo varchar(255),
//     colopiel varchar(255),
//     colorojos varchar(255),
//     anioonacimiento varchar(255),
//     genero varchar(25),
//     lugarnacimiento varchar(255),
//     peliculas json,
//     especies json,
//     vehiculos json,
//     naves json,
//     creado varchar(255),
//     editado varchar(255),
//     url varchar(255)
// );
