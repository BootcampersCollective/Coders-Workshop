const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// let position = 0; // swap w/ 'size' to
// let size = 0;     // grow sprite to fill canvas

// setInterval(function() {
//   ctx./*put 'context' here*/clearRect(0, 0, 500, 500);
//   ctx.fillRect(0, 0, size, size); // swap size for sprite dimensions

//   size++;
//   if (size > 500) {
//     size = 0;
//   }
// }, 30);

const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  fillCircle ? ctx.fill() : ctx.stroke();
};

// circle(250, 250, 50, true);

const drawBee = function(x, y) {
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

const update = function (coordinate) {
  let offset = Math.random() * 4 - 2;
  coordinate += offset;

  if (coordinate > 200) coordinate = 200;
  if (coordinate < 0) coordinate = 0;

  return coordinate;
};

let x = 250;
let y = 250;

setInterval(function () {
  ctx.clearRect(0, 0, 500, 500);

  drawBee(x, y);
  x = update(x);
  y = update(y);

  ctx.strokeRect(0, 0, 500, 500);

}, 30);