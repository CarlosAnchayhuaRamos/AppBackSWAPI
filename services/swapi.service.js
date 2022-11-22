const fetch = require('node-fetch');
const sequelize = require('../libs/sequelize');

class SwapiService{

  constructor(){

  }

  async findPeople(code) {

    const url = "https://swapi.py4e.com/api/people/" + code;

    let people;

    try{
      await fetch(url)
      .then(res => res.json())
      .then(rest => {
        people = rest;
      })
    }
    catch{
      people = {
        message: 'ocurrio un error con SWAPI'
      }
    }

    return people;
  }

  async createPeople(body) {

    const select ="INSERT INTO personas (id,nombre,altura,masa,colorpelo,colopiel,colorojos,anioonacimiento,genero,lugarnacimiento,peliculas,especies,vehiculos,naves,creado,editado,url) "+
    "VALUES ("+body.id+",'"+body.nombre+"',"+body.altura+","+body.masa+",'"+body.colorpelo+"','"+
    body.colopiel+"','"+body.colorojos+"','"+body.anioonacimiento+"','"+body.genero+
    "','"+body.lugarnacimiento+"','"+body.peliculas+"','"+body.especies+"','"+
    body.vehiculos+"','"+body.naves+"','"+body.creado+"','"+body.editado+"','"+
    body.url+"');"

    let data;

    try{
      data = await sequelize.query(select);
    }
    catch{
      data = {
        message: 'ocurrio un error con la base de datos'
      }
    }
    return data;
  }

  async findAll(id) {

    const select ="SELECT * from personas where id = " + id + ";";

    let data;

    try{
      [[data]] = await sequelize.query(select);
    }
    catch{
      data = {
        message: 'ocurrio un error con la base de datos'
      }
    }
    return data;
  }

}

module.exports = SwapiService;
