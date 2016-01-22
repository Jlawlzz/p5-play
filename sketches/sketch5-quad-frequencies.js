function preload(){
  sound = loadSound('assets/fault_line.mp3');
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
  var ampLevelWidth = map(ampLevel, .34, 2.0, 100, 1100)
  var ampLevelColor1 = map(ampLevel, 0, .4, 0, 255)
  var ampLevelColor2 = map(ampLevel, 0, .4, 0, 100)
  var ampLevelColor3 = map(ampLevel, 0, .4, 255, 0)
  var ampLevelStroke = map(ampLevel, .02, .3, 5, .085)
  var ampLevelRed = map(ampLevel, .40, .5, 230, 255);
  var ampLevelGreen = map(ampLevel, 0, .48, 255, 0);
  var ampLevelBlue = 0;

  if (ampLevel < .1) {
    var ampLevelRed = map(ampLevel, 0, .08, 0, 100);
  } else if (.1 < ampLevel < .42) {
    var ampLevelRed = map(ampLevel, .08, .40, 100, 230);
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
    var ampLevelWidth = map(ampLevel, 0, .34, 10, 100);
  }

  if (ampLevel < .020) {
    var ampLevelStroke = map(ampLevel, 0, .020, 16, 5);
  }

  background(0);

  var spectrum = fft.analyze();
  stroke(0, ampLevelGreen, ampLevelRed);
  strokeWeight(ampLevelStroke);
  // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // noStroke();
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, ampLevelWidth, (0.5 * width), width);
    var h = -height + map(spectrum[i], 0, 600, height, 0);
                                        // ^ changes scope closer or farther away by decraseing value(default 250)
    rect(x, height, width / spectrum.length, h )
  }
  //
  var spectrumTwo = fft.analyze();
  stroke(0, ampLevelGreen, ampLevelRed);
  strokeWeight(ampLevelStroke);
  // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // noStroke();
  for (var i = 0; i< spectrumTwo.length; i++){
    var x = map(-i, 0, ampLevelWidth, (0.5 * width), width);
    var h = -height + map(spectrumTwo[i], 0, 600, height, 0);
                                        // ^ changes scope closer or farther away by decraseing value(default 250)
    rect(x, height, width / spectrumTwo.length, h )
  }

  var spectrumThree = fft.analyze();
  stroke(0, ampLevelGreen, ampLevelRed);
  strokeWeight(ampLevelStroke);
  // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // noStroke();
  for (var i = 0; i< spectrumThree.length; i++){
    var x = map(-i, 0, ampLevelWidth, (0.5 * width), width);
    var h = -height + map(spectrumThree[i], 0, 600, height, 0);
                                        // ^ changes scope closer or farther away by decraseing value(default 250)
    rect(x, 0, width / spectrumThree.length, -h )
  }

  var spectrumThree = fft.analyze();
  stroke(0, ampLevelGreen, ampLevelRed);
  strokeWeight(ampLevelStroke);
  // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // noStroke();
  for (var i = 0; i< spectrumThree.length; i++){
    var x = map(i, 0, ampLevelWidth, (0.5 * width), width);
    var h = -height + map(spectrumThree[i], 0, 600, height, 0);
                                        // ^ changes scope closer or farther away by decraseing value(default 250)
    rect(x, 0, width / spectrumThree.length, -h )
  }

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(0, 0, ampLevelStroke);
  for (var i = 1; i< waveform.length; i++){
    var x = map(i, 0, ampLevel, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}

  function mousePressed() {
   if ( song.isPlaying() ) {
     song.pause();
   } else {
     song.play();
   }
  }
