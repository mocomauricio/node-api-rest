
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
});

$("#id_buscar_mesa").click(function() {

	var cell = document.getElementById("id_mesas");
	if ( cell.hasChildNodes() ){
		while ( cell.childNodes.length >= 1 ){
			cell.removeChild( cell.firstChild );
		}
	}

	let restaurante_id = $('#id_restaurantes').val();
	let fecha= $('#id_fecha').val();
	let rango_hora= $('#id_rango_hora').val();


	fetch(`http://localhost:4000/api/mesas/mesasPorRestauranteFechaRango/${restaurante_id}/${fecha}/${rango_hora}`)
	.then((resp) => resp.json())
	.then(function (data) {
		let mesas = data.data;

		$('#id_mesas').append(`
			<tr>
				<th>Mesa</th>
				<th>Posicion</th>
				<th>Planta</th>
				<th>Capacidad</th>
				<th>Capacidad Solicitada</th>
				<th>Accion</th>
			</tr>`);

		return mesas.map(function(mesa) {
			$('#id_mesas').append(`
				<tr>
					<td>${mesa.nombre}</td>
					<td>${mesa.posicion}</td>
					<td>${mesa.planta}</td>
					<td>${mesa.capacidad}</td>
					<td><input type="number" id="id_capacidad_solicitada_${mesa.id}" name="quantity" min="1" max="5" value="${mesa.capacidad}"> </td>
					<td> 
						<button type="button" id="${mesa.id}" class="btn_mesa">Reservar</button> 
					</td>
				</tr>`);
		})
	})
	.catch(function (error) {
		console.log(error);
	});
});


$(document).on("click", ".btn_mesa", function() {
	mesa_id= $(this).attr('id')

	$('#mesa_id').val(mesa_id);
	$('#cedula_id').val("");
	$('#nombre_id').val("");
	$('#apellido_id').val("");

	$('#myModal').modal('show');
});




$("#cedula_id").blur(function() {
	let cedula = $("#cedula_id").val();
	let url = `http://localhost:4000/api/clientes/cedula/${cedula}`;
	console.log(url);

	fetch(url)
	.then((resp) => resp.json())
	.then(function(data) {
		if(data!=null){
			$('#nombre_id').val(data.nombre);
			$('#apellido_id').val(data.apellido);
			$('#cliente_id').val(data.id);
		}else{
			alert("el usuario no existe, complete el nombre y apellido para registrarlo");
			$('#nombre_id').val("");
			$('#apellido_id').val("");
			$('#cliente_id').val("");
		}

	})
	.catch(function(error) {
		console.log(error);
	});
});


$("#id_guardar").click(function() {

	rangos = $("#id_rango_hora").val();

	if($("#cliente_id").val() == ""){
		console.log("entro en el if");

		fetch('http://localhost:4000/api/clientes', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'cedula': $("#cedula_id").val(), 
				'nombre': $("#nombre_id").val(),
				'apellido': $("#apellido_id").val()
			})
		})
		.then((resp) => resp.json())
		.then(function(data) {

			console.log(data.data);

			for(i=0; i<rangos.length; i++) {
				fetch('http://localhost:4000/api/reservas', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						'restaurante_id': $("#id_restaurantes").val(), 
						'mesa_id': $("#mesa_id").val(),
						'cliente_id': data.data.id,
						'fecha': $("#id_fecha").val(),
						'rango_hora':rangos[i],
						'cantidad_solicitada': $("#id_capacidad_solicitada_"+$("#mesa_id").val()  ).val()
					})
				})
				.then((resp) => resp.json())
				.then(function(d) {
				   console.log(d);

				})
				.catch(function(err) {
				   console.log(err);
				});
			}
		})
		.catch(function(err) {
		   console.log(err);
		});
	} else {
		for(i=0; i<rangos.length; i++) {
			fetch('http://localhost:4000/api/reservas', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'restaurante_id': $("#id_restaurantes").val(), 
					'mesa_id': $("#mesa_id").val(),
					'cliente_id': $("#cliente_id").val(),
					'fecha': $("#id_fecha").val(),
					'rango_hora':rangos[i],
					'cantidad_solicitada':5
				})
			})
			.then((resp) => resp.json())
			.then(function(d) {
			   console.log(d);

			})
			.catch(function(err) {
			   console.log(err);
			});
		}
	}

	$('#myModal').modal('hide');
	alert("Reserva guardada satisfactoriamente!");

});
