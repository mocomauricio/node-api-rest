
INSERT INTO clientes (id, cedula, nombre, apellido)
    VALUES (1, '123456', 'Juan', 'Perez');

INSERT INTO clientes (id, cedula, nombre, apellido)
    VALUES (2, '753951', 'Fulano', 'Detal');

INSERT INTO clientes (id, cedula, nombre, apellido)
    VALUES (3, '852147', 'Mengano', 'Detal');

INSERT INTO restaurantes (id, nombre, direccion)
    VALUES(1, 'Lomilandia', 'Calle Falsa 123');

INSERT INTO restaurantes (id, nombre, direccion)
    VALUES(2, 'Pancholos', 'Mcal Lopez 755');

INSERT INTO restaurantes (id, nombre, direccion)
    VALUES(3, 'Policantina', 'Mcal Estigarribia');

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(1, 'mesa-1', 1, '(0,0)', 1, 4);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(2, 'mesa-2', 1, '(5,5)', 1, 10);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(3, 'mesa-3', 1, '(10,10)', 1, 6);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(4, 'mesa X', 2, '(0,0)', 1, 4);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(5, 'mesa Y', 2, '(5,5)', 1, 10);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(6, 'mesa Z', 2, '(10,10)', 1, 6);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(7, 'mesa I', 2, '(0,0)', 1, 4);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(8, 'mesa J', 2, '(5,5)', 1, 10);

INSERT INTO mesas (id, nombre, restaurante_id, posicion, planta, capacidad)
    VALUES(9, 'mesa K', 2, '(10,10)', 1, 6);

INSERT INTO reservas (id, restaurante_id, mesa_id, cliente_id, fecha, rango_hora, cantidad_solicitada)
    VALUES (1, 1, 1, 1, '2020-10-07', '13-14', 2);

INSERT INTO reservas (id, restaurante_id, mesa_id, cliente_id, fecha, rango_hora, cantidad_solicitada)
    VALUES (2, 1, 2, 2, '2020-10-07', '13-14', 4);
