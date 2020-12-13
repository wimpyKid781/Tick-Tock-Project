var clockI;
function preload() {
  clockI = loadImage("clock.gif");
}
function setup() {

}

function draw() {
  background(clockI);  
  drawSprites();
}