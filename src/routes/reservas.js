import { Router } from 'express';

const router = Router();

import { createReserva, getReservas, getOneReserva, deleteReserva, updateReserva, getReservasPorRestauranteFecha, getReservasPorRestauranteFechaCliente } from '../controllers/reserva.controller';

// /api/reserva/
router.post('/', createReserva);
router.get('/', getReservas);

// /api/reservas/:id
router.get('/:id', getOneReserva);
router.delete('/:id', deleteReserva);
router.put('/:id', updateReserva);

// /api/restaurante_fecha/:restaurante_id/:fecha
router.get('/restaurante_fecha/:restaurante_id/:fecha', getReservasPorRestauranteFecha);

// /api/restaurante_fecha_cliente/:restaurante_id/:fecha/:cliente_id
router.get('/restaurante_fecha_cliente/:restaurante_id/:fecha/:cliente_id', getReservasPorRestauranteFechaCliente);

export default router;