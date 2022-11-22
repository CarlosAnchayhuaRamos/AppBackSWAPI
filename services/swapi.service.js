//const fetch = require("node-fetch");
const sequelize = require('../libs/sequelize');

class SwapiService{

  constructor(){

  }

  async findPeople(code) {

    const url = "https://swapi.py4e.com/api/people/" + code;

    let people;

    await fetch(url)
      .then(res => res.json())
      .then(rest => {
        people = rest;
      })

    return people;
  }

  async createPeople(body) {

    const select ="INSERT INTO personas (id,nombre,altura,masa,colorpelo,colopiel,colorojos,anioonacimiento,genero,lugarnacimiento,peliculas,especies,vehiculos,naves,creado,editado,url) "+
    "VALUES ("+body.id+",'"+body.nombre+"',"+body.altura+"',"+body.colorpelo+"',"+
    body.colopiel+"',"+body.colorojos+"',"+body.anioonacimiento+"',"+body.genero+
    "',"+body.lugarnacimiento+"',"+body.peliculas+"',"+body.especies+"',"+
    body.vehiculos+"',"+body.naves+"',"+body.creado+"',"+body.editado+"',"+
    body.url+"');"

    await sequelize.query(select);
    const data = "hola mundo";
    return data;
  }

  async findAll(id) {

    const select ="SELECT * from personas where id = " + id + ";";

    const [[data]] = await sequelize.query(select);
    //const data = "hola mundo";
    console.log(data);
    return data;
  }

}

module.exports = SwapiService;
