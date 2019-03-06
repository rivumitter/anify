const animals = require('animals');

const adjectives = require('adjectives');

const max = adjectives.length;
const min = 30;

const random = ()=> Math.floor(Math.random() * (+max - +min)) + +min;

module.exports = ()=> adjectives[random()]+"-"+animals()+"-"+random();


