import { Router } from 'express';

const router = Router();

import { createCliente, getClientes, getOneCliente, deleteCliente, updateCliente, getClientePorCedula } from '../controllers/cliente.controller';

// /api/clientes/
router.post('/', createCliente);
router.get('/', getClientes);

// /api/clientes/:id
router.get('/:id', getOneCliente);
router.delete('/:id', deleteCliente);
router.put('/:id', updateCliente);

// /api/clientes/cedula/:cedula
router.get('/cedula/:cedula', getClientePorCedula);

export default router;