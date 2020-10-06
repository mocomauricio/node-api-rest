import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/database';

class Restaurante extends Model {}

Restaurante.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.TEXT
    },
    direccion: {
        type: DataTypes.TEXT
    },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'restaurantes', // We need to choose the model name
  timestamps: false 
});

export default Restaurante;