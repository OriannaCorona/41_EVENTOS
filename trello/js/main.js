//Para reemplazar el input inicial por el input con el boton guardar y el tache
function desplegarBtnGuardar() {
	var caja = document.createElement("DIV");
	var inputNuevaLista = document.createElement("input");
	inputNuevaLista.className = "inputNuevaLista";
	var btnGuardar = document.createElement("button");
	btnGuardar.className = "btnGuardar";
	var textoBoton = document.createTextNode("Guardar");
	btnGuardar.appendChild(textoBoton);
	var tache = document.createElement("SPAN");
  	tache.className = "glyphicon glyphicon-remove";
  	var nombreLista = document.getElementById("añadirLista");
  	caja.appendChild(inputNuevaLista);
  	caja.appendChild(btnGuardar);
  	caja.appendChild(tache);
  	var contenedor = document.getElementById("contenedor");
  	contenedor.replaceChild(caja, nombreLista);	  	
//Para guardar una lista nueva
	var inputLista = document.createElement("input");
	btnGuardar.onclick = function crearListaNueva(e) {
		var viejoDiv = e.target.parentElement;
		var tituloLista = document.createTextNode(inputNuevaLista.value); 
		var listaHecha = document.createElement("DIV");
		listaHecha.appendChild(tituloLista);
	  	listaHecha.setAttribute("class", "listaHecha");
	  	viejoDiv.parentElement.replaceChild(listaHecha, viejoDiv);
	  	inputLista.placeholder = "Añadir una tarjeta..."; 
	  	inputLista.className = "inputLista";
		listaHecha.appendChild(inputLista);
	  	document.getElementById("contenedorDos").appendChild(listaHecha);
	  	contenedor.appendChild(nombreLista);  	 	
	}
//Para guardar una tajeta nueva
	
}