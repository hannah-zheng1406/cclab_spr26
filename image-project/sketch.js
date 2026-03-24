let img;

function preload () {
  img = loadImage ("assets/images/asterisk.png")
}

function setup() {
  createCanvas (400,300);
}

function draw() {
  background(0);
  image(img,0,0,100,100);
}