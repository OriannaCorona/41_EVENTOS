// Crear una nueva tarea al darle click en el boton "Agregar" con el input de check
function agregarTarea() {
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
//Crea los spans de info y el bote de basura 
  var bote = document.createElement("SPAN");
  bote.className = "glyphicon glyphicon-trash";
  li.appendChild(bote);
  var info = document.createElement("SPAN");
  info.className = "glyphicon glyphicon-info-sign";
  li.appendChild(info);
//Elimina la tarea agregada
  bote.onclick = function() {
  	var div = this.parentElement;
  	//te dice a que elemento se le esta aplicando el evento, como el target.
  	div.style.display = "none";
  }
  info.onclick = function() {
  	var div = this.parentElement;
  	div.style.display = "none";
  }
  //Con addEventListener se le da la instruccion que se ejecute la funcion cuando se lleve a cabo el evento
  check.addEventListener("click", tacharTarea);
}
//Tachar la tarea realizada	
function tacharTarea(){
	var tache = this.parentElement;
	if(this.checked){
		tache.style.textDecoration = "line-through";	
	}else{
		tache.style.textDecoration = "none";
	}	
}


