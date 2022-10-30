
class Laser {
  constructor() {
    this.x = ship.x;
    this.y = ship.y;
    this.r = 5;
    this.color = "white";
    this.vel = 5;
    this.acc = 0.9;
  }
  show() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.vel = this.vel += this.acc;
    this.y -= this.vel;
  }
}
function handleLaser() {
  for (let i = 0; i < lasers.length; i++) {
    lasers[i].update();
    lasers[i].show();
    if (lasers[i].y < 0) {
      lasers.splice(i, 1);
    }
    laserInvaderCollision();
  }
}
function laserInvaderCollision(opacity) {
  console.log();
  for (let i = 0; i < invaders.length; i++) {
    for (let j = 0; j < lasers.length; j++) {
      let dx = lasers[j].x - invaders[i].x;
      let dy = lasers[j].y - invaders[i].y;
      distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < lasers[j].r + invaders[i].r) {
        for (let i = 0; i < 10; i++) {
          exParticles.push(
            new ExParticle(
              lasers[j].x,
              lasers[j].y
            )
          );
        }
        explosionSound.pause();
        explosionSound.currentTime = 0;
        explosionSound.play();
        score++;
        invaders.splice(i, 1);
        lasers.splice(j, 1);
      }
    }
  }
}
function laserRockCollision() {
  for (let i = 0; i < spaceRocks.length; i++) {
    for (let j = 0; j < lasers.length; j++) {
      let dx = lasers[j].x - spaceRocks[i].x;
      let dy = lasers[j].y - spaceRocks[i].y;
      distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < lasers[j].r + spaceRocks[i].r) {
        lasers.splice(j, 1);
      }
    }
  }
}
