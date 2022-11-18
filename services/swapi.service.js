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

  async findAll() {

    const select ="SELECT * from prueba;";

    const [[data]] = await sequelize.query(select);
    //const data = "hola mundo";
    console.log(data);
    return data;
  }

}

module.exports = SwapiService;
