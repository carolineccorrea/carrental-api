const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

class App {

  constructor() {
    this.server = express();
    mongoose.connect('mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/carrental?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cookieParser());
    app.use(express.session({
      secret: 'keyboard cat',
      resave: true,
      saveUnitialized: true
    }));
    this.server.use(passport.initialize());
    this.server.use(passport.session());
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;
