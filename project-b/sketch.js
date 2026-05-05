let search, search2, login, back, back2, inputName, inputDate;
let redirect1 = false; //  verification --> searchbar (question 1)
let redirect2 = false; // searchbar (question1) --> stickynote
let redirect3 = false; // stickynote --> searchbar (question 2)
let redirect4 = false; // searchbar (question2) --> dearme
let invalid = false;
let typingSound, clickingSound, writingSound, writingSound2;

let question1 = [
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

let question2 = [
  "",
  "l",
  "lo",
  "los",
  "lose",
  "lose ",
  "lose s",
  "lose sl",
  "lose sle",
  "lose slee",
  "lose sleep",
  "lose sleep ",
  "lose sleep o",
  "lose sleep ov",
  "lose sleep ove",
  "lose sleep over",
  "lose sleep over ",
  "lose sleep over e",
  "lose sleep over ec",
  "lose sleep over ech",
  "lose sleep over echo",
  "lose sleep over echoe",
  "lose sleep over echoes",
  "lose sleep over echoes ",
  "lose sleep over echoes o",
  "lose sleep over echoes of",
  "lose sleep over echoes of ",
  "lose sleep over echoes of m",
  "lose sleep over echoes of ma",
  "lose sleep over echoes of may",
  "lose sleep over echoes of mayb",
  "lose sleep over echoes of maybe",
  "lose sleep over echoes of maybe?",
];

let frame = [];
let frame2 = [];
let stickyNoteFrame = 0;
let dearMeFrame = 0;

function preload() {
  img = loadImage("searchbar.png");
  for (let i = 1; i <= 50; i++) {
    frame.push(loadImage("unsaid/unsaid-" + i + ".png"));
  }
  for (let i = 1; i <= 70; i++) {
    frame2.push(loadImage("echoes/echoes-" + i + ".png"));
  }

  typingSound = loadSound("sounds/typing.MP3")
  clickingSound = loadSound("sounds/clicking.mp3")
  writingSound = loadSound("sounds/writing.MP3")
  writingSound2 = loadSound("sounds/writing2.MP3")
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")

  myText = new Text(question1);
  myText2 = new Text(question2);

  myCursor = new Cursor(myText, question1);
  myCursor2 = new Cursor(myText2, question2);

  search = createButton("Search");
  search.mousePressed(checkSearch);

  search2 = createButton("Search");
  search2.mousePressed(checkSearch2);

  login = createButton("Log In");
  login.position(375, 340);
  login.mousePressed(checkLogin);

  back = createButton("Return");
  back.mousePressed(returnToSearch);

  back2 = createButton("Return");
  back2.mousePressed(returnToVerfication);

  inputName = createInput();
  inputName.position(width / 2 - 75, height / 2 - 50);

  inputDate = createInput();
  inputDate.position(width / 2 - 75, height / 2 + 10);
}

function draw() {
  background(255);

  if (redirect4) {
    dearMe();
  } else if (redirect3) {
    searchbar2();
  } else if (redirect2) {
    stickyNote();
  } else if (redirect1) {
    searchbar();
  } else {
    verification();
  }
}

class Cursor {
  constructor(textoop, question) {
    this.i = "|";
    this.x = 325;
    this.opacity = 0;
    this.textoop = textoop;
    this.question = question;
  }
  update() {
    this.opacity = map(sin(frameCount * 0.1), -1, 1, 0, 255);
  }
  display() {
    let currentText = "Do you still " + this.question[this.textoop.type];
    this.x = 245 + textWidth(currentText);
    fill(0, this.opacity);
    textSize(18);
    text(this.i, this.x, 246);
  }
}

class Text {
  constructor(question) {
    this.doyoustill = "Do you still";
    this.type = 0;
    this.x = 245;
    this.y = 245;
    this.question = question;
  }

  update() {
    this.type++;
    if (this.type >= this.question.length) {
      this.type = this.question.length - 1;
    }
  }

  display() {
    fill(0);
    textSize(15);
    textAlign(LEFT);
    text(this.doyoustill, this.x, this.y);
    text(this.question[this.type], this.x + 78, this.y);
  }
}

function verification() {
  background(250);
  search.position(-1000, -100);
  search2.position(-1000, -100);
  back.position(-1000, 1000);
  back2.position(-1000, 1000);

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
      text("fromthepast.404", 380, 190);
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
  search2.position(-1000, -100);
  inputName.position(-1000, -100);
  inputDate.position(-1000, 100);
  login.position(-1000, 100);
  back.position(-1000, 1000);
  back2.position(-1000, 1000);

  image(img, 0, 0, 800, 500);

  push();
  textSize(30);
  textAlign(CENTER);
  text("Dear Future,", width / 2, height / 3);
  pop();

  noStroke();
  fill(255);
  rectMode(CORNER);
  rect(360, 267, 80, 50);

  myCursor.update();
  myCursor.display();
  myText.display();
}

function stickyNote() {
  background(255);
  search.position(-1000, -100);
  search2.position(-1000, -100);
  inputName.position(-1000, -100);
  inputDate.position(-1000, 100);
  login.position(-1000, 100);
  back2.position(-1000, 1000);

  let currentFrame = floor(stickyNoteFrame / 10);
  image(frame[currentFrame], 0, 0, 800, 500);

  if (stickyNoteFrame < 49 * 10) {
    stickyNoteFrame++;
    back.position(-1000, 1000);
  } else {
    back.position(360, 460);
  }
}

function searchbar2() {
  search2.position(370, 270);
  search.position(-1000, -100);
  inputName.position(-1000, -100);
  inputDate.position(-1000, 100);
  login.position(-1000, 100);
  back.position(-1000, 1000);
  back2.position(-1000, 1000);

  image(img, 0, 0, 800, 500);

  push();
  textSize(30);
  textAlign(CENTER);
  text("Dear Future,", width / 2, height / 3);
  pop();

  noStroke();
  fill(255);
  rectMode(CORNER);
  rect(360, 267, 80, 50);

  myCursor2.update();
  myCursor2.display();
  myText2.display();
}

function dearMe() {
  background(255);
  search.position(-1000, -100);
  search2.position(-1000, -100);
  inputName.position(-1000, -100);
  inputDate.position(-1000, 100);
  login.position(-1000, 100);
  back.position(-1000, 1000);

  let currentFrame2 = floor(dearMeFrame / 10);
  image(frame2[currentFrame2], 0, 0, 800, 500);

  if (dearMeFrame < 69 * 10) {
    dearMeFrame++;
    back2.position(-1000, 1000);
  } else {
    back2.position(360, 460);
  }
}

function keyPressed() {
  if (redirect3) {
    myText2.update();
    typingSound.play()
  } else if (redirect1) {
    myText.update();
    typingSound.play()
  }
}

function checkLogin() {
  clickingSound.play()
  if (inputName.value() == "fromthepast.404" && inputDate.value() == "05/05/2026") {
    redirect1 = true;
  } else {
    invalid = true;
  }
}

function checkSearch() {
  clickingSound.play()
  if (myText.type == question1.length - 1) {
    redirect2 = true;
    stickyNoteFrame = 0;
    writingSound.play()
  }
}

function returnToSearch() {
  clickingSound.play()
  redirect2 = false;
  redirect3 = true;
  myText2.type = 0;
  myCursor2 = new Cursor(myText2, question2);
}

function checkSearch2() {
  clickingSound.play()
  if (myText2.type == question2.length - 1) {
    redirect4 = true;
    dearMeFrame = 0;
    writingSound2.play()
  }
}

function returnToVerfication() {
  clickingSound.play()
  redirect1 = false;
  redirect2 = false;
  redirect3 = false;
  redirect4 = false;

  putBack()
  reset()
}

//put the hidden buttons back to verification
function putBack() {
  inputName.position(width / 2 - 75, height / 2 - 50);
  inputDate.position(width / 2 - 75, height / 2 + 10);
  login.position(375, 340);
  inputName.value('');
  inputDate.value('');
  invalid = false;
}

// reset the already typed questions
function reset() {
  myText.type = 0;
  myText2.type = 0;
  myCursor = new Cursor(myText, question1);
  myCursor2 = new Cursor(myText2, question2);
}