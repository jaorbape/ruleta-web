// Obtenemos la imagen de la ruleta (ruleta.png).
const ruletaImg = document.querySelector(".ruleta-img");

// Obtenemos el botón (boton.png) que desencadena el giro.
const botonGirar = document.getElementById("boton");

// Cada vez que se hace clic en el botón, reiniciamos la ruleta y luego la giramos.
botonGirar.addEventListener("click", () => {
  // Quitar la transición para reiniciar la posición sin animación.
  ruletaImg.style.transition = "none";
  // Reiniciamos la ruleta a 0°.
  ruletaImg.style.transform = "rotate(0deg)";
  
  // Forzamos el reflow para que el navegador reconozca el cambio.
  ruletaImg.offsetWidth;
  
  // Generamos la nueva rotación aleatoria (mínimo 3600° para 10 vueltas completas).
  const grados = Math.floor(Math.random() * 360) + 3600;
  
  // Aplicamos la transición modificada a 5 segundos para un giro más lento y suave.
  ruletaImg.style.transition = "transform 5s ease-out";
  // Ejecutamos el giro a la cantidad de grados calculada.
  ruletaImg.style.transform = `rotate(${grados}deg)`;
});
