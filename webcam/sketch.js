let cam;
let s = 15
let chars = [" ", "。", "一", "二", "三", "木", "水", "林", "森", "爱"];
// let chars = [" ", "。", "m", "a", "g", "n", "u", "s", "h", "a"];

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(255);
  push();
  scale(-1, 1);
  translate(-width, 0);
  // image(cam, 0, 0);

  cam.loadPixels()

  for (let x = 0; x <= width; x += s) {
    for (let y = 0; y <= height; y += s) {

      let index = (x + y * cam.width) * 4
      r = (cam.pixels[index])
      g = (cam.pixels[index + 1])
      b = (cam.pixels[index + 2])

      let avg = (r + g + b) / 3
      let charIndex = floor(map(avg, 0, 255, 0, chars.length))

      fill(255, 0, 0)
      text(chars[charIndex], x, y)
      // let size = map(avg, 0, 255, 0, s)

      // fill(255)
      // circle(x, y, size)

    }
  }
  pop();
}

