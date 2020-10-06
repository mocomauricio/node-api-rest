import Restaurante from '../models/Restaurantes'

export async function getRestaurantes(req, res){
    try {
        const restaurantes = await Restaurante.findAll();
        res.json({
            data:restaurantes
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getOneRestaurante(req, res){
    const { id } = req.params;
    try {

        const restaurante = await Restaurante.findOne({
            where: {
                id:id
            }
        });
        res.json(restaurante);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }


}

export async function deleteRestaurante(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Restaurante.destroy({
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

export async function createRestaurante(req, res){
    //console.log(req.body);
    const { nombre, direccion } = req.body;
    try {
        let newRestaurante = await Restaurante.create({
            nombre: nombre,
            direccion: direccion
        },{
            fields:[ 'nombre', 'direccion']
        });
        if (newRestaurante) {
            return res.json({
                message: 'Restaurante creado satisfactoriamente',
                data: newRestaurante
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

export async function updateRestaurante(req, res){
    const { id } = req.params;
    const { nombre, direccion } = req.body;

    try {
        const restaurante = await Restaurante.findOne({
            where: {
                id:id
            }
        });

        await restaurante.update({
            nombre: nombre,
            direccion: direccion
        });

        return res.json({
            message: 'Restaurante actualizado satisfactoriamente',
            data: restaurante
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}