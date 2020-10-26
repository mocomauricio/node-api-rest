$( document ).ready(function() {
	fetch('http://localhost:4000/api/restaurantes/')
	.then((resp) => resp.json())
	.then(function(data) {
		let restaurantes = data.data;
		return restaurantes.map(function(restaurante) {
			$('#id_restaurantes').append(`<option value="${restaurante.id}"> ${restaurante.nombre} </option>`);
		})
	})
	.catch(function(error) {
		console.log(error);
	});


	fetch('http://localhost:4000/api/clientes/')
	.then((resp) => resp.json())
	.then(function(data) {
		let clientes = data.data;
		return clientes.map(function(cliente) {
			$('#id_clientes').append(`<option value="${cliente.id}"> ${cliente.nombre} ${cliente.apellido} - CI: ${cliente.cedula} </option>`);
		})
	})
	.catch(function(error) {
		console.log(error);
	});
});


$("#id_filtrar_reservas").click(function() {
	var cell = document.getElementById("id_tabla_reservas");
	if ( cell.hasChildNodes() ){
		while ( cell.childNodes.length >= 1 ){
			cell.removeChild( cell.firstChild );
		}
	}

	url = "";

	if( ($("#id_restaurantes").val()=="") || ($("#id_fecha").val()=="")){
		alert("Elija un restaurante y una fecha, opcionalmente un cliente");
		return ;

	}else if( $("#id_clientes").val()=="" ){
		url = `http://localhost:4000/api/reservas/restaurante_fecha/${$("#id_restaurantes").val()}/${$("#id_fecha").val()}`;
	}else{
		url = `http://localhost:4000/api/reservas/restaurante_fecha_cliente/${$("#id_restaurantes").val()}/${$("#id_fecha").val()}/${$("#id_clientes").val()}`;
	}

	console.log(url);

	fetch(url)
	.then((resp) => resp.json())
	.then(function(data) {
		$('#id_tabla_reservas').append(`
			<tr>
				<th>Mesa</th>
				<th>Cliente</th>
				<th>Rango hora</th>
				<th>Capacidad Solicitada</th>
			</tr>`
		);
		let reservas = data.data;
		return reservas.map(function(reserva) {
			fetch(`http://localhost:4000/api/mesas/${reserva.mesa_id}`)
			.then((resp2) => resp2.json())
			.then(function(mesa) {

				fetch(`http://localhost:4000/api/clientes/${reserva.cliente_id}`)
				.then((resp3) => resp3.json())
				.then(function(cliente) {
					$('#id_tabla_reservas').append(`
						<tr>
							<td>${mesa.nombre}</td>
							<td>${cliente.nombre} ${cliente.apellido}</td>
							<td>${reserva.rango_hora}</td>
							<td>${reserva.cantidad_solicitada}</td>
						</tr>`
					);
				})
				.catch(function(error) {
					console.log(error);
				});

			})
			.catch(function(error) {
				console.log(error);
			});



			/*
			$('#id_tabla_reservas').append(`
				<tr>
					<td>${reserva.mesa_id}</td>
					<td>${reserva.cliente_id}</td>
					<td>${reserva.rango_hora}</td>
					<td>${reserva.cantidad_solicitada}</td>
				</tr>`
			);
			*/
		})
	})
	.catch(function(error) {
		console.log(error);
	});
});