import { Router } from 'express';

const router = Router();

import { createRestaurante, getRestaurantes, getOneRestaurante, deleteRestaurante, updateRestaurante } from '../controllers/restaurante.controller';

// /api/restaurante/
router.post('/', createRestaurante);
router.get('/', getRestaurantes);

// /api/restaurantes/:id
router.get('/:id', getOneRestaurante);
router.delete('/:id', deleteRestaurante);
router.put('/:id', updateRestaurante);

export default router;