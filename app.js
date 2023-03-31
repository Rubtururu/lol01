// Variables del juego
let dinero = 0;
let tasa = 1; // Dinero por segundo
let tasaMejora = 1.1; // Tasa de mejora para actualizar la tasa de generación de dinero
let costoMejora = 10; // Costo de la próxima mejora de la tasa de generación de dinero
let nivelMejora = 1; // Nivel de mejora actual
let temporizador = 0; // Tiempo en segundos
let temporizadorIncremento = 1; // Tiempo en segundos para incrementar la tasa de generación de dinero
let temporizadorRanking = 86400; // Tiempo en segundos para actualizar el ranking diario
let ranking = []; // Array de objetos con los nombres y puntajes de los 10 mejores jugadores del día
let rankingActualizado = false; // Booleano para saber si el ranking ha sido actualizado hoy

// Elementos de la interfaz de usuario
const dineroSpan = document.getElementById('dinero');
const tasaSpan = document.getElementById('tasa');
const costoMejoraSpan = document.getElementById('costoMejora');
const nivelMejoraSpan = document.getElementById('nivelMejora');
const temporizadorSpan = document.getElementById('temporizador');
const rankingTabla = document.getElementById('rankingTabla');

// Función para actualizar la tasa de generación de dinero
function actualizarTasa() {
  dinero += tasa;
  dineroSpan.innerText = dinero.toFixed(2);
}

// Función para actualizar el temporizador y la tasa de generación de dinero
function actualizarTemporizador() {
  temporizador += temporizadorIncremento;
  temporizadorSpan.innerText = temporizador;
  
  if (temporizador % 10 === 0) {
    tasa *= tasaMejora;
    tasaSpan.innerText = tasa.toFixed(2);
  }
  
  if (temporizador % temporizadorRanking === 0 && !rankingActualizado) {
    actualizarRanking();
  }
}

// Función para actualizar el ranking diario
function actualizarRanking() {
  // Simulamos la obtención de los mejores puntajes del día
  const mejoresPuntajes = [
    {nombre: 'Juan', puntaje: 120},
    {nombre: 'Pedro', puntaje: 110},
    {nombre: 'Maria', puntaje: 105},
    {nombre: 'Lucia', puntaje: 100},
    {nombre: 'Carlos', puntaje: 95},
    {nombre: 'Jose', puntaje: 90},
    {nombre: 'Ana', puntaje: 85},
    {nombre: 'Sofia', puntaje: 80},
    {nombre: 'Miguel', puntaje: 75},
    {nombre: 'Luis', puntaje: 70},
  ];
  
  ranking = mejoresPuntajes;
  actualizarTablaRanking();
  rankingActualizado = true;
}

// Función para actualizar la tabla del ranking diario
function actualizarTablaRanking() {
  rankingTabla.innerHTML = `
    <tr>
      <th>Posición</th>
      <th>Nombre</th>
      <th>Puntaje</th>
    </tr>
  `;
  
  for (let i = 0; i < ranking.length; i++) {
    const posicion = i + 1;
    const nombre = ranking[i].nombre;
    const puntaje = ranking
