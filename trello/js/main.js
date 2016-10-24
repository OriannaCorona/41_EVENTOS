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
	btnGuardar.onclick = function crearListaNueva(e) {
		var viejoDiv = e.target.parentElement;
		var tituloLista = document.createTextNode(inputNuevaLista.value); 
		var listaHecha = document.createElement("DIV");
		listaHecha.appendChild(tituloLista);
	  	listaHecha.setAttribute("class", "listaHecha");
	  	viejoDiv.parentElement.replaceChild(listaHecha, viejoDiv);
	  	var inputLista = document.createElement("input");
	  	var textoInput = document.createTextNode("Añadir una tarjeta...");
		listaHecha.appendChild(inputLista);
		inputLista.appendChild(textoInput);
	  	document.getElementById("contenedor").appendChild(listaHecha);
	  	 	
	}
}
/*
var li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  var check = document.createElement("input");
  check.type = "checkbox";
  var ul = document.getElementById("tareaNueva").value;
  var texto = document.createTextNode(ul);
  li.appendChild(check);
  li.appendChild(texto);
  if (ul === '') {
    alert("Agrega tu tarea nueva c:");
  } else {
    document.getElementById("listaTareas").appendChild(li);
  }
  document.getElementById("tareaNueva").value = "";
  */