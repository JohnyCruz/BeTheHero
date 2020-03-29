const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');
const {celebrate, Segments, Joi} = require('celebrate');

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),ongController.create);

routes.post('/sessions', sessionController.create);

routes.get('/incidents',celebrate(
    {
        [Segments.QUERY]: Joi.object({
            page: Joi.number().required(),
        })
    }
), incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', celebrate(
    {
        [Segments.PARAMS]: Joi.object({
            id: Joi.number().required(),
        })
    }
), incidentController.delete);


routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}),profileController.index);


module.exports = routes;