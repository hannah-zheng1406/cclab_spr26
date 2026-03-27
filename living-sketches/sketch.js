let scanned = [];
let snoopy;
let currentFrame = 0

function preload() {
  for (let i = 1; i <= 6; i++) {
    scanned.push(loadImage("snoopy_" + i + ".png"));
  }
}

function setup() {
  createCanvas(400, 400);
  snoopy = crop(scanned, 600, 400, 1200, 1200); // crop scanned file
}

function draw() {
  background(255);

  if (mouseX<400 && mouseX>0 && mouseY>0 && mouseY<400) {
     image(
    snoopy[currentFrame],0,0,400,400
  );

  currentFrame = floor(frameCount / 20 % 6) 
  } else {

  image(
    snoopy[currentFrame],0,0,400,400
  );
    currentFrame = floor(frameCount / 20 % 1)
  }
}

// You shouldn't need to modify these helper functions:

function crop(imgs, x, y, w, h) {
  let cropped = [];
  for (let i = 0; i < imgs.length; i++) {
    cropped.push(imgs[i].get(x, y, w, h));
  }
  return cropped;
}

function eraseBg(imgs, threshold = 10) {
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.loadPixels();
    for (let j = 0; j < img.pixels.length; j += 4) {
      let d = 255 - img.pixels[j];
      d += 255 - img.pixels[j + 1];
      d += 255 - img.pixels[j + 2];
      if (d < threshold) {
        img.pixels[j + 3] = 0;
      }
    }
    img.updatePixels();
  }
  // this function uses the pixels array
  // we will cover this later in the semester - stay tuned
}
