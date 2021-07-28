const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')

class App{

  constructor(){
    this.server = express();
    mongoose.connect('mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/carrental?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

module.exports = new App().server;
