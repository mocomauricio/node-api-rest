import { Router } from 'express';

const router = Router();

import { createMesa, getMesas, getOneMesa, deleteMesa, updateMesa, getMesasPorRestauranteFechaRango } from '../controllers/mesa.controller';

// /api/mesa/
router.post('/', createMesa);
router.get('/', getMesas);

// /api/mesas/:id
router.get('/:id', getOneMesa);
router.delete('/:id', deleteMesa);
router.put('/:id', updateMesa);

// /api/mesasPorRestauranteFechaRango/:restaurante_id/:fecha/:rango_hora
router.get('/mesasPorRestauranteFechaRango/:restaurante_id/:fecha/:rango_hora', getMesasPorRestauranteFechaRango);

export default router;