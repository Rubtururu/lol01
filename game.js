// Constants
const BOARD_SIZE = 8;
const LEVELS = [
  { score: 500, moves: 30 },
  { score: 1000, moves: 40 },
  { score: 1500, moves: 50 },
  { score: 2000, moves: 60 },
  { score: 2500, moves: 70 },
];
const CANDY_TYPES = [
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "yellow",
];
const SELECTED_CLASS = "selected";
const SWAP_SPEED = 200;

// Variables
let gameBoard = document.getElementById("game-board");
let scoreBoard = document.getElementById("score-board");
let scoreElement = document.getElementById("score");
let levelElement = document.getElementById("level");
let score = 0;
let level = 0;
let moves = 0;
let candies = [];
let selectedCandy = null;

// Functions
function init() {
  createBoard();
  renderBoard();
  updateScoreBoard();
  updateLevel();
}

function createBoard() {
  for (let i = 0; i < BOARD_SIZE; i++) {
    let row = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      row.push({
        type: getRandomCandyType(),
        row: i,
        col: j,
      });
    }
    candies.push(row);
  }
}

function getRandomCandyType() {
  return CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)];
}

function renderBoard() {
  gameBoard.innerHTML = "";
  candies.forEach((row) => {
    let rowElement = document.createElement("div");
    rowElement.className = "row";
    row.forEach((candy) => {
      let candyElement = document.createElement("div");
      candyElement.className = "
