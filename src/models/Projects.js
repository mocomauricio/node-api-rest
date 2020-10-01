import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/database';


class Project extends Model {}

Project.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    deliverydate: {
        type: DataTypes.DATE
    },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'projects', // We need to choose the model name
  timestamps: false 
});





/*

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    },
}, { timestamps: false });
*/

export default Project;