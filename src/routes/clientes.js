import { Router } from 'express';

const router = Router();

import { createCliente, getClientes, getOneCliente, deleteCliente, updateCliente } from '../controllers/cliente.controller';

// /api/cliente/
router.post('/', createCliente);
router.get('/', getClientes);

// /api/clientes/:id
router.get('/:id', getOneCliente);
router.delete('/:id', deleteCliente);
router.put('/:id', updateCliente);

export default router;