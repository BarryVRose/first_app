
//import React from React;

//fconst { connectMongo } = require("./connectMongo");

function log(message) {
    // send an HTTP message
    Console.log(message);
}

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Stinky')
module.exports.log = log;

sayHello('John');
//connectMongo();
