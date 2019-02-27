const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  fillCircle ? ctx.fill() : ctx.stroke();
};

const drawBee = (x, y) => {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "Black";
  ctx.fillStyle = "Gold";

  circle(x, y, 8, true);            // sprite body
  circle(x, y, 8, false);           // body border
  circle(x - 5, y - 11, 5, false);  // left wing
  circle(x + 5, y - 11, 5, false);  // right wing
  circle(x - 2, y - 1, 2, false);   // left eye
  circle(x + 2, y - 1, 2, false);   // right eye
};

// Outputs a proximate pixel location for drawBee to re-render
const update = (coordinate) => {
  let offset = Math.random() * 4 - 2;
  coordinate += offset;

  if (coordinate > 200) coordinate = 200;
  if (coordinate < 0) coordinate = 0;

  return coordinate;
};

let x = 250;  // Sprite's starting axis
let y = 250;

setInterval(() => {
  ctx.clearRect(0, 0, 500, 500);

  drawBee(x, y);
  x = update(x);
  y = update(y);

  ctx.strokeRect(0, 0, 500, 500);

}, 30);