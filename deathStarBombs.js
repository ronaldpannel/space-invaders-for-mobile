const deathStarBombImg = new Image();
deathStarBombImg.src = "deathStarBomb.png";

class DeathStarBomb {
  constructor() {
    this.x = deathStar.x;
    this.y = deathStar.y;
    this.r = 15;
    this.size = 35;
    this.color = "white";
    this.vel = 2;
    this.acc = 0;
  }
  show() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    //ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.drawImage(
      deathStarBombImg,
      this.x - 25,
      this.y - 20,
      this.size,
      this.size
    );
    ctx.stroke();
  }
  update() {
    this.vel = this.vel += this.acc;
    this.y += this.vel;
  }
}
function initDeathStarBombs() {
  if (frame % 40 == 0) {
    deathStarBombs.push(new DeathStarBomb());
  }
}

function handleDeathStarBombs() {
  for (let i = 0; i < deathStarBombs.length; i++) {
    deathStarBombs[i].show();
    deathStarBombs[i].update();

    if (deathStarBombs[i].y > canvas.height + 20) {
      deathStarBombs.splice(i, 1);
    }
  }
}
function BombRockCollision() {
  for (let i = 0; i < spaceRocks.length; i++) {
    for (let j = 0; j < deathStarBombs.length; j++) {
      let dx = deathStarBombs[j].x - spaceRocks[i].x;
      let dy = deathStarBombs[j].y - spaceRocks[i].y;
      distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < deathStarBombs[j].r + spaceRocks[i].r) {
        deathStarBombs.splice(j, 1);
      }
    }
  }
}
function laserSpaceBombCollision() {
  for (let i = 0; i < deathStarBombs.length; i++) {
    for (let j = 0; j < lasers.length; j++) {
      let dx = lasers[j].x - deathStarBombs[i].x;
      let dy = lasers[j].y - deathStarBombs[i].y;
      distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < lasers[j].r + deathStarBombs[i].r) {
        for (let i = 0; i < 10; i++) {
          exParticles.push(new ExParticle(lasers[j].x, lasers[j].y));
        }
        score += 100;
        deathStarBombs.splice(i, 1);
        lasers.splice(j, 1);
      }
    }
  }
}
function ShipSpaceBombCollision() {
  for (let i = 0; i < deathStarBombs.length; i++) {
    let dx = ship.x - deathStarBombs[i].x;
    let dy = ship.y - deathStarBombs[i].y;
    distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < ship.r + deathStarBombs[i].r) {
      explosionSound.play();
      deathStarBombs.splice(i, 1);
      ctx.font = "25px Aerial";
      ctx.fillStyle = "white";
      ctx.fillText(
        "You have been destroyed, Earth has been invaded",
        50,
        canvas.height / 2
      );
      ctx.fillText("Your Score was : " + score, 200, canvas.height / 2 + 50);
      restartBtn.classList.add("btnActive");
      hsResetBtn.classList.add("btnActive");
      animate = false;
    }
  }
}
