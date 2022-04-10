function setup() {
  createCanvas(window.innerHeight, window.innerWidth);
  fill(0, 102);
  strokeWeight(4);
  stroke(0, 102);
}

function draw() {
  // ellipse(mouseX, mouseY, 4, 4);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
