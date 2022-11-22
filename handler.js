'use strict';

const querystring = require('querystring');
const SwapiService = require('./services/swapi.service');

const swapiService = new SwapiService();

module.exports.hello = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hola RIMAC!',
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.helloUser = async (event) => {

  const people = await swapiService.findPeople(event.pathParameters.name);

  return {
    statusCode: 200,
    body: JSON.stringify(
      people,
      null,
      2
    ),
  };
};

module.exports.createUser = async (event) => {
  const body = querystring.parse(event["body"])
  const data = await swapiService.createPeople(body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Se agregó personaje ',
        data: data,
        input: body,
      },
      null,
      2
    ),
  };
};

module.exports.obtenerData = async (event) => {
  const data = await swapiService.findAll(event.pathParameters.id);
  return {
    statusCode: 200,
    body: JSON.stringify(
      data,
      null,
      2
    ),
  };
};
