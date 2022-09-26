const spaceRockImg = new Image();
spaceRockImg.src = "rock.png";

let spaceRocks = [];
class SpaceRock {
  constructor(x, y, offS) {
    this.x = x;
    this.y = y;
    this.offS = offS;
    this.r = 23;
    this.color = "white";
  }
  show() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    //tx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.drawImage(spaceRockImg, this.x - 25, this.y - 23, this.r * 2.2, this.r *2.2);
    ctx.stroke();
  }
}

function initSpaceRocks() {
  for (let i = 0; i < 5; i++) {
    let x = 30;
    let y = 475;
    let offS = 135;
    spaceRocks.push(new SpaceRock(x + (offS  * i), y));
  }
}
initSpaceRocks();

function handleSpaceRocks() {
  for (let i = 0; i < spaceRocks.length; i++) {
    spaceRocks[i].show();
  }
}
