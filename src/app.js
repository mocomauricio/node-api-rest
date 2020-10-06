import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Imports routes
import clienteRoutes from './routes/clientes';
import restauranteRoutes from './routes/restaurantes';
import mesaRoutes from './routes/mesas';
import reservaRoutes from './routes/reservas';

//inicializacion
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/clientes', clienteRoutes);
app.use('/api/restaurantes', restauranteRoutes);
app.use('/api/mesas', mesaRoutes);
app.use('/api/reservas', reservaRoutes);

export default app;