import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    message: 'Rota teste hello',
  });
});

export default routes;
