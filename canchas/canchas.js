// console.log("Bienvenido");
var canchaSoccer = document.getElementById("canchaSoc");
var canchaBasket = document.getElementById("canchaBask");
var canchaTenis = document.getElementById("canchaTen");

function mostrarCancha(id) {
  switch (id) {
    case "soccer":
      canchaSoccer.setAttribute("hidden","true");
      canchaSoccer.removeAttribute("hidden");
      break;
    case "basket":
      canchaBasket.setAttribute("hidden","true");
      canchaBasket.removeAttribute("hidden");
      break;

    case "tenis":
    canchaTenis.setAttribute("hidden","true");
    canchaTenis.removeAttribute("hidden");
    break;

    default:
    break;

  }
}
