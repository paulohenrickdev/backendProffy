import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// Parâmetros: (Request Body), 
// (Route params: Identificar qual recurso eu quero atualizar o delete (/:id) ), 
// (Query Params: Paginação, Filtros, ordenação (users?page=2&sort=name) ) 


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;