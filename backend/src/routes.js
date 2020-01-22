const { Router } = require('express');

const Selocontroller = require('./controllers/SeloController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/selo', Selocontroller.index);

routes.post('/selos', Selocontroller.store);

routes.get('/search', SearchController.index);

module.exports = routes;

