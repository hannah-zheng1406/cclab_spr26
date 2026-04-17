let letters = [
  " ",
  "o",
  "ov",
  "ove",
  "over",
  "overt",
  "overth",
  "overthi",
  "overthin",
  "overthink",
  "overthink ",
  "overthink y",
  "overthink yo",
  "overthink you",
  "overthink your",
  "overthink your",
  "overthink your p",
  "overthink your pr",
  "overthink your pro",
  "overthink your prob",
  "overthink your probl",
  "overthink your proble",
  "overthink your problem",
  "overthink your problems",
  "overthink your problems? ",
];

function preload() {
  img = loadImage("searchbar.png");
}

function setup() {
  createCanvas(800, 500);
  myCursor = new Cursor();
  myText = new Text();
}

function draw() {
  background(255);
  image(img, 0, 0, 800, 500);

  // console.log(mouseX, mouseY);

  myCursor.update();
  myCursor.display();

  myText.display();

}

class Cursor {
  constructor() {
    this.i = "|";
    this.x = 315
    this.y = 246
    this.opacity = 0;

  }

  update() {
    this.opacity = map(sin(frameCount * 0.1), -1, 1, 0, 255);
  }

  display() {
    fill(0, this.opacity);
    textSize(20);
    text(this.i, this.x, this.y);
  }
}

class Text {
  constructor() {
    this.doyoustill = "Do you still";
    this.type = 0;
    this.x = 240;
    this.y = 245;
  }

  update() {
    this.type++;
    if (this.type >= letters.length) {
      this.type = 24;
    }
    console.log(this.type);
  }

  display() {
    fill(0);
    textSize(15);
    text(this.doyoustill, this.x, this.y);
    text(letters[this.type], this.x + 78, this.y);
  }
}

function keyPressed() {
  myText.update();
}
