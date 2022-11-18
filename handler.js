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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
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
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'petición para crear usuarios',
        input: 'hola ' + body.user,
      },
      null,
      2
    ),
  };
};

module.exports.obtenerData = async (event) => {
  const data = await swapiService.findAll();
  return {
    statusCode: 200,
    body: JSON.stringify(
      data,
      null,
      2
    ),
  };
};
