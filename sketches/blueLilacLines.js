function drawRectangle(x, y, width, height) {
  var rg = 80 + random(40);
  var rr = 140 + random(40);
  var rb = 220 + random(40);
  noStroke();
  fill(rg, rr, rb);
  rect(x, y, width, height);
}

function makeRectangles(maxRect) {
  var rx = random(1500);
  var ry = random(1000);
  var rh = 1;
  var rw = random(300);
	let i;
  for (i = 0; i < maxRect; i++) {
    drawRectangle(rx, ry, rw, rh);i
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 20, 20);
}

function draw() {

  makeRectangles(50);
}
