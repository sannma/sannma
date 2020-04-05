
function setup() { // !!! replace void !!!
createCanvas(600,600);

}

function draw() { 

  var cx = map(mouseX, 0, width, 0, 255);
  var cy = map(mouseY, 0, height, 0, 255);
  var nsize = map (mouseX,10,mouseY,10,50);
  fill(cx,cy,100,40);
  stroke(600,600);
  triangle(mouseX,mouseY,nsize,mouseX,mouseY,nsize);
}
