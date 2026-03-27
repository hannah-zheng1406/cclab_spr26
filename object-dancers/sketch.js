/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Cat (width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.display();
}

class Cat {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  
  }
  update() {
  }

  display() {
  
    push();
    translate(this.x, this.y);

    
    push ()
    scale (1.4)
    this.drawTail();

    //body
    noStroke();
    fill(255);
    triangle(0, -15, -20, 60, 20, 60);

    this.drawHead();
    this.drawPaws();

    pop()

    this.drawReferenceShapes()
    pop ()
  }


  drawHead() {
    let sinVal = sin(frameCount * 0.05);
    let headRot = map(sinVal, -1, 1, -0.5, 0.5);

    push();
    rotate(headRot);

    // ears
    fill(255);
    noStroke();
    triangle(-20, -60, -25, -10, 0, -15);
    triangle(20, -60, 25, -10, 0, -15);
    fill(235, 172, 169);
    triangle(-18, -50, -20, -10, -5, -15);
    triangle(18, -50, 20, -10, 5, -15);

    // headphone connection
    stroke(165, 210, 232);
    strokeWeight(4);
    noFill();
    ellipse(0, -15, 50, 35);

    //head
    noStroke();
    fill(255);
    ellipse(0, -8, 45, 35);
    
    // nose
    stroke(235, 172, 169)
    strokeWeight(1)
    line(-1,1,1,1)

    // eyes
    push();
    translate(0, 2.5);
    stroke(0);
    strokeWeight(0.3);
    circle(-10, -10, 16);
    circle(10, -10, 16);
    fill(0);
    circle(10, -10, 12);
    circle(-10, -10, 12);
    fill(255);
    circle(-11, -12, 2);
    circle(9, -12, 2);
    pop();

    // headphone (ear muffs)
    noStroke();
    fill(165, 210, 232);
    ellipse(-25, -10, 13, 22);
    ellipse(25, -10, 13, 22);

    pop();
  }

  drawTail() {
    let cosVal = cos(frameCount * 0.05);
    let tailRot = map(cosVal, -1, 1, -0.5, 0.6);

    push();
    translate(0, 52);
    rotate(3);
    rotate(tailRot);
    stroke(255);
    noFill();
    strokeWeight(7);
    beginShape();
    for (let i = 0; i < 40; i++) {
      let offset = sin(frameCount * 0.01 + i * 0.5) ;
      vertex(offset, 10 + i);
    }
    endShape();
    pop();
  }

  drawPaws() {
    let sinVal = sin(frameCount * 0.2);
    let paw1 = map(sinVal, 0, 1, 58, 60);
    let paw2 = map(sinVal, 0, 1, 60, 58);

    push();
    stroke(235, 172, 169);
    strokeWeight(0.8);
    fill(255);
    //left paw
    ellipse(-10, paw1, 15, 10);
    line(-12, paw1, -12, paw1+5)
    line (-9, paw1, -8, paw1+5)

    //rightpaw
    ellipse(10, paw2, 15, 10);
    line(12, paw2, 12, paw2+5)
    line (9, paw2, 8, paw2+5)
    pop();
  }
  
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/