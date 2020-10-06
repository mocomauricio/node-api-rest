import Cliente from '../models/Clientes';
import Restaurante from '../models/Restaurantes';
import Mesa from '../models/Mesas';
import Reserva from '../models/Reservas';


async function migracion() {
    console.log("Iniciando migraciones de tablas");

    console.log("Creando tabla clientes");
    await Cliente.sync();
    console.log("Creando tabla restaurantes");
    await Restaurante.sync();
    console.log("Creando tabla mesas");
    await Mesa.sync();
    console.log("Creando tabla reservas");
    await Reserva.sync();

    console.log("Migracion de tablas finalizada");
    console.log("Presione Contro+c para terminar...")
};

migracion();