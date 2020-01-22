const knex = require('knex');
const knexfile = require('../knexfile');

const environment = process.env.NODE_ENV || 'development';
const configuration = knexfile[environment];

module.exports = knex(configuration);