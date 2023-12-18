function setup() {
 // put setup code here
createCanvas(500,500);
background('red');
}



// Click within the image to change
// the value of the rectangle
// after the mouse has been clicked

let value = 0;
function draw() {
  fill(value);
  ellipse(250, 250, 250, 250);
  describe('black 50-by-50 rect turns white with mouse click/press.');
line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
  describe(`line trail is created from cursor movements.
    faster movement make longer line.`);
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function mouseMoved() {
  value = value + 2;
  if (value > 255) {
    value = 0;
  }
}
