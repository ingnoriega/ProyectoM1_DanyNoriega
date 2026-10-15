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
/* Función para generar un color HSL aleatorio */

function generarColorHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);

  return `hsl(${h}, ${s}%, ${l}%)`;
}
/* Función para convertir un color HSL a HEX */

function convertirHSLaHEX(colorHSL) {
  const canvas = document.createElement("canvas");
  const contexto = canvas.getContext("2d");

  contexto.fillStyle = colorHSL;
  const colorRGB = contexto.fillStyle;

  return colorRGB.toUpperCase();
}
/* Función para mostrar la paleta de colores */
function mostrarPaleta() {
  const cantidad = Number(selectorCantidad.value);
  const formato = selectorFormato.value;

  contenedorPaleta.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    let color;
    let codigoHEX;

    if (formato === "HSL") {
      color = generarColorHSL();
      codigoHEX = convertirHSLaHEX(color);
    } else {
      color = generarColorHEX();
      codigoHEX = color;
    }

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("color");

    const muestra = document.createElement("div");
    muestra.classList.add("muestra-color");
    muestra.style.backgroundColor = color;

    const codigo = document.createElement("span");
    codigo.classList.add("codigo-color");
    codigo.textContent = codigoHEX;

    tarjeta.appendChild(muestra);
    tarjeta.appendChild(codigo);

    contenedorPaleta.appendChild(tarjeta);
  }
}

botonGenerar.addEventListener("click", mostrarPaleta);

mostrarPaleta();

console.log(generarColorHEX());
