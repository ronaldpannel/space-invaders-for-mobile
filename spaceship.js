const spaceShip = new Image();
spaceShip.src = "rocket.png";
class Ship {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height - 50;
    this.r = 20;
    this.size = 50;
    this.dirX = 0;
    this.color = "white";
    this.vel = 10;
  }
  setDir(dir) {
    this.dirX = dir;
  }
  move() {
    this.x += this.dirX;
  }
  show() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    // ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.drawImage(spaceShip, this.x - 25, this.y - 28, this.size, this.size);
  }
  edges() {
    if(this.x > canvas.width){
        this.x = canvas.width
    }
    if(this.x < 0){
        this.x = 0
    }
  }
}
function shitInvaderCollision(){
  
}

function handleShip() {
  ship.show();
  ship.move();
  ship.edges()
}
