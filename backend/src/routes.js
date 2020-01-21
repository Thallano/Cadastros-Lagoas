const { Router } = require('express');

const Selocontroller = require('./controllers/Selocontroller');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/Selo', Selocontroller.index);
routes.post('/Selo', Selocontroller.store);

routes.get('/search', SearchController.index);

module.exports = routes;

