// Variables del juego
let dinero = 0;
let tasa = 1; // Dinero por segundo
let tasaMejora = 1.1; // Tasa de mejora para actualizar la tasa de generación de dinero
let costoMejora = 10; // Costo de la próxima mejora de la tasa de generación de dinero
let nivelMejora = 1; // Nivel de mejora actual
let temporizador = 0; // Tiempo en segundos
let temporizadorIncremento = 1; // Tiempo en segundos para incrementar la tasa de generación de dinero
let temporizadorRanking = 86400; // Tiempo en segundos para actualizar el ranking diario
let ranking = []; // Array de objetos con los nombres y puntajes de
