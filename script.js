/**@type{HTMLCanvasElement} */
const restartBtn = document.getElementById("restartBtn");
const hsResetBtn = document.getElementById("hsResetBtn");
const rightMove = document.getElementById("rightBtn");
const leftMove = document.getElementById("leftBtn");
const fireBtn = document.getElementById("fireBtn");
let laserSound = document.getElementById("laserSound");
laserSound.preload = "auto";
let explosionSound = document.getElementById("explosionSound");
explosionSound.preload = "auto";
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let ship;
let laser;
let lasers = [];
let deathStarBombs = [];
let deathStarBomb;
let deathStar;
let asteroids = [];
let exParticles = [];
let score = 0;
let frame = 0;
let highScore;

ship = new Ship();
laser = new Laser();
deathStar = new DeathStar();

let distance;
highScore = localStorage.getItem("spaceHighScore") || 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleDeathStar();
  handleLaser();
  handleShip();
  handleInvader();
  handleSpaceRocks();
  laserRockCollision();
  initDeathStarBombs();
  handleDeathStarBombs();
  BombRockCollision();
  laserSpaceBombCollision();
  ShipSpaceBombCollision();
  initAsteroid();
  handleAsteroids();
  handleExParticles();
  gameOver();
  frame++;
  requestAnimationFrame(animate);
  ctx.font = "20px Aerial";
  ctx.fillStyle = "white";
  ctx.fillText("Highest Score: " + highScore, 400, 20);
  ctx.font = "20px Aerial";
  ctx.fillStyle = "white";
  ctx.fillText("Score:  " + score, 10, 20);
}
animate();
window.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    ship.setDir(5);
  } else if (e.code === "ArrowLeft") {
    ship.setDir(-5);
  }
});
window.addEventListener("keydown", function (e) {
  if (e.code === "KeyS") {
    lasers.unshift(new Laser());
    laserSound.play();
  }
});
window.addEventListener("keyup", function (e) {
  if (e.code === "ArrowRight") {
    ship.setDir(0);
  } else if (e.code === "ArrowLeft") {
    ship.setDir(0);
  }
});
//touch events
rightMove.addEventListener("touchstart", function (e) {
  e.preventDefault();
  ship.setDir(5);
});
leftMove.addEventListener("touchstart", function (e) {
  e.preventDefault();
  ship.setDir(-5);
});
rightMove.addEventListener("touchend", function (e) {
  e.preventDefault();
  ship.setDir(0);
});
fireBtn.addEventListener("touchend", function (e) {
  e.preventDefault();
  lasers.unshift(new Laser());
  laserSound.play();
});
leftMove.addEventListener("touchend", function (e) {
  e.preventDefault();
  ship.setDir(0);
});

restartBtn.addEventListener("click", resetGame);

function resetGame() {
  window.location.reload();
}
hsResetBtn.addEventListener("click", resetHighScore);

function resetHighScore() {
  localStorage.setItem("spaceHighScore", 0);
}
function highestScores() {
  if (score > localStorage.getItem("spaceHighScore")) {
    localStorage.setItem("spaceHighScore", score);
    let hsScore = localStorage.getItem("spaceHighScore");
    highestScore = hsScore;
  }
}
