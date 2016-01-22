function preload(){
  sound = loadSound('../assets/like_what.mp3');
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
  var ampLevelHeight = map(ampLevel, 0, 1, 50, 100)
  var ampLevelRotate = map(ampLevel, 0, .4, 0, 900)
  var ampLevelScale = map(ampLevel, 0, .7, 800, 600)
  var ampLevelColor1 = map(ampLevel, 0, .4, 0, 255)
  var ampLevelColor2 = map(ampLevel, 0, .4, 0, 100)
  var ampLevelColor3 = map(ampLevel, 0, .4, 255, 0)
  var ampLevelStroke = map(ampLevel, .05, .4, 3, .085)
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
    var ampLevelStroke = map(ampLevel, 0, .05, 6, 3);
  }

  background(0);

  translate((.5 * width), (.5 * height));

  // rotate(ampLevelRotate, ampLevelRotate)

  var spectrum = fft.analyze();
  stroke(ampLevelRed, ampLevelGreen, 0);
  strokeWeight(ampLevelStroke);
  // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // noStroke();

  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, ampLevelWidth, (width * .5), 0);
    var h = -height + map(spectrum[i], 0, ampLevelScale, height, 0);

                                   // ^ changes scope closer or farther away by decraseing value(default 250)
    rotate(.1, .1)
    rect(0, ampLevelHeight, width / spectrum.length, -h)
  }


  // translate((.3 * width), 0);
  //
  // var spectrum2 = fft.analyze();
  // stroke(ampLevelRed, ampLevelGreen, 0);
  // strokeWeight(ampLevelStroke);
  // // fill(ampLevelRed , ampLevelGreen, 0); //rgb
  // // noStroke();
  //
  // for (var i = 0; i< spectrum2.length; i++){
  //   var x = map(i, 0, ampLevelWidth, (width * .5), 0);
  //   var h = -height + map(spectrum[i], 0, ampLevelScale, height, 0);
  //
  //                                  // ^ changes scope closer or farther away by decraseing value(default 250)
  //   rotate(.1, .1)
  //   rect(0, ampLevelHeight, width / spectrum2.length, -h)
  // }


  }

  function mousePressed() {
   if ( song.isPlaying() ) {
     song.pause();
   } else {
     song.play();
   }
  }
