

PImage img;
float [] gray;

function setup() {
  createCanvas (800 , 400);
  img = loadImage("trash.jpg");
  gray = new float[width];
  for (var i=0; i <gray.length; i++) {
    gray[i] = random (0,255);
  }
}

function draw() {
  image(img, 0,0, width, height);
  
  for (var i=0; i < gray.length; i++) {
    float mx=mouseX /250;
    float offsetA = random (-mx, mx);
    float offsetB = random(-mx, mx);
    stroke(gray[i]);
    line(i +offsetA, 0, i-offsetB, height);
  }
}
