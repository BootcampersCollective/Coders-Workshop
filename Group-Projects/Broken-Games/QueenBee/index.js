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
circle(250, 250, 50, true);