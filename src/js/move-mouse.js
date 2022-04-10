function setup() {
  createCanvas(window.innerHeight, window.innerWidth);
  fill(0, 102);
  noStroke();
}

function draw() {
  ellipse(mouseX, mouseY, 9, 9);
}
