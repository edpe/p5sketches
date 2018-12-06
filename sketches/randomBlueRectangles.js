function drawRectangle(x, y, width, height) {
  var rg = 100 + random(90);
  var rr = 150 + random(90);
  var rb = 200 + random(55);
  fill(rg, rr, rb);
  rect(x, y, width, height);
}

function makeRectangles(maxRect) {
  var rx = random(1000);
  var ry = random(1000);
  var rh = random(600);
  var rw = random(1000);
	let i;
  for (i = 0; i < maxRect; i++) {
    drawRectangle(rx, ry, rw, rh);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 20, 20);
  makeRectangles(50);
}
