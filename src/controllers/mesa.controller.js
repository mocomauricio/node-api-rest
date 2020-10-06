import Mesa from '../models/Mesas'

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
    const { nombre, restaurante_id, posicion, planta } = req.body;
    try {
        let newMesa = await Mesa.create({
            nombre: nombre,
            restaurante_id: restaurante_id,
            posicion:posicion,
            planta:planta
        },{
            fields:[ 'nombre', 'restaurante_id', 'posicion', 'planta']
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
    const { nombre, restaurante_id, posicion, planta } = req.body;

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
            planta:planta
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