// Variables globales
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const enemies = [];
const towers = [];

let score = 0;
let health = 100;

// Clases
class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speed = 1;
    this.health = 100;
  }
  
  update() {
    this.x += this.speed;
  }
  
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Tower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.range = 100;
    this.fireRate = 30;
    this.damage = 10;
    this.counter = 0;
  }
  
  update() {
    if (this.counter === this.fireRate) {
      this.fire();
      this.counter = 0;
    }
    this.counter++;
  }
  
  fire() {
    for (let i = 0; i < enemies.length; i++) {
      const distance = Math.sqrt((enemies[i].x - this.x) ** 2 + (enemies[i].y - this.y) ** 2);
      if (distance < this.range) {
        enemies[i].health -= this.damage;
        if (enemies[i].health <= 0) {
          score += 10;
          enemies.splice(i, 1);
        }
        break;
      }
    }
  }
  
  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Funciones
function spawnEnemy() {
  const y = Math.floor(Math.random() * canvas.height);
  const enemy = new Enemy(0, y);
  enemies.push(enemy);
}

function spawnTower(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const tower = new Tower(x, y);
  towers.push(tower);
}

function update() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    if (enemies[i].x > canvas.width) {
      health -= 10;
      enemies.splice(i, 1);
    }
  }
  for (let i = 0; i < towers.length; i++) {
    towers[i].update();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
  }
  for (let i = 0; i < towers.length; i++) {
    towers[i].draw();
  }
  ctx.fillStyle = 'black';
  ctx.font = '24px Arial';
  ctx.fillText(`Score: ${score} Health: ${health}`, 10, 30);
}

function gameLoop() {
  update();
  draw();
  if (health <= 0) {
    clearInterval(intervalId);
    alert('Game Over!');
  }
}

// Eventos
canvas.addEventListener('click', spawnTower);

// Loop principal
const intervalId = setInterval(() => {
  spawnEnemy();
  gameLoop();
}, 

