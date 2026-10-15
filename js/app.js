/* Selecciono los elementos del DOM */
const botonGenerar = document.getElementById("generar");
const contenedorPaleta = document.getElementById("paleta");
const selectorCantidad = document.getElementById("cantidad");
const selectorFormato = document.getElementById("formato");

/* Función para generar un color hexadecimal aleatorio */
function generarColorHEX() {
  const numero = Math.floor(Math.random() * 16777216);

  return "#" + numero.toString(16).padStart(6, "0");
}

function generarColorHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

console.log(generarColorHEX());
