class Asteroid {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.velX = -3;
    this.velY = 3;
    this.color = "rgba(255, 255, 255, 1)";
    this.history = [];
  }
  update() {
    this.x += this.velX;
    this.y += this.velY;
    // let v = createVector(this.x, this.y);
    let v = { x: this.x, y: this.y };
    this.history.push(v);
  }
  show() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < this.history.length; i++) {
      if (this.history[i].x < 200 || this.history[i].y > 320) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 149, 0, .8)";
        ctx.arc(
          this.history[i].x,
          this.history[i].y,
          this.r * 0.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
        if (this.history.length > 100){ 
          this.history.splice(i, 1);
        }
      }
    }
  }
}

function initAsteroid() {
  if (frame % 50 == 0) {
    asteroids.push(
      new Asteroid(
        650,
        Math.random() * (50 - -100) + 50,
        Math.random() * (6 - 3) + 3
      )
    );
  }
}

function handleAsteroids() {
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].show();
    asteroids[i].update();
    // asteroids[i].edges();
  }
}
