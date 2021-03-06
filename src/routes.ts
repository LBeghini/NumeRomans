import { Application, Router } from 'express';
import RomanConvertController from './controllers/RomanConvertController';
import ArabicConvertController from './controllers/ArabicConvertController';
import IndexController from './controllers/IndexController';

const getRoutes: [string, Router][] = [
  ['/', IndexController],
  ['/roman', RomanConvertController],
  ['/arabic', ArabicConvertController],
];

const routes = (app: Application) => {
  getRoutes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};

export default routes;
