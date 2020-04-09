let v;

function setup(){

  createCanvas(640,360);
  v = new Vehicle(width/2,height/2);
  console.log(v);

}

function draw(){
  background(0);

  let mouse = createVector(mouseX, mouseY);


  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 48, 48);
  v.seek(mouse);
  v.update();
  v.display();


}