let beat;
let song;
let mic;

function preload() {
  beat = loadSound("assets/beat.mp3")
  song = loadSound ("assets/song.mp3")
}

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn ();
  mic.start ();
}

function draw() {
  background(220);
  let level = mic.getLevel ();
}

function mousePressed () {
    song.loop(); 
    console.log("song")
  }

