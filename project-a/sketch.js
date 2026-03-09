let xShadow = 0;
let yShadow = 0;
let xCreature, yCreature, xStar, yStar;
let speedSnow = 1;
let xTree, yTree;
speedShadow = 2;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent ("p5-canvas-container")
}
function draw() {
  background(216, 224, 237);

  //follow mouse
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (mouseIsPressed) {
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

      sinVal = sin(frameCount * 0.04);
      yStar = map(sinVal, -1, 1, yShadow - 280, yShadow);
      yCreature = map(sinVal, -1, 1, yShadow - 200, yShadow + 100);
      let sizeShadow = map(sinVal, -1, 1, 0.75, 0.55);
      let sizeCreature = map(sinVal, -1, 1, 1, 0.6);
      let opacity = map(sinVal, -1, 0, 1000, 200);
      let glow = map(sinVal, -1, 1, 50, 0);

      drawShadow(xShadow, yShadow, 0.65);

      xShadow = lerp(xShadow, mouseX, 0.04);
      yShadow = lerp(yShadow, mouseY, 0.04);

      push();
      dLeap = dist(mouseX, mouseY, xShadow, yShadow);

      if (dLeap <= 20) {
        drawShadow(xShadow, yShadow, sizeShadow);
        drawStar(xShadow, yStar, glow);
        drawCreature(xShadow, yCreature, sizeCreature, opacity, glow);
        pop();
      }
    } else {
      let shadowNoise = noise(frameCount * 0.01);
      yNoise = map(shadowNoise, 0, 1, -2, 2);

      xShadow = xShadow + speedShadow;
      yShadow = yShadow + yNoise;

      drawShadow(xShadow, yShadow, 0.65);

      if (xShadow >= width - 100 || xShadow <= 100) {
        speedShadow = -speedShadow;
      }
      if (yShadow > height) {
        yShadow = height;
      }
      if (yShadow < 0) {
        yShadow = 0;
      }

      dEscape = dist(mouseX, mouseY, xShadow, yShadow);

      if (dEscape < 60) {
        if (xShadow < width / 2) xShadow = xShadow - 3 * speedShadow;
        if (xShadow >= width / 2) {
          xShadow = xShadow + 3 * speedShadow;
        }
        if (yShadow < height / 2) {
          yShadow = yShadow - 3 * speedShadow;
        }
        if (yShadow > height / 2) {
          yShadow = yShadow + 3 * speedShadow;
        }
      }
    }
  } else {
    cosVal = cos(frameCount * 0.007);
    sinVal = sin(frameCount * 0.01);
    ogX = map(cosVal, -1, 1, 100, 700);
    ogY = map(sinVal, -1, 1, 100, 400);

    xShadow = lerp(xShadow, ogX, 0.01);
    yShadow = lerp(yShadow, ogY, 0.01);

    drawShadow(xShadow, yShadow, 0.65);
  }

  drawShore();

  //bg trees
  drawTree(-10, 25, 0.5);
  drawTree(27, 15, 0.5);
  drawTree(60, 20, 0.5);
  drawTree(120, 30, 0.4);

  //close trees
  drawTree(40, 340);
  drawTree(80, 350);
  drawTree(160, 400);
  drawTree(550, 280, 1.3);
  drawTree(550, 250, 1.4);

  drawSnow();
}

function drawShadow(xShadow, yShadow, sizeShadow) {
  push();
  translate(xShadow, yShadow);
  scale(sizeShadow);

  stroke(255);
  strokeWeight(1);
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

function drawStar(xStar, yStar, glow) {
  //star
  push();
  translate(xStar, yStar);
  rotate(frameCount);
  noStroke();
  fill(255);
  triangle(0, -20, -18.3, 10, 18.3, 10);
  triangle(0, 20, -18.3, -10, 18.3, -10);

  fill(255, glow);
  triangle(0, -30, -28.3, 20, 23.3, 20);
  triangle(0, 30, -28.3, -20, 23.3, -20);
  pop();
}

function drawCreature(xCreature, yCreature, sizeCreature, opacity, glow) {
  noStroke();
  fill(48, 61, 82, opacity);

  cosVal = cos(frameCount * 0.05);

  cX1 = map(sinVal * 1.5, -1, 1, -2, 2);
  cX2 = map(cosVal * 1.5, -1, 1, -2, 2);

  //body & fins
  push();
  translate(xCreature, yCreature);

  scale(sizeCreature);

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
  stroke(255, opacity);
  noFill();
  ellipse(0, 0, 120, 30);
  ellipse(0, -60, 30, 5);
  ellipse(0, -15, 50, 10);
  ellipse(0, -30, 65, 10);

  //glow
  stroke(255, glow);
  strokeWeight(10);
  ellipse(0, 0, 120, 30);
  ellipse(0, -60, 30, 5);
  ellipse(0, -15, 50, 10);
  ellipse(0, -30, 65, 10);

  strokeWeight(1);

  //tail
  sinVal = sin(frameCount * 0.1);
  tailRot = map(sinVal, -1, 1, -1, 1);

  push();
  translate(5, 85);
  rotate(tailRot);
  fill(48, 61, 82, opacity);
  noStroke();
  triangle(0, 0, -10, 25, 10, 25);
  pop();
}

function drawSnow() {
  let dia = 4;
  let noiseVal = noise(frameCount);
  offset = map(noiseVal, 0, 1, -150, 150);

  fill(255);
  for (let xSnow = 0; xSnow <= width; xSnow = xSnow + 50) {
    for (let ySnow = 0; ySnow <= height; ySnow = ySnow + 60) {
      circle(xSnow + offset, ySnow + offset + speedSnow, dia);
    }
  }
}

function drawShore() {
  fill(255);
  triangle(0, 425, 0, 500, 230, 500);
  triangle(600, 500, 800, 500, 800, 460);
  beginShape();
  vertex(0, 20);
  vertex(0, 100);
  vertex(122, 82);
  vertex(88, 31);
  endShape(CLOSE);

  fill(188, 193, 196);
  beginShape();
  vertex(0, 84);
  vertex(117, 75);
  vertex(122, 82);
  vertex(0, 100);
  endShape(CLOSE);
}

function drawTree(xTree, yTree, sizeTree) {
  noStroke();

  //green
  push();
  scale(sizeTree);
  translate(xTree, yTree);
  fill(78, 87, 77);
  triangle(0, 0, -20, 40, 20, 40);
  triangle(0, 20, -25, 60, 25, 60);
  triangle(0, 40, -25, 80, 25, 80);

  //brown
  fill(77, 67, 57);
  rect(-5, 80, 10, 30);
  pop();
}