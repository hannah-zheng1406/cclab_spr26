let search, login, inputName, inputDate;
let redirect1 = false; // redirect from verification to searchbar
let invalid = false;
let letters = [
  "",
  "l",
  "le",
  "lea",
  "leav",
  "leave",
  "leave ",
  "leave t",
  "leave th",
  "leave thi",
  "leave thin ",
  "leave thing",
  "leave things",
  "leave things ",
  "leave things u",
  "leave things un",
  "leave things uns",
  "leave things unsa",
  "leave things unsai",
  "leave things unsaid",
  "leave things unsaid?",
];

function preload() {
  img = loadImage("searchbar.png");
}

function setup() {
  createCanvas(800, 500);
  myCursor = new Cursor();
  myText = new Text();

  search = createButton("Search");
  search.mousePressed(checkSearch);

  login = createButton("Log In");
  login.position(375, 340);
  login.mousePressed(checkLogin);

  inputName = createInput();
  inputName.position(width / 2 - 75, height / 2 - 50);

  inputDate = createInput();
  inputDate.position(width / 2 - 75, height / 2 + 10);
}

function draw() {
  console.log(mouseX, mouseY);
  background(255);

  if (redirect1) {
    searchbar();
  } else {
    verification();
  }
}

class Cursor {
  constructor() {
    this.i = "|";
    this.x = 325;
    this.opacity = 0;
  }

  update() {
    this.opacity = map(sin(frameCount * 0.1), -1, 1, 0, 255); // make cursor blink
  }
  display() {
    let currentText = "Do you still " + letters[myText.type];
    this.x = 245 + textWidth(currentText); // cursor follow text
    fill(0, this.opacity);
    textSize(18);
    text(this.i, this.x, 246);
  }
}

class Text {
  constructor() {
    this.doyoustill = "Do you still";
    this.type = 0;
    this.x = 245;
    this.y = 245;
  }

  update() {
    this.type++;
    if (this.type >= letters.length) {
      this.type = 20;
    }
  }

  display() {
    fill(0);
    textSize(15);
    textAlign(LEFT);
    text(this.doyoustill, this.x, this.y);
    text(letters[this.type], this.x + 78, this.y);
  }
}

function verification() {
  background(250);
  search.position(-1000, -100); // hide search bar

  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 300, 350);

  fill(0);
  textAlign(CENTER);
  textSize(25);
  text("Welcome Back!", width / 2, height / 4 + 20);

  textAlign(LEFT);
  textSize(10);
  text("Username", 325, 190);
  text("Date (MM/DD/YYYY)", 325, 250);

  fill(10, 43, 125);
  textSize(8);
  textAlign(RIGHT);
  text("Forgot username?", 473, 300);

  if (mouseX >= 410 && mouseX <= 475 && mouseY >= 292 && mouseY <= 300) {
    if (mouseIsPressed) {
      fill(200);
      textAlign(LEFT);
      textSize(10);
      text("iforgor", 380, 190);
    }
  }

  if (invalid) {
    fill(255, 0, 0);
    textSize(10);
    textAlign(CENTER);
    text("Invalid username or date", width / 2, 320);
  }
}

function searchbar() {
  search.position(370, 270);

  inputName.position(-1000, -100);
  inputDate.position(-1000, 100);
  login.position(-1000, 100);

  image(img, 0, 0, 800, 500);

  noStroke();
  fill(255);
  rectMode(CORNER);
  rect(360, 267, 80, 50);

  myCursor.update();
  myCursor.display();

  myText.display();
}

function diary() {
  background(255);
  search.position(-1000, -100);
  inputName.position(-1000, -100);
  inputDate.position(-1000, 100);
  login.position(-1000, 100);
}

function keyPressed() {
  if (redirect1) {
    myText.update();
  }
}

function checkLogin() {
  if (inputName.value() == "iforgor" && inputDate.value() == "04/28/2026") {
    redirect1 = true;
  } else {
    invalid = true;
  }
}

function checkSearch() {
  if (myText.type == 20) {
    website();
  }
}

function website() {
  window.open("https://theunsentproject.com/?q=stranger", "_blank");
}
