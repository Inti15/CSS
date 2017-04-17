function efecto(img) {
  // Se agregan atributos a img
  img.style.transform= "scale(3)";
  img.style.padding = "3px";
  img.style.borderWidth = "10px 20px";
  img.style.borderStyle = "solid";
  img.style.borderColor = "rgba(29, 233, 199, 0.5)";
  // img.style.margin = "80px";
  // img.style.zIndex = "1";

  var padre = img.parentNode;
  img.removeAttribute("onclick");
  var boton = document.createElement("button");

  // Se agregan atributos al boton
  boton.innerHTML = "X";
  boton.style.color = "black";
  boton.style.float = "right";
  boton.style.marginLeft = "80px";
  boton.style.marginBottom = "300px";
  boton.setAttribute("onclick", "cerrar(this)");
  padre.style.width = "50%";

  // Se agrrega elemento al árbol (DOM)
  padre.insertBefore(boton, img);
}

function cerrar(btn){
// Se obtienen elementos del árbol(DOM)
  var padre = btn.parentNode;
  var imagen = btn.nextSibling;
  //Se agregan atributos
  imagen.setAttribute("onclick","efecto(this)");
  //Se eliminan atributos
  imagen.removeAttribute("style");
  padre.removeAttribute("style");
  padre.removeChild(btn);
}
