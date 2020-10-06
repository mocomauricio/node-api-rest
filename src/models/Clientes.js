import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/database';


class Cliente extends Model {}

Cliente.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cedula: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        noUpdate : true
    },
    nombre: {
        type: DataTypes.TEXT
    },
    apellido: {
        type: DataTypes.TEXT
    },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'clientes', // We need to choose the model name
  timestamps: false 
});



export default Cliente;