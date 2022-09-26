

class ExParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = Math.random() * 1 + -0.5;
    this.velY = Math.random() * 1 + -0.5;
    this.r = Math.random() * (10 - 5) + 5;
    this.opacity = 1
    this.hue = Math.random() * 359 + 1
  }
  show() {
    ctx.fillStyle = "hsla(" + this.hue + ", 50%, 50%, "+this.opacity+")";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += this.velX * 3;
    this.y += this.velY * 3;
    this.opacity -= 0.03
    // this.hue +- 10


    if (this.opacity <= 0) {
      exParticles.splice(0, 1);
    }
  }
}

function handleExParticles() {
  for (let i = 0; i < exParticles.length; i++) {
    exParticles[i].show();
    exParticles[i].update();
  }
  console.log(exParticles.length);
}
