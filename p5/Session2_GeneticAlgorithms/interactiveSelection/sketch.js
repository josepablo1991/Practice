

let population;
let info;

function setup(){

  createCanvas(800,124);
  colorMode(RGB, 1.0, 1.0, 1.0, 1.0); // p5.js functionality to change to HSB/RGB SYSTEM
  let popmax = 10;
  let mutationRate = 0.05;
  population = new Population(mutationRate,popmax);
  button = createButton("evolve new generation");
  button.position(10, 140);
  button.mousePressed(nextGen);
  info = createDiv('');
  info.position(10, 175);

}

function draw(){
  background(1);
  population.display();
  population.rollover(mouseX, mouseY);
  info.html("Generation #:" + population.getGenerations());
}


function nextGen() {
  population.selection();
  population.reproduction();
}
