var rectPos;
var rectangleYPos = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
var rectangleXPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var rectangleSpeed = [1, 0.2, 3, 0.3, 0.5, 0.8, 2, 1.2, 1.5, 1.8];

function generateRectangles() {
  rectangleYPos.map(x => makeRectangle(x, Math.round(x / 0.1)));
}

function drawRectangle(x, y, width, height) {
  var rg = 100;
  var rr = 150;
  var rb = 200;
  fill(rg, rr, rb);
  noStroke();
  rect(x, y, width, height);
}

function makeRectangle(drawHeight, xIndex) {
  var rx = rectangleXPos[xIndex];
  var ry = windowHeight * drawHeight - 40;
  var rh = 40;
  var rw = 200;
  drawRectangle(rx, ry, rw, rh);
}

function moveRectangles() {
  for(var i = 0; i < rectangleXPos.length; i++) {
    rectangleXPos[i] = rectangleXPos[i] + 1;
  }
generateRectangles()

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 20, 20);
  moveRectangles();
}
