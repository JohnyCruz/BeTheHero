const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController')
const profileController = require('./controller/profileController')
const sessionController = require('./controller/sessionController')


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/sessions', sessionController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


routes.get('/profile',profileController.index);


module.exports = routes;