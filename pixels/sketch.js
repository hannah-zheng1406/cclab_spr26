let img;
let s = 10;

function preload() {
  img = loadImage("matisse.png")
}

function setup() {
  createCanvas(800, 500);
  background(0)
}

function draw() {
  // background(0);
  // image(img, 0, 0)
  img.loadPixels();


  for (let i = 0; i < 100; i++) {

    let x = floor(random(0, width))
    let y = floor(random(0, height))

    let index = (x + y * img.width) * 4;
    let r = img.pixels[index]
    let g = img.pixels[index + 1]
    let b = img.pixels[index + 2]

    noStroke()
    fill(r, g, b)
    circle(x, y, s)
  }





  // for (let y = 0; y <= img.height; y += s) {
  //   for (let x = 0; x <= img.width; x += s) {

  //     let index = (x + y * img.width) * 4;
  //     let r = img.pixels[index]
  //     let g = img.pixels[index + 1]
  //     let b = img.pixels[index + 2]

  //     fill(r, g, b)
  //     circle(x, y, s)
  //   }
}



// fill(r,g,b)
// circle (mouseX, mouseY,30)
// }
