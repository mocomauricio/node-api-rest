import { Router } from 'express';

const router = Router();

import { createReserva, getReservas, getOneReserva, deleteReserva, updateReserva, getReservasPorRestauranteFecha, getReservasPorRestauranteFechaCliente } from '../controllers/reserva.controller';

// /api/reservas/
router.post('/', createReserva);
router.get('/', getReservas);

// /api/reservas/:id
router.get('/:id', getOneReserva);
router.delete('/:id', deleteReserva);
router.put('/:id', updateReserva);

// /api/reservas/restaurante_fecha/:restaurante_id/:fecha
router.get('/restaurante_fecha/:restaurante_id/:fecha', getReservasPorRestauranteFecha);

// /api/reservas/restaurante_fecha_cliente/:restaurante_id/:fecha/:cliente_id
router.get('/restaurante_fecha_cliente/:restaurante_id/:fecha/:cliente_id', getReservasPorRestauranteFechaCliente);

export default router;