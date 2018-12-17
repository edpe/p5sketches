var carrier;
var modulator;

function setup() {
  createCanvas(800, 400);
  noFill();
  background(30); // alpha

  carrier = new p5.Oscillator();
  carrier.freq(200);
  carrier.amp(0);

  carrier.start();

  modulator = new p5.Oscillator();

  modulator.disconnect();
  modulator.freq(0.125);
  modulator.amp(0.01);
  modulator.start();

  carrier.amp(modulator);

  fft = new p5.FFT();
  fft.setInput(carrier);
}

function draw() {
  background(30, 30, 30, 100);
  fft.analyze();
  waveformEnergy = fft.getEnergy(200);
  rect(100, waveformEnergy, 100, 20);
}
