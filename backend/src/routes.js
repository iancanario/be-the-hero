import express from 'express';

import OngController from './controllers/OngsController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionsController from './controllers/SessionController';

const routes = express.Router();

routes.post('/sessions', SessionsController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

export default routes;