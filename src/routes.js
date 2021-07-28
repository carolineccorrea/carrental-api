const { Router } = require('express');
const { default: ContactController } = require('./controller/ContactController');

const routes = new Router();

routes.post('/contact', ContactController.store);

module.exports = routes;