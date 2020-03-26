const express = require('express')
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router()


routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.post('/session', SessionController.create)


routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile',ProfileController.index);



module.exports = routes
