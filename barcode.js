


float[] gray;
img.src = trash.jpg;

function setup() {
  createCanvas (800 , 400);
  var img1 = loadImage("trash.jpg");
  var g = new float[width];
  for (var i=0; i <gray.length; i++) {
  var gray[i] = random (0,255);
  }
}

function draw() {
  drawImage(img1, 0, 0, width, height);

  for (var i=0; i < gray.length; i++) {
    var mx = mouseX /250;
    var offsetA = random (-mx, mx);
    var offsetB = random(-mx, mx);
    stroke(gray[i]);
    line(i +offsetA, 0, i-offsetB, height);
  }
}
