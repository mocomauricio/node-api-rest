import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/database';
import Restaurante from './Restaurantes';

class Mesa extends Model {}

Mesa.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.TEXT
    },
    restaurante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurante, // This is a reference to another model
            key: 'id', // This is the column name of the referenced model
        }
    },
    posicion: {
        type: DataTypes.TEXT
    },
    planta: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    capacidad: {
        type: DataTypes.INTEGER
    },

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'mesas', // We need to choose the model name
  timestamps: false 
});

export default Mesa;