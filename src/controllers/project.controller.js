import Project from '../models/Projects'

export async function getProjects(req, res){
    try {
        const projects = await Project.findAll();
        res.json({
            data:projects
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}

export async function getOneProject(req, res){
    const { id } = req.params;
    try {

        const project = await Project.findOne({
            where: {
                id:id
            }
        });
        res.json(project);        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }


}

export async function deleteProject(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Project.destroy({
            where: {
                id:id
            }
        });
        res.json({
            message: 'Proyecto eliminado', 
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

export async function createProject(req, res){
    //console.log(req.body);
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name: name,
            priority: priority,
            description:description,
            deliverydate:deliverydate
        },{
            fields:[ 'name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({
                message: 'Proyecto creado satisfactoriamente',
                data: newProject
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

export async function updateProject(req, res){
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    try {
        const project = await Project.findOne({
            where: {
                id:id
            }
        });

        await project.update({
            name:name,
            priority:priority,
            description:description,
            deliverydate:deliverydate
        });

        return res.json({
            message: 'Proyecto actualizado satisfactoriamente',
            data: project
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Hubo un error',
            data: {}
        });
    }
}