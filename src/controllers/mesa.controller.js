import Mesa from '../models/Mesas'
import Reserva from '../models/Reservas'
import Sequelize from 'sequelize';
 
export async function getMesas(req, res){
    try {
        const mesas = await Mesa.findAll();
        res.json({
            data:mesas
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}
 
export async function getOneMesa(req, res){
    const { id } = req.params;
    try {
 
        const mesa = await Mesa.findOne({
            where: {
                id:id
            }
        });
        res.json(mesa);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
 
 
}
 
export async function deleteMesa(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Mesa.destroy({
            where: {
                id:id
            }
        });
        res.json({
            message: 'Mesa eliminada', 
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
 
export async function createMesa(req, res){
    //console.log(req.body);
    const { nombre, restaurante_id, posicion, planta, capacidad } = req.body;
    try {
        let newMesa = await Mesa.create({
            nombre: nombre,
            restaurante_id: restaurante_id,
            posicion:posicion,
            planta:planta,
            capacidad:capacidad
        },{
            fields:[ 'nombre', 'restaurante_id', 'posicion', 'planta', 'capacidad']
        });
        if (newMesa) {
            return res.json({
                message: 'Mesa creada satisfactoriamente',
                data: newMesa
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
 
export async function updateMesa(req, res){
    const { id } = req.params;
    const { nombre, restaurante_id, posicion, planta, capacidad } = req.body;
 
    try {
        const mesa = await Mesa.findOne({
            where: {
                id:id
            }
        });
 
        await mesa.update({
            nombre: nombre,
            restaurante_id: restaurante_id,
            posicion:posicion,
            planta:planta,
            capacidad:capacidad
        });
 
        return res.json({
            message: 'Mesa actualizado satisfactoriamente',
            data: mesa
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}
 
// Funcion que trae las mesas disponibles
// Traer todas las mesas reservadas del restaurante a esa hora
// Traer todas las mesas de ese restaurante
// Crear lista buscando todas las mesas.
// Devolver esa info
 
export async function getMesasPorRestauranteFechaRango(req, res){
    const { restaurante_id, fecha, rango_hora } = req.params;
    let mesas;
    let reserva;
    const Op = Sequelize.Op;
 
    // Si rango de horas tiene mas de una fecha, poner el primero y el ultimo en 
    
    let condicion;
    let listaRangoHoras = rango_hora.split(',');
    console.log(listaRangoHoras)
    console.log(listaRangoHoras.length)
 
    if (listaRangoHoras.length > 1) {
        condicion = {
            [Op.between]: [listaRangoHoras[0], listaRangoHoras[listaRangoHoras.length - 1]]
        }
    } else {
        condicion = listaRangoHoras[0];
    }
 
    console.log(listaRangoHoras)
    console.log(condicion)
 
    try {
        mesas = await Mesa.findAll({
            where: {
                restaurante_id:restaurante_id
            }
        });
 
        reserva = await Reserva.findAll({
            where: {
                restaurante_id:restaurante_id,
                fecha: fecha,
                rango_hora: condicion
            }
        });
        // Get reservas   
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
 
    const mesasTotal = [];
    const reservasTotal = [];
    const mesaDisponible = [];
 
    mesas.forEach(mesa => mesasTotal.push(mesa.dataValues))
    reserva.forEach(r => reservasTotal.push(r.dataValues))
    const results = mesasTotal.filter(({ id: id1 }) => !reservasTotal.some(({ mesa_id: id2 }) => id2 === id1));
 
    res.json({
        data:results
    });     
}