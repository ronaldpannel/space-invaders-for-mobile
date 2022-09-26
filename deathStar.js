const deathStarImg = new Image();
deathStarImg.src = "deathStar.png";

class DeathStar {
  constructor() {
    this.x = canvas.width * 0.5;
    this.y = 59;
    this.r = 30;
    this.dirX = 2;
    this.color = "white";
    this.size = 65
  }
  show() {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.drawImage(deathStarImg, this.x - 30, this.y - 30, this.size, this.size);
    //ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  }
  update() {
    this.x += this.dirX;
  }
  edges() {
    if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
      this.dirX = this.dirX * -1;
    }
  }
}
function handleDeathStar() {
  deathStar.show();
  deathStar.update();
  deathStar.edges();
}
