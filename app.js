const GAMEBOARD_WIDTH = 400;
const GAMEBOARD_HEIGHT = 400;
const NUM_TILE_TYPES = 5;

let score = 0;
let selectedTile = null;
let tiles = [];

const gameboardEl = document.getElementById('gameboard');
const scoreValueEl = document.getElementById('score-value');
const startButton = document.getElementById('start-button');

// Create a new tile and add it to the gameboard
function createTile(x, y) {
    const tileEl = document.createElement('div');
    tileEl.classList.add('tile');
    tileEl.style.left = x + 'px';
    tileEl.style.top = y + 'px';

    // Assign a random tile type to the new tile
    const tileType = Math.floor(Math.random() * NUM_TILE_TYPES);
    tileEl.dataset.tileType = tileType;

    // Add a click event listener to the tile
    tileEl.addEventListener('click', function() {
        if (!selectedTile) {
            // If no tile is currently selected, select the clicked tile
            selectedTile = this;
            selectedTile.style.border = '5px solid #000';
        } else if (selectedTile === this) {
            // If the clicked tile is the selected tile, deselect it
            selectedTile.style.border = '5px solid #fff';
            selectedTile = null;
        } else {
            // If a different tile is currently selected, swap the tiles
            swapTiles(selectedTile, this);
        }
    });

    gameboardEl.appendChild(tileEl);
    tiles.push(tileEl);
}

// Swap the positions and tile types of two tiles
function swapTiles(tile1, tile2) {
    const tile1X = parseInt(tile1.style.left);
    const tile1Y = parseInt(tile1.style.top);
    const tile2X = parseInt(tile2.style.left);
    const tile2Y = parseInt(tile
