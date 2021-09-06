import express from 'express';
import routes from'./routes';
const mongoose = require('mongoose');

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
    // this.server.use(cookieParser());
    // this.server.use(express.session({
    //   secret: 'keyboard cat'
    // }));
    //  this.server.use(passport.initialize());
    //  this.server.use(passport.session());
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;
