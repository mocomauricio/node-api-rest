import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/database';
import Cliente from './Clientes';
import Mesa from './Mesas';
import Restaurante from './Restaurantes';


class Reserva extends Model {}

Reserva.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    restaurante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurante, // This is a reference to another model
            key: 'id', // This is the column name of the referenced model
        }
    },

    mesa_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Mesa, // This is a reference to another model
            key: 'id', // This is the column name of the referenced model
        }
    },

    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente, // This is a reference to another model
            key: 'id', // This is the column name of the referenced model
        }
    },

    fecha: {
        type: DataTypes.DATE
    },

    rango_hora:{
        type: DataTypes.TEXT
    },

    cantidad_solicitada:{
        type: DataTypes.INTEGER
    },

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'reservas', // We need to choose the model name
  timestamps: false 
});

export default Reserva;