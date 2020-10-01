import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Imports routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//inicializacion
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


export default app;