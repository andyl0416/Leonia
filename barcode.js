// creates an array, you don't have to specify that you're adding floats to it like you would in java


var gray = [];

var img;
function preload() {
  // use this line instead to use your trash image
  // img = loadImage('trash.jpg');
  // delete this example line of code
  img = loadImage('https://ul.countable.us/ul/q_auto/uploads/mp0vD2D4/2b293e/Landfill.jpg');
}

function setup() {

  createCanvas(800, 480);

  for (var i = 0; i < width; i++) {
    // add a gray color value to the array "gray"
    gray.push(random(0, 256));
  }
}

function draw() {
  //background(220);
  image(img, 0 , 0, width, height);

  for (var i = 0; i < gray.length; i++) {
    var mx = mouseX/1000;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    stroke(gray[i]);
    line(i+offsetA, 0 , i-offsetB, height);
  }
}
