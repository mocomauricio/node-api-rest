import Reserva from '../models/Reservas'

export async function getReservas(req, res){
    try {
        const reservas = await Reserva.findAll();
        res.json({
            data:reservas
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getOneReserva(req, res){
    const { id } = req.params;
    try {

        const reserva = await Reserva.findOne({
            where: {
                id:id
            }
        });
        res.json(reserva);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }


}

export async function deleteReserva(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Reserva.destroy({
            where: {
                id:id
            }
        });
        res.json({
            message: 'Reserva eliminada', 
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

export async function createReserva(req, res){
    const { restaurante_id, mesa_id, cliente_id, fecha, rango_hora, cantidad_solicitada } = req.body;
    try {
        let newReserva = await Reserva.create({
            restaurante_id: restaurante_id,
            mesa_id: mesa_id,
            cliente_id: cliente_id,
            fecha: fecha,
            rango_hora: rango_hora,
            cantidad_solicitada: cantidad_solicitada
        },{
            fields:[ 'restaurante_id', 'mesa_id', 'cliente_id', 'fecha', 'rango_hora', 'cantidad_solicitada' ]
        });
        if (newReserva) {
            return res.json({
                message: 'Reserva creada satisfactoriamente',
                data: newReserva
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

export async function updateReserva(req, res){
    const { id } = req.params;
    const { restaurante_id, mesa_id, cliente_id, fecha, rango_hora, cantidad_solicitada } = req.body;

    try {
        const reserva = await Reserva.findOne({
            where: {
                id:id
            }
        });

        await reserva.update({
            restaurante_id: restaurante_id,
            mesa_id: mesa_id,
            cliente_id: cliente_id,
            fecha: fecha,
            rango_hora: rango_hora,
            cantidad_solicitada: cantidad_solicitada
        });

        return res.json({
            message: 'Reserva actualizada satisfactoriamente',
            data: reserva
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getReservasPorRestauranteFecha(req, res){
    const { restaurante_id, fecha } = req.params;
    try {
        const reservas = await Reserva.findAll({
            where: {
                restaurante_id: restaurante_id,
                fecha: fecha
            }
            /*
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
            */

        });
        res.json({
            data:reservas
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getReservasPorRestauranteFechaCliente(req, res){
    const { restaurante_id, fecha, cliente_id } = req.params;
    try {
        const reservas = await Reserva.findAll({
            where: {
                restaurante_id: restaurante_id,
                fecha: fecha,
                cliente_id: cliente_id
            }
            /*
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
            */
        });
        res.json({
            data:reservas
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}