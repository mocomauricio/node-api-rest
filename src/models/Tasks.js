import { Model, DataTypes, Deferrable } from 'sequelize';
import { sequelize } from '../databases/database';
import Project from './Projects';


class Task extends Model {}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    done: {
        type: DataTypes.BOOLEAN
    },
    projectid: {
        type: DataTypes.INTEGER,
        references: {
            model: Project, // This is a reference to another model
            key: 'id', // This is the column name of the referenced model
      
            // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
            // Options:
            // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
            // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
            // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
        }
    },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'tasks', // We need to choose the model name
  timestamps: false 
});


/*
const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    done: {
        type: DataTypes.BOOLEAN
    },
    projectid: {
        type: DataTypes.INTEGER,
        references: {
            // This is a reference to another model
            model: Project,
      
            // This is the column name of the referenced model
            key: 'id',
      
            // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
            // Options:
            // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
            // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
            // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
          }
    },

}, { timestamps: false });
*/

export default Task;