var osc;
var fft;

function lfo() {
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(400);
  osc.amp(1.);
  osc.start();
  fft = new p5.FFT();
  amplitude = fft.analyze()
  console.log(amplitude)
}

function drawRectangle(x, y, width, height) {

  fill(rg, rr, rb);
  rect(x, y, width, height);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  lfo()


}

function draw() {
  background(20, 20, 20);

}
