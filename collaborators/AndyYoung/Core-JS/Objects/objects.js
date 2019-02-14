// // let empty = {};   // An object with no properties.
// let point = {     // Two properties.
//     x: 0,
//     y: 0
// };

// let point2 = {    // Another object literal with complex properties.
//     x: point.x,
//     y: point.y + 1
// };

// let shape = { // Non-identifier property names are quoted
//     "main shape": "round",  // space in property name
//     'sub-dimensions': 'multiple to infinite',    // punctuation in name
//     "void": "the key to this value is a reserved word"  // reserved word name
// };

// console.log(shape);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

var Ball = function() {
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

setInterval(function() {
  ctx.clearRect(0, 0, 500, 500);

  ball.draw();
  ball.move();
  ball.checkCollision();

  ctx.strokeRect(0, 0, 500, 500);
}, 30);
