function preload(){
  sound = loadSound('assets/fault_line.mp3');
}

function setup(){
  cnv = createCanvas(100 , 100);
  sound.amp(.6);
  sound.loop();
  fft = new p5.FFT();
  amp = new p5.Amplitude();
}



​
function preload(){
  sound = loadSound('assets/GetLucky.mp3');
}
function setup() {
  cnv = createCanvas(100,100);
  sound.amp(.6);
  amp = new p5.Amplitude();

}
function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}

function mousePressed() {
 if ( song.isPlaying() ) {
   song.pause();
 } else {
   song.play();
 }
}
