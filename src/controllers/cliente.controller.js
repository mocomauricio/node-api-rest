import Cliente from '../models/Clientes'

export async function getClientes(req, res){
    try {
        const clientes = await Cliente.findAll();
        res.json({
            data:clientes
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getOneCliente(req, res){
    const { id } = req.params;
    try {

        const cliente = await Cliente.findOne({
            where: {
                id:id
            }
        });
        res.json(cliente);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }


}

export async function deleteCliente(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Cliente.destroy({
            where: {
                id:id
            }
        });
        res.json({
            message: 'Cliente eliminado', 
            count: deleteRowCount
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }


}

export async function createCliente(req, res){
    const { cedula, nombre, apellido } = req.body;
    try {
        let newCliente = await Cliente.create({
            cedula: cedula,
            nombre: nombre,
            apellido: apellido
        },{
            fields:[ 'cedula', 'nombre', 'apellido']
        });
        if (newCliente) {
            return res.json({
                message: 'Cliente creado satisfactoriamente',
                data: newCliente
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function updateCliente(req, res){
    const { id } = req.params;
    const { cedula, nombre, apellido } = req.body;

    try {
        const cliente = await Cliente.findOne({
            where: {
                id:id
            }
        });

        await cliente.update({
            cedula: cedula,
            nombre: nombre,
            apellido: apellido
        });

        return res.json({
            message: 'Cliente actualizado satisfactoriamente',
            data: cliente
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

