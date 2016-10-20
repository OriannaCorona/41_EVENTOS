/*var tareas = [];
function visualizarTarea() {
	for (var i = 0; i < tareas.length; i++) {
		listaTareas.innerHTML += "<p>" + tareas[i];
	}
}
function agregarElemento() { 
	tareas.push(tareaNueva.value);
	visualizarTarea();
}*/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function agregarElemento() {
  var li = document.createElement("li");
  var inputValor = document.getElementById("tareaNueva").value;
  var t = document.createTextNode(inputValor);
  li.appendChild(t);
  if (inputValor === '') {
    alert("You must write something!");
  } else {
    document.getElementById("lista").appendChild(li);
  }
  document.getElementById("tareaNueva").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "check-box";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}