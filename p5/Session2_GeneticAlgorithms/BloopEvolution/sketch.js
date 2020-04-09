let world;




function setup(){
  createCanvas(640, 360);

  //World starts with 20 creatures
    // and 20 pieces of food
  world = new World(20);

}

function draw() {
  background(175);
  world.run();
}


function mousePressed() {
  world.born(mouseX, mouseY);
}

// function mouseDragged() {
//   world.born(mouseX, mouseY);
// }