/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/
let xShadow = 0;
let yShadow = 0;
let xCreature = 0;
let yCreature = 0;
let ySpeed =1
let xSnow, dia;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent ("p5-canvas-container")
}

function draw() {
  background(216, 224, 237);

  //star
  noStroke();
  fill(255);
  triangle(
    mouseX,
    mouseY - 20,
    mouseX - 18.3,
    mouseY + 10,
    mouseX + 18.3,
    mouseY + 10
  );
  triangle(
    mouseX,
    mouseY + 20,
    mouseX - 18.3,
    mouseY - 10,
    mouseX + 18.3,
    mouseY - 10
  );

  
    drawSnow()
  
  // general motion & follow the star
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    xShadow = lerp(xShadow, mouseX, 0.02);
    yShadow = lerp(yShadow, mouseY, 0.02);
  } else {
    cosVal = cos(frameCount * 0.007);
    sinVal = sin(frameCount * 0.01);
    xShadow = map(cosVal, -1, 1, 100, 700);
    yShadow = map(sinVal, -1, 1, 100, 400);
  }

  // leap & balance star if creature catches star
  sinVal = sin(frameCount * 0.05);
  let yCreature = map(sinVal, -1, 1, yShadow - 200, yShadow - 100);
  let size = map(sinVal, -1, 1, 0.65, 0.75);
  let d = dist(mouseX, mouseY, xShadow, yShadow);
  
    if (d<=40) {
    drawShadow(xShadow, yShadow, size);
    drawCreature(xShadow, yCreature);
  } else {
    drawShadow(xShadow, yShadow);
  }
  

  
   // water ripples
  if (mouseIsPressed) {
    for (let dia = 20; dia < 40; dia = dia + 8) {
      stroke(255);
      fill(200, 211, 227, 90);
      strokeWeight(1.5);
      ellipse(mouseX, mouseY, dia * 2.5, dia);
    }
  }

}

function drawShadow(xShadow, yShadow, size) {
  push();
  translate(xShadow, yShadow);
  scale(size);

  stroke(255);
  noFill();
  ellipse(0, 5, 260, 110);
  noStroke();
  fill(255, 25);
  ellipse(0, 5, 250, 100);
  fill(200, 211, 227, 90);
  ellipse(0, 0, 230, 100);
  fill(171, 183, 201, 60);
  ellipse(0, 0, 200, 90);
  fill(154, 165, 181, 60);
  ellipse(0, 0, 180, 70);
  stroke(255, 95);
  strokeWeight(1);
  ellipse(0, 0, 170, 50);
  fill(137, 148, 163, 70);
  ellipse(0, 0, 150, 50);
  fill(102, 113, 128, 80);
  ellipse(0, 0, 140, 40);
  ellipse(0, 0, 50, 10);
  ellipse(0, 0, 15, 4);
  pop();
}

function drawCreature(xCreature, yCreature) {
  noStroke();
  fill(48, 61, 82);

  cosVal = cos(frameCount * 0.05);

  let cX1 = map(sinVal, -1, 1, -3, 3);
  let cX2 = map(cosVal, -1, 1, -3, 3);

  //body & fins
  push();
  translate(xCreature, yCreature);
  circle(0, 0, 45);
  circle(0, -30, 20);
  circle(cX2, -50, 10);
  circle(cX1, 35, 30);
  circle(cX2, 55, 20);
  circle(cX1 - 5, 70, 15);
  circle(3, 80, 10);
  triangle(-20, -5, -40, 10, -20, 10); // fin1
  triangle(20, -5, 40, 10, 20, 10); // fin2

  //halos
  stroke(255);
  noFill();
  ellipse(0, 0, 120, 30);
  ellipse(0, -60, 30, 5);
  ellipse(0, -15, 50, 10);
  ellipse(0, -30, 65, 10);

  // balancing star
  push ()
  translate (0, -80)
  rotate (frameCount)
  noStroke();
  fill(255);
  triangle(0,-20,-18.3,10, 18.3,10)
  triangle(0,20,-18.3,-10,18.3,-10)
  pop()
  
  //tail
  sinVal = sin(frameCount * 0.1);
  let tailRot = map(sinVal, -1, 1, -0.5, 0.5);

  push();
  translate(5, 85);
  rotate(tailRot);
  fill(48, 61, 82);
  noStroke();
  triangle(0, 0, -10, 25, 10, 25);
  pop();
  
  // 
}

function drawSnow() {
  let p = 4;

  let noiseVal = noise(frameCount);
  offset = map(noiseVal, 0, 1, -150, 150);

  noStroke();
  fill(255);
  for (let xSnow = 0; xSnow <= width; xSnow = xSnow + 50) {
    for (let ySnow = 0; ySnow <= height; ySnow = ySnow + 60) {
      circle(xSnow + offset, ySnow + offset + ySpeed, p);
    }
  }
}