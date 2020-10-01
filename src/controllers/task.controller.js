import Task from '../models/Tasks'

export async function getTasks(req, res){
    try {
        const tasks = await Task.findAll();
        res.json({
            data:tasks
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getOneTask(req, res){
    const { id } = req.params;
    try {

        const task = await Task.findOne({
            where: {
                id:id
            }
        });
        res.json(task);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }


}

export async function deleteTask(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Task.destroy({
            where: {
                id:id
            }
        });
        res.json({
            message: 'Tarea eliminada', 
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

export async function createTask(req, res){
    //console.log(req.body);
    const { name, done, projectid } = req.body;
    try {
        let newTask = await Task.create({
            name,
            done,
            projectid
        },{
            fields:[ 'name', 'done', 'projectid']
        });
        if (newTask) {
            return res.json({
                message: 'Tarea creada satisfactoriamente',
                data: newTask
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

export async function updateTask(req, res){
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    try {
        const task = await Task.findOne({
            where: {
                id:id
            }
        });

        await task.update({
            name: name,
            done: done,
            projectid: projectid
        });

        return res.json({
            message: 'Tarea actualizada satisfactoriamente',
            data: task
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getTaskByProject(req, res){
}