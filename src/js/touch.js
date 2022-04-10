function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// On a touchscreen device, touch
// the canvas using one or more fingers
// at the same time
function draw() {
  clear();

  if (touches.length) {
    printPositions = () => {
      touches.forEach((t, i) => {
        text(`Touch ${t.id}: (${t.x}, ${t.y})`, 10, 50 + i * 15);
      });
    };
  } else {
    printPositions = () => {};
  }
  bgColor = 50 + ((255 - 50) / 5) * touches.length;
  background(bgColor);
  let display = touches.length + " touches";
  text(display, 5, 10);
  printPositions();

  touches.forEach((t) => {
    rect(t.x - 50, t.y - 50, 100, 100);
  });

  if (touches.length > 1) {
    for (let i = 0; i < touches.length - 1; i++) {
      let t1 = touches[i];
      let t2 = touches[i + 1];
      line(t1.x, t1.y, t2.x, t2.y);
    }
  }
  if (touches.length) {
    text(JSON.stringify(touches[0]), 5, 100);
  }
}
