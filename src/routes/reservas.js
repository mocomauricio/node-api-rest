import { Router } from 'express';

const router = Router();

import { createReserva, getReservas, getOneReserva, deleteReserva, updateReserva } from '../controllers/reserva.controller';

// /api/reserva/
router.post('/', createReserva);
router.get('/', getReservas);

// /api/reservas/:id
router.get('/:id', getOneReserva);
router.delete('/:id', deleteReserva);
router.put('/:id', updateReserva);

export default router;