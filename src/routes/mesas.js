import { Router } from 'express';

const router = Router();

import { createMesa, getMesas, getOneMesa, deleteMesa, updateMesa } from '../controllers/mesa.controller';

// /api/mesa/
router.post('/', createMesa);
router.get('/', getMesas);

// /api/mesas/:id
router.get('/:id', getOneMesa);
router.delete('/:id', deleteMesa);
router.put('/:id', updateMesa);

export default router;