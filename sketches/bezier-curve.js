function preload(){
  sound = loadSound('../assets/fault_line.mp3');
}

function setup(){
  cnv = createCanvas(1450 , 850);
  sound.amp(.6);
  sound.loop();
  fft = new p5.FFT();
  amp = new p5.Amplitude();
}

function draw(){

  var ampLevel = amp.getLevel();
  var ampLevelWidth = map(ampLevel, .4, 1, 80, 1000)
  var ampLevelHeight = map(ampLevel, 0, .6, 0, 300)
  var ampLevelHeight2 = map(ampLevel, 0, 1, 50, 100)
  var ampLevelRotate = map(ampLevel, 0, .4, 0, 900)
  var ampLevelScale = map(ampLevel, 0, .7, 800, 600)
  var ampLevelColor1 = map(ampLevel, 0, .4, 0, 255)
  var ampLevelColor2 = map(ampLevel, 0, .4, 0, 100)
  var ampLevelColor3 = map(ampLevel, 0, .4, 255, 0)
  var ampLevelStroke = map(ampLevel, .05, .4, 2, .085)
  var ampLevelStroke2 = map(ampLevel, .05, .4, .08, 20)
  var ampLevelRed = map(ampLevel, .40, .6, 230, 255);
  var ampLevelGreen = map(ampLevel, 0, .47, 255, 0);
  var ampLevelBlue = 0;

  if (ampLevel < .05) {
    var ampLevelRed = map(ampLevel, 0, .05, 0, 150);
  } else if (.05 < ampLevel < .4) {
    var ampLevelRed = map(ampLevel, .05, .4, 150, 255);
  }

  if (ampLevel > .42) {
    var ampLevelGreen = 0;
  } else if ( 0 < ampLevel < .03) {
    var ampLevelGreen = map(ampLevel, 0, .03, 60, 255);
  }

  if (ampLevel < .03) {
    var ampLevelBlue = map(ampLevel, 0, .03, 255, 0);
  }

  if (ampLevel < .4) {
    var ampLevelWidth = map(ampLevel, 0, .3, 10, 80);
  }

  if (ampLevel < .020) {
    var ampLevelStroke = map(ampLevel, 0, .05, 3, 2);
  }

  background(0);

  translate((.5 * width), (.5 * height));

  // stroke(ampLevelGreen, ampLevelRed, 0);
  // strokeWeight(ampLevelStroke);
  // noFill();
  // bezier(0, 300, -150, ampLevelHeight, 10, ampLevelHeight, 0, 300);
  // bezier(0, 300, 0, ampLevelHeight, 160, ampLevelHeight, 0, 300);
  // bezier(0, 300, 140, ampLevelHeight, 300, ampLevelHeight, 0, 300);
  // bezier(0, 300, -290, ampLevelHeight, -130, ampLevelHeight, 0, 300);
  //
  // bezier(0, 320, -150, ampLevelHeight, 10, ampLevelHeight, 0, 320);
  // bezier(0, 320, 0, ampLevelHeight, 160, ampLevelHeight, 0, 320);
  // bezier(0, 320, 140, ampLevelHeight, 300, ampLevelHeight, 0, 320);
  // bezier(0, 320, -290, ampLevelHeight, -130, ampLevelHeight, 0, 320);
  //
  // bezier(0, 340, -150, ampLevelHeight, 10, ampLevelHeight, 0, 340);
  // bezier(0, 340, 0, ampLevelHeight, 160, ampLevelHeight, 0, 340);
  // bezier(0, 340, 140, ampLevelHeight, 300, ampLevelHeight, 0, 340);
  // bezier(0, 340, -290, ampLevelHeight, -130, ampLevelHeight, 0, 340);
  //
  // bezier(0, 360, -150, ampLevelHeight, 10, ampLevelHeight, 0, 360);
  // bezier(0, 360, 0, ampLevelHeight, 160, ampLevelHeight, 0, 360);
  // bezier(0, 360, 140, ampLevelHeight, 300, ampLevelHeight, 0, 360);
  // bezier(0, 360, -290, ampLevelHeight, -130, ampLevelHeight, 0, 360);


  // rotate(ampLevelRotate, ampLevelRotate)

  var spectrum = fft.analyze();
  stroke(ampLevelRed, ampLevelGreen, 0);
  strokeWeight(ampLevelStroke);
  // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // noStroke();

  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, ampLevelWidth, (width * .5), 0);
    var h = -height + map(spectrum[i], 0, 1000, height, 0);

                                   // ^ changes scope closer or farther away by decraseing value(default 250)
    rotate(.1, .1)
    rect(0, ampLevelHeight2, width / spectrum.length, -h)
  }

  }
