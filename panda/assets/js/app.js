var textoIzq = document.getElementById("izq");
var textoDer = document.getElementById("der");
//
function verificaClick(event) {
  var obj = event.target;
  console.log(obj);
  if(event.detail == 1){
    console.log("ocultar");

    // ocutar();
  }
  else if (event.detail == 2) {
    console.log("mostrar");
    // mostrar();
  }

}

// Función para ocultar elementos
function ocultar(id) {
  if(id == 1){//Caso boton Origen
    console.log("ocultar");
    textoIzq.style.visibility = "hidden";
  }
  else if(id == 2){//Caso boton Exhibición
    textoDer.style.visibility = "hidden";
  }
}
// Función para mostrar el texto
function mostrar(id) {
  if(id ==1 && textoIzq.style.visibility == "hidden"){//Caso boton Origen
    console.log("mostrar");
    textoIzq.style.visibility = "visible";

  }
  else{//Caso boton Exhibición
    textoDer.style.visibility = "visible";
  }
}

// Función para restaurar fotografías
function restaurar() {

}
