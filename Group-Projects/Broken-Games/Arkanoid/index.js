const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);

  fillCircle ? ctx.fill() : ctx.stroke();
};

const Ball = function() {
  this.x = 100;
  this.y = 100;
  this.xSpeed = -2;
  this.ySpeed = 3;
};

Ball.prototype.draw = function() {
  circle(this.x, this.y, 3, true);
};

Ball.prototype.move = function() {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function() {
  if (this.x < 0 || this.x > 500) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > 500) {
    this.ySpeed = -this.ySpeed;
  }
};

let ball = new Ball();

setInterval(() => {
  ctx.clearRect(0, 0, 500, 500);
  ball.draw();
  ball.move();
  ball.checkCollision();
  ctx.strokeRect(0, 0, 500, 500);
}, 30);
