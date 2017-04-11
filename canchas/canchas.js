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
