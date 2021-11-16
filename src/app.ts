import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();

export default app;

routes(app);
