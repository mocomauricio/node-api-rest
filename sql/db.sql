
INSERT INTO clientes (cedula, nombre, apellido)
    VALUES ('123456', 'Juan', 'Perez');

INSERT INTO clientes (cedula, nombre, apellido)
    VALUES ('753951', 'Fulano', 'Detal');

INSERT INTO clientes (cedula, nombre, apellido)
    VALUES ('852147', 'Mengano', 'Detal');

INSERT INTO restaurantes (nombre, direccion)
    VALUES('Lomilandia', 'Calle Falsa 123');

INSERT INTO restaurantes (nombre, direccion)
    VALUES('Pancholos', 'Mcal Lopez 755');

INSERT INTO restaurantes (nombre, direccion)
    VALUES('Policantina', 'Mcal Estigarribia');

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa-1', 1, '(0,0)', 1, 4);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa-2', 1, '(5,5)', 1, 10);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa-3', 1, '(10,10)', 1, 6);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa X', 2, '(0,0)', 1, 4);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa Y', 2, '(5,5)', 1, 10);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa Z', 2, '(10,10)', 1, 6);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa I', 2, '(0,0)', 1, 4);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa J', 2, '(5,5)', 1, 10);

INSERT INTO mesas (nombre, restaurante_id, posicion, planta, capacidad)
    VALUES('mesa K', 2, '(10,10)', 1, 6);

INSERT INTO reservas (restaurante_id, mesa_id, cliente_id, fecha, rango_hora, cantidad_solicitada)
    VALUES (1, 1, 1, '2020-10-07', '13-14', 2);

INSERT INTO reservas (restaurante_id, mesa_id, cliente_id, fecha, rango_hora, cantidad_solicitada)
    VALUES (1, 2, 2, '2020-10-07', '13-14', 4);
