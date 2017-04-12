// console.log("Bienvenido");
var canchaSoccer = document.getElementById("canchaSoc");
var canchaBasket = document.getElementById("canchaBask");
var canchaTenis = document.getElementById("canchaTen");

function mostrarCancha(id) {
  switch (id) {
    case "soccer":
      canchaSoccer.removeAttribute("hidden");
      canchaBasket.setAttribute("hidden","true");
      canchaTenis.setAttribute("hidden","true");
      break;
    case "basket":
      canchaBasket.removeAttribute("hidden");
      canchaSoccer.setAttribute("hidden","true");
      canchaTenis.setAttribute("hidden","true");
      break;

    case "tenis":
    canchaTenis.removeAttribute("hidden");
    canchaSoccer.setAttribute("hidden","true");
    canchaBasket.setAttribute("hidden","true");
    break;

    default:
    break;

  }
}

function mover(balon) {
  min = 0;
  max = 300;
  var posX = parseInt(Math.random() * (max-min) + min);
  var posY = parseInt(Math.random() * (max-min) + min);

  balon.removeAttribute("float");
  // balon.style.backgroundColor = "white";
  // balon.style.cursor = "pointer";
  balon.style.marginTop = posY + "px";
  balon.style.marginLeft = posX + "px";
  balon.style.transition = 1 +"s";

}
