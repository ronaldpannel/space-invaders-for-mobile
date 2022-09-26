const invaderImg = new Image();
invaderImg.src = "invader.png";
let invaders = [];
class Invader {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.size = 40;
    this.color = "white";
    this.dirX = 1;
  }
  show() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    //ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.drawImage(invaderImg, this.x - 23, this.y - 20, this.size, this.size);
  }
  shiftDown() {
    this.dirX *= -1;
    this.y += this.r * 0.4;
  }
  move() {
    this.x = this.x += this.dirX * 1.5;
  }
}

function initInvader() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      let x = 50;
      let y = 50;
      let offS = 60;
      invaders.push(new Invader(x + offS * i, y + j * offS));
    }
  }
}
initInvader();

function handleInvader() {
  for (let i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();

    let edge = false;

    if (
      invaders[i].x + invaders[i].r > canvas.width ||
      invaders[i].x - invaders[i].r < 0
    ) {
      edge = true;
    }
    if (edge) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i].shiftDown();
      }
    }
  }
}
function gameOver() {
  if (invaders.length == 0) {
    ctx.font = "25px Aerial";
    ctx.fillStyle = "white";
    ctx.fillText(
      "You Win. the earth is saved Your Score is  " + score,
      100,
      canvas.height / 2
    );

    highestScores();
    restartBtn.classList.add("btnActive");
    hsResetBtn.classList.add("btnActive");
    animate = false;
  }
  for (let i = 0; i < invaders.length; i++) {
    if (invaders[i].y >= canvas.height || invaders[i].y >= ship.y) {
      ctx.font = "25px Aerial";
      ctx.fillStyle = "white";
      ctx.fillText(
        "You have been destroyed, Earth has been invaded",
        50,
        canvas.height / 2 - 100
      );
      ctx.fillText("Your Score was : " + score, 200, canvas.height / 2 - 150);
      restartBtn.classList.add("btnActive");
      hsResetBtn.classList.add("btnActive");
      animate = false;
    }
  }
}
